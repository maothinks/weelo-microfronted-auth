import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
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

export interface State extends SnackbarOrigin {
  open: boolean;
}

export default function SignUp(props) {
  const [snakMessage, setSnakMessage] = useState({ open: false, message: "" });

  const handleClose = () => {
    setSnakMessage({ ...snakMessage, open: false });
  };

  const handleLogin = (event) => {
    window.history.pushState(null, null, '/login');
    window.location.reload();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    var user = new User();
    user.username = data.get('username').toString();
    user.firstName = data.get('firstname').toString();
    user.address = data.get('address').toString();
    user.password = data.get('password').toString();
    user.passwordconfirm = data.get('passwordconfirm').toString();

    if (user.password != user.passwordconfirm) {
      setSnakMessage({ ...snakMessage, open: true, message: "Password and password confirmation does not match" });
      return;
    }

    new UserUseCase().signUp(user).then((result)=>{
      window.history.pushState(null, null, '/signup-success');
      window.location.reload();

    }).catch(err =>{
        setSnakMessage({ ...snakMessage, open: true, message: "AUTH MICROSERVICE: " + err.toString() });
    });
  };

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="address"
            label="Address"
            name="address"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="passwordconfirm"
            label="Confirm Password"
            type="password"
            id="passwordconfirm"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="success"
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container>
            <Grid item xs>
            </Grid>
            <Grid item>
              <Link onClick={handleLogin} variant="body2">
                {"Return to login page"}
              </Link>
            </Grid>
          </Grid>

          <Snackbar
            anchorOrigin={{ "vertical": "top", "horizontal": "right" }}
            open={snakMessage.open}
            onClose={handleClose}>
            <Alert variant="filled" severity="error">{snakMessage.message}</Alert>
          </Snackbar>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  </ThemeProvider>)
}