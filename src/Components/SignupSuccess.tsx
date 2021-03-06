import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import DoneIcon from '@material-ui/icons/Done';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import Alert from '@mui/material/Alert';
import User from '../Models/User';
import UserUseCase from '../Application/UserUseCase';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Weelo | Mauricio Zapata [Technical Test]
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignupSuccess(props) {
  const handleLogin = (event) => {
    window.history.pushState(null, null, '/login');
    window.location.reload();
  }

  return (<ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <DoneIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign-up was successfull
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <Link onClick={handleLogin} variant="body2">
            {"Return to login page"}
          </Link>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>)
}