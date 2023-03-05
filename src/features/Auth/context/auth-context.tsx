import React, { createContext, useContext, useEffect } from "react";
import { setAuthToken } from "../../../api";

import useLocalStorage from "../../../hooks/useLocalStorage";
import { removeHeaders } from "../../../lib/requests";
import { getDateUnix } from "../../../utils/format";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  idToken: string | null;
  setIdToken: (user: string | null) => void;
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
}

interface Profile {
  email: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  name: string;
  picture: string;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthContextValue;

const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [idToken, setIdToken] = useLocalStorage<string | null>("INTH20_ID_TOKEN", null);
  const [profile, setProfile] = useLocalStorage<Profile | null>("INTH20_PROFILE_DECODED", null);
  if (idToken) setAuthToken(idToken);

  console.log(profile)

  useEffect(() => {
    // console.log(jwtDecode(idToken))
    // if token is null - exit
    // console.log(idToken);

    if (idToken == null) {
      return;
    }

    setAuthToken(idToken);

    // if token is present, but not valid - set to null
    if (getDateUnix(profile!.exp) < new Date()) {
      setIdToken(null);
      setProfile(null);
      return;
    }
  }, [idToken, profile, setIdToken, setProfile]);

  // TODO
  // useEffect(() => {
  //   if (!profile) return;

  //   const time = getDateUnix(profile!.exp).getMilliseconds() - new Date().getMilliseconds();
  //   const clearProfile = () => {
  //     setIdToken(null);
  //     setProfile(null);
  //   };
  //   const cleanup = setTimeout(clearProfile, time);

  //   return () => clearTimeout(cleanup);
  // }, [profile]);

  // console.log(idToken);

  return (
    <AuthContext.Provider
      value={{
        idToken,
        setIdToken,
        profile,
        setProfile,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
