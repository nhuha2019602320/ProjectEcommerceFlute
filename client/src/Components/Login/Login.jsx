import "./login.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/apiRequest";
import NavBar from "../NavBar/NavBar";
// import axios from "axios";
// import dotenv from  'dotenv'

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const userLogin = {
//       email: email,
//       password: password,
//     };
    
//     loginUser(userLogin, dispatch, navigate);
//     console.log("123", process.env.REACT_APP_URL_LOCALHOST);
//   };
//   return (
//     <div className="login">
//       <NavBar />
//     <div className="ff">

//       <section className="login-container">
//         <div className="login-title">Đăng Nhập Vào Hệ Thống</div>
//         <form>
//           <label>Email</label>
//           <input
//             type="text"
//             placeholder="Enter your username"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Mật Khẩu</label>
//           <input
//             type="password"
//             placeholder="Enter your password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit" onClick={handleSubmit}>
//             {" "}
//             Đăng Nhập{" "}
//           </button>
//           {/* </form> */}
//         </form>
//         <div className="login-register"> Bạn Chưa Chưa Có Tài Khoản?</div>
//         <Link className="login-register-link" to="/register">
//           Ấn Đây Để Đăng Ký !{" "}
//         </Link>
//       </section>
//     </div>
//     </div>
//   );
// };

// export default Login;

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const userLogin = {
      email: email,
      password: password,
    };
    
    loginUser(userLogin, dispatch, navigate);
    console.log("123", process.env.REACT_APP_URL_LOCALHOST);
  };

  return (
    <ThemeProvider theme={theme}>
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

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}