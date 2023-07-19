import * as React from 'react';

import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';

import Grid from '@mui/material/Grid';

import {GrAdd}from "react-icons/gr";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Radio, RadioGroup, TextField } from '@material-ui/core';

import "../styles/UseForm.css";

import axios from 'axios';

import { confirmPassword, emailValidator, mobileValidator, nameValidator, passwordValidator } from './Validator';
import { AiFillCloseCircle } from 'react-icons/ai';




const UseForm = () => {

  const country = [

    {

      value: 'India',

      label: 'India',

    },

    {

      value: 'USA',

      label: 'USA',

    },

    {

      value: 'Srilanka',

      label: 'Srilanka',

    },

  ];

  const state = [

    {

      value: 'TamilNadu',

      label: 'TamilNadu'

    },

    {

      value: 'Kerala',

      label: 'Kerala',

    },

    {

      value: 'Bangalore',

      label: 'Bangalore',

    },

  ];

  const city = [

    {

      value: 'Chennai',

      label: 'Chennai'

    },

    {

      value: 'Tanjore',

      label: 'Tanjore',

    },

    {

      value: 'Karur',

      label: 'karur',

    },

  ];

  const [fNameError, setFNameError] = React.useState("")

  const [lNameError, setLNameError] = React.useState("")

  const [mobileError, setMobileError] = React.useState("")

  const [emailError, setEmailError] = React.useState("")

  const [passwordError, setPasswordError] = React.useState("")

  const [confirmPasswordError, setConfirmPasswordError] = React.useState("")

  const [countryError, setCountryError] = React.useState("")

  const [stateError, setStateError] = React.useState("")

  const [cityError, setCityError] = React.useState("")

  const [addressError, setAddressError] = React.useState("")

  const [genderError, setGenderError] = React.useState("")




  const [ageError, setAgeError] = React.useState("")

  const [roleError, setRoleError] = React.useState("")

  const [successmsg, setSuccessMessage] = React.useState("");

  const [userexists, setUserexists] = React.useState('');

  const [role, setRole] = React.useState([] as any)




  const [form, setForm] = React.useState({

    firstName: "",

    lastName: "",

    mobile: "",

    email: "",

    age: "",

    address: "",

    gender: "",

    country: "",

    state: "",

    city: "",

    password: "",

    confirmPassword: "",




  });

 

  const handleChange = (e) => {

    const value = e.target.value;

    setForm({ ...form, [e.target.name]: value });

  };

  const getRoles = (e) => {

    const {value,checked}=e.target

    if(checked){

      setRole(pre=>[...pre,value])

    }else(

      setRole(pre=>{

        return [...pre.filter(skill=>skill!==value)]

      })

    )

  }

  console.warn(role)

  const saveCustomer = (e) => {

    e.preventDefault();

    const response = axios.post("https://localhost:7032/api/User/CreateUser", {

      FirstName: form.firstName,

      LastName: form.lastName,

      Email: form.email,

      Password: form.password,

      PhoneNumber: form.mobile,

      Age: form.age,

      Gender: form.gender,

      Address: form.address,

      City: form.city,

      State: form.state,

      Country: form.country,

      //RoleModel:"[{"Role_Name":""},{}]"

    })

      //form.fi:FirstName



        .then((response) => {

          if (response.data.StatusCode=200) {
    
                 alert('User Deloeted Successfully');
               window.location.reload();
          }
  
  
        })
  
        .catch((err) => {
  
          console.log("Err", err);
  
        });
  
      console.log(response);

  }




  const submit = (e) => {

    //FirstName

    if (!form.firstName || !form.firstName.length) {

      setFNameError("First name is required");

    }

    else if(!nameValidator(form.firstName)){

      setFNameError("Enter valid name")

    }

    else { setFNameError(""); }




    //LastName

    if (!form.lastName || !form.lastName.length) {

      setLNameError("Last name is required");

    }

    else { setLNameError(""); }




    //Email

    if (!form.email || !form.email.length) {

      setEmailError("Email is required")

    }

    else if (!emailValidator(form.email)) {

      setEmailError("Enter proper email")

    }

    else { setEmailError(""); }

    //Password

    if (!form.password || !form.password.length) {

      setPasswordError("Password is required")

    }

    else if (!passwordValidator(form.password)) {

      setPasswordError("Enter strong password")

    }

    else { setPasswordError(""); }

    //confirm password

    if (!form.confirmPassword || !form.confirmPassword.length) {

      setConfirmPasswordError("Password is required")

    }

    else if(!confirmPassword(form.confirmPassword, form.password)) {

      setConfirmPasswordError("Password doesn't match")

    }

    else { setConfirmPasswordError(""); }

    //Mobile

    if (!form.mobile || !form.mobile.length) {

      setMobileError("This field is required");

    }

    else if(!mobileValidator(form.mobile))

    {

      setMobileError("Enter correct mobile number")

    }

    else { setMobileError(""); }

    //role

    if (!role || !role.length) {

      setRoleError(" is required");

    }

    else { setRoleError(""); }

    //db

    saveCustomer(e)

    console.log(form);
  }
  const [open, setOpen] =React.useState(false);

  const handleClickToOpen = () => {

    setOpen(true);
};

const handleToClose = () => {

  setOpen(false);

};

  return (
    <>
<div className='add_user_button'>
<Button color="primary"  variant="contained" onClick={handleClickToOpen}>Add User</Button>
</div>
 

<Dialog open={open} >


<div className='dialogutitle'>
           
            <h2 className='add'>Add User</h2>
            <h4 className='close' onClick={handleToClose}><AiFillCloseCircle></AiFillCloseCircle></h4>
         

            </div>



<DialogContent>

    <DialogContentText>

  
<Box sx={{ flexGrow: 1 }} >





  <Grid container spacing={2} >





    <Grid item xs={6} className='item'>

      <TextField

        error={fNameError && fNameError.length && !nameValidator(fNameError)? true : false}

        required

        label="First Name"

        id="firstName"

        name="firstName"

        value={form.firstName}

        helperText={fNameError}

        variant="outlined" onChange={(e) => handleChange(e)} />

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

        error={lNameError && lNameError.length ? true : false}

        helperText={lNameError}

        required

        label="Last Name"

        id="lastName"

        name="lastName"

        value={form.lastName}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

        required

        error={mobileError && mobileError.length && !mobileValidator(mobileError) ? true : false}

        helperText={mobileError}

        label="Mobile"

        id="mobile"

        name="mobile"

        type="text"

       

        value={form.mobile}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

        required

        label="Email"

        error={emailError && emailError.length && !emailValidator(emailError) ? true : false}

        helperText={emailError}

        type="email"

        id="email"

        name="email"

        value={form.email}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>




    <Grid item xs={6} className='item'>

      <TextField

        required

        label="Password"

        error={passwordError && passwordError.length && !passwordValidator(passwordError) ? true : false}

        helperText={passwordError}

        id="password"

        name="password"

        type="password"

        value={form.password}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

        required

        error={confirmPasswordError && confirmPasswordError.length && !confirmPassword(confirmPasswordError,passwordError) ? true : false}

        helperText={confirmPasswordError}

        label="Confirm Password"

        id="confirmPassword"

        name="confirmPassword"

        type="password"

        value={form.confirmPassword}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

        label="Age"

        type="number"

        id="age"

        name="age"

        value={form.age}

        variant="outlined"

        onChange={(e) => handleChange(e)} />

    </Grid>




    <Grid item xs={6} >

      <TextField

      className='dropdown'

        id="country"

        select

        label="Country"

        defaultValue="User"

        variant='outlined'

        name="country"

        value={form.country}

        onChange={(e) => handleChange(e)}

      >

        {country.map((option) => (

          <MenuItem key={option.value} value={option.value}>

            {option.label}

          </MenuItem>

        ))}

      </TextField>

    </Grid>




    <Grid item xs={6} className='item'>

      <TextField

      className='dropdown'

        id="state"

        select

        label="State"

        defaultValue="Bangalore"

        variant='outlined'

        name="state"

        value={form.state}

        onChange={(e) => handleChange(e)}

      >

        {state.map((option) => (

          <MenuItem key={option.value} value={option.value}>

            {option.label}

          </MenuItem>

        ))}

      </TextField>

    </Grid>

    <Grid item xs={6} className='item'>

      <TextField

      className='dropdown'

        id="city"

        select

        label="City"

        defaultValue="Chennai"

        variant='outlined'

        name="city"

        value={form.city}

        onChange={(e) => handleChange(e)}

      >

        {city.map((option) => (

          <MenuItem key={option.value} value={option.value}>

            {option.label}

          </MenuItem>

        ))}

      </TextField>

    </Grid>

    <Grid item xs={22} className='item'>

      <TextField

        id="address"

        label="Address"

        multiline

        rows={3}

        name="address"

        value={form.address}

        variant="outlined"

        onChange={(e) => handleChange(e)}

      />

    </Grid>

    <Grid item xs={6} className='item'>

      <FormControl>

        <FormLabel id="gender">Gender</FormLabel>

        <RadioGroup




          aria-labelledby="demo-radio-buttons-group-label"

          defaultValue="female"

          name="gender"

          value={form.gender}

          onChange={(e) => handleChange(e)}

        >

          <FormControlLabel value="female" control={<Radio />} label="Female" />

          <FormControlLabel value="male" control={<Radio />} label="Male" />

          <FormControlLabel value="other" control={<Radio />} label="Other" />

        </RadioGroup>

        <FormHelperText><div style={{ color: "red" }}>{genderError}</div></FormHelperText>

      </FormControl>

    </Grid>




    <Grid item xs={6} className='item'>

      <FormControl

      error={roleError && roleError.length ? true : false}

      >

      <FormGroup

      onChange={(e) => handleChange(e)}>

        <FormLabel id="role" required>Role</FormLabel>

        <FormControlLabel control={<Checkbox color="primary" value='Admin' onChange={(e) => getRoles(e)}></Checkbox>} label="Admin" />

        <FormControlLabel control={<Checkbox color="primary" value='Super Admin' onChange={(e) => getRoles(e)}></Checkbox>} label="Super Admin" />

        <FormControlLabel control={<Checkbox color="primary" value='User' onChange={(e) => getRoles(e)}></Checkbox>} label="User" />

      </FormGroup>

      <FormHelperText><div style={{ color: "red" }}>{roleError}</div></FormHelperText>

      </FormControl>

    </Grid>




    <Grid item xs={6} className='item'>

      <Button type="submit" color="primary" variant="contained" onClick={submit}>Submit</Button>

    </Grid>




  </Grid>

</Box>
      
    </DialogContentText>
        </DialogContent>

        <DialogActions>

        </DialogActions>

        </Dialog>
    </>
  )

}




export default UseForm