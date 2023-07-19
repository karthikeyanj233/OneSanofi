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
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.sanofi.com/en">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>

  );
}

const defaultTheme = createTheme();

export default function Login() {
  
const [userexists,setUserexists]=useState('');
const [para,setpara]=useState('');
const [successmsg,setSuccessMessage]=useState("");
  const navigate = useNavigate();
  const [login,setLogin] = useState(
    {
         email:"",
         password:""
  }
  ) ;

  const handleChange = (e)=>{
    const value=e.target.value;
       setLogin({...login,[e.target.name]:value});
  };

  const saveCustomer=(e)=>{
    e.preventDefault();
    const response = axios.post("https://localhost:7032/api/Login/Login",{
      Email:login.email,
      Password:login.password,
    
    })
    .then((response)=>{
      if(response.data.Message=='Request successful.'){
        setSuccessMessage("login successfully !");
        navigate('/home');  
        localStorage.setItem("user", login.email);
 };
 return setUserexists("*name or password is wrong")
        })
    .catch((err)=>{
            console.log("Err",err);
          });
       
  }
const submit=(e)=>{
  saveCustomer(e)
  

}

    const navigateToSignup = () => {
      // 👇️ navigate to /contacts
      navigate('/signup');
    };;
 
    

  return (
    <ThemeProvider theme={defaultTheme}>
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
          
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>

          {userexists.length > 0 && 
        (<div style={{color:"red"}}>{userexists}</div>)}

          
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus  value={login.email} onChange={(e)=>handleChange(e)}
            />
             
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"  value={login.password} onChange={(e)=>handleChange(e)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}  onClick={submit}
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
                <Link href="#" variant="body2" onClick={navigateToSignup}>
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