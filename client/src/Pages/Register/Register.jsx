import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAccout } from "../../redux/apiRequest";
import "./register.css";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
// const Register = () => {
//     const [email, setEmail] = useState("");
//     const [userName, setUserName] = useState("");
//     const [phoneNumber, setPhoneNuber] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const handleSubmit = (e) => {
//         e.preventDefault();   
//         if(
//             !email.match(process.env.REACT_APP_REGEX) &&
//             userName !== "" &&
//             password === confirmPassword

//         ){
//             let newUser = {
//                 userName: userName,
//                 email: email,
//                 phoneNumber: phoneNumber,
//                 password: password
//             }
//             console.log(process.env.REACT_APP_REGEX);
//             registerAccout(newUser, dispatch, navigate)

//         } else {
//             console.log("infomation is not correct");
//         }

//     }

//     return ( 
//         <div className="register">
// <NavBar />
//         <section className="register-container">
//               <div className="register-title">Đăng Ký Tài Khoản</div>
//             <form>
//                 <label>EMAIL</label>
//                 <input type="text" placeholder="Enter your email"  onChange={(e) => setEmail(e.target.value)}/>
//                 <label>Tên Tài Khoản</label>
//                 <input type="text" placeholder="Enter your username" onChange={(e) => setUserName(e.target.value)}/>
//                 <label>Số Điện Thoại</label>
//                 <input type="text" placeholder="Enter your username" onChange={(e) => setPhoneNuber(e.target.value)}/>
//                 <label>Mật Khẩu</label>
//                 <input type="password" placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>
//                 <label>Nhập Lại Mật Khẩu</label>
//                 <input type="password" placeholder="Enter your password" onChange={(e)=> setConfirmPassword(e.target.value)}/>
//                 <button type="submit" onClick={handleSubmit}>Tạo Tài Khoản</button>
//             </form>
//         </section>
//         </div>
        
//      );
// }
 
// export default Register;

import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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

export default function Register() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();



    const handleSubmit = (e) => {
        e.preventDefault();   
        if(
            !email.match(process.env.REACT_APP_REGEX) &&
            userName !== "" &&
            password === confirmPassword

        ){
            let newUser = {
                userName: userName,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
            }

            registerAccout(newUser, dispatch, navigate)

        } else {
            alert("infomation is not correct");
        }

    }

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
            Đăng Ký Tài Khoản
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Họ tên"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Số điện thoại"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật Khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=> setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Xác nhận mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=> setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Đăng Ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Bạn đã có tài khoản rồi? Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
 
      </Container>
    </ThemeProvider>
  );
}