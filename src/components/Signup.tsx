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
import { useState } from 'react';
import {passwordValidator,emailValidator} from "./Validator"
import { useDispatch } from 'react-redux';
import {signupn} from "./SignupSlice";
import Profile from './Profile';


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

export default function Signup() {

  const [passworderror,setPasswordError]=useState("");
  const [mailerror,setMailError]=useState("");
  const navigate = useNavigate();
  const [signup,setsignup] = useState(
    {
         email:"",
         password:""
  }
  ) ;

  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(signupn({
          email:signup.email,
          password:signup.password,
    }))
  }

  const handleChange = (e)=>{
    const value=e.target.value;
       setsignup({...signup,[e.target.name]:value});
  };


    const navigateToLogin = () => {
      // 👇️ navigate to /contacts
      navigate('/login');
    };;

    const navigateToProfile = () => {
      // 👇️ navigate to /contacts
      navigate('/profile');
    };

    async function save(e){
      e.preventDefault();
      if(!emailValidator(signup.email)) return setMailError("* please enter a valid email")
      if(!passwordValidator(signup.password)) return setPasswordError("* The Password must be strong")
      try {
        await axios.post("http://localhost:3001/api/Loginpage/signin",{
          Id:signup.email,
          password:signup.password,
        
        });
        alert("registeration sucessful")
        navigate('/login')
      } catch (err) {
        console.log(err);
        
      }
    }
    const submit=(e)=>{
      save(e)
      handleChange(e)
      handleSubmit(e)
    
    }
 
    

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
            Sign Up
          </Typography>
          <Box component="form"   noValidate sx={{ mt: 1 }}>
          {mailerror.length > 0 && 
        (<div style={{color:"red"}}>{mailerror}</div>)}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus value={signup.email} onChange={(e)=>handleChange(e)}
            />
            {passworderror.length > 0 && 
        (<div style={{color:"red"}}>{passworderror}</div>)}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"  value={signup.password} onChange={(e)=>handleChange(e)}
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
               
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={navigateToLogin}>
                  {"Already Have account Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Link href="#" variant="body2" onClick={navigateToProfile}>
                  {"profile"}
                </Link>
      <Profile></Profile>
    </ThemeProvider>
  );
}