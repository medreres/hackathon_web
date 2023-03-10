import { Button } from "@mui/material";
import { CredentialResponse, GoogleLogin, googleLogout } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useAuthContext } from "../context/auth-context";

// const GoogleAuthButton = styled(Button)({
//   border: "2px solid",
//   fontWeight: 500,
//   borderRadius: "8px",
//   padding: "8px 16px",
//   textTransform: "none",
//   lineHeight: "27px",
//   margin: "24px ",
// });

// const GoogleAuth = () => {
//   const { userProfile, addUser, removeUser } = useAuthStore();

//   const login = useGoogleLogin({
//     onSuccess: (codeResponse) => console.log(codeResponse),
//     flow: "auth-code",
//   });

//   return (
//     <div>
//       <GoogleAuthButton
//         variant="contained"
//         onClick={() => login()}>
//         <Google />{" "}
//         <Typography
//           ml={0.5}
//           variant="body1">
//           Sign in with Google
//         </Typography>
//       </GoogleAuthButton>
//     </div>
//   );
//   googleLogout();
// };

// export default GoogleAuth;

// TODO handle token expiration

const GoogleAuth = () => {
  const { idToken, setIdToken, profile, setProfile } = useAuthContext();

  const handleLogin = ({ credential }: CredentialResponse) => {
    setIdToken(credential as string);
    setProfile(jwtDecode(credential as string));
  };

  const handleLogout = () => {
    googleLogout();
    setProfile(null);
    setIdToken(null);
  };

  // console.log(idToken)

  // TODO styling
  if (idToken)
    return (
      <>
        <img
          style={{
            borderRadius: "100%",
            marginRight: "1em",
          }}
          alt="profile"
          height={48}
          src={profile?.picture}
        />{" "}
        <Button
          variant="outlined"
          onClick={handleLogout}
          sx={{
            fontSize: "16px",
            padding: "8px 24px",
            color: '#0A0908',
            borderRadius: "36px",
            textTransform: "none",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid #0A0908",
            ':hover': {
              bgcolor: '#fff', 
              border: "1px solid #0A0908",
            },
          }}
        >
          Log out
        </Button>
      </>
    );

  // render login button if not authenticated
  return (
    <GoogleLogin
      auto_select
      onSuccess={handleLogin}
      // TODO handle error
      onError={() => {
        alert("An error occurred. Please try again later");
      }}
    />
  );
};

export default GoogleAuth;
