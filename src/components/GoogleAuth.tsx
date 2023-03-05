import React, { useState } from 'react';
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleAuthButton = styled(Button)({
  border: '1px solid',
  fontWeight: 500,
  borderRadius: '26px',
  padding: '12px 24px',
  textTransform: 'none',
  lineHeight: '27px',
  mx: '24px ',
  my: '12px',
  bgColor: '#fff', 
  ':hover': {
    bgColor: '#fff', 
  },
})

const GoogleAuth = () => {
  // const login = useGoogleLogin({
  //   onSuccess: codeResponse => console.log(codeResponse),
  //   flow: 'auth-code',
  // });

  return (
    <div>
      
      <GoogleAuthButton 
        variant="contained"
        // onClick={() => login()}
      >
        <GoogleIcon         
          fontSize="medium"
          sx={{marginRight: "16px"}}
        />
        Sign in with Google
      </GoogleAuthButton>
    </div>
  )
  // googleLogout();
}

export default GoogleAuth