import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup, TextField } from '@material-ui/core';
import "../styles/UseForm.css";
import axios from 'axios';

const Editform = () => {
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

      const [role,setRole]=React.useState([]as any)
      const id = localStorage.getItem("edit_id");
     

      const getRoles=(e)=>{

        let data=role;

      data.push(e.target.value)

        setRole(data)

        console.warn(role)

      }

      const[value,setValue]=React.useState({
        firstName:"",
        lastName:"",
        mobile:"",
        email:"",
        age:"",
        address:"",
        gender:"",
        country:"",
        state:"",
        city:"",
        password:"",
        confirmPassword:"",
        id:""

       

      });
  

    React.useEffect(()=>{

        axios.get('https://localhost:7032/api/User/GetUserById?Id='+id)

        .then(


          res=>{

                setValue({...value,

                    firstName:res.data.Result.firstName,
                    lastName:res.data.Result.lastName,
                    mobile:res.data.Result.phoneNumber,
                    email:res.data.Result.email,
                    age:res.data.Result.age,
                    address:res.data.Result.address,
                    gender:res.data.Result.gender,

                    country:res.data.Result.country,
                    city:res.data.Result.city,
                    state:res.data.Result.state,

                    password:res.data.Result.password,
                    id:res.data.Result.id
                })
            }
        )
        .catch(err=>console.log(err))

    },[])

    const handleSubmit=(e)=>{

        e.preventDefault();

        const response =axios.post("https://localhost:7032/api/User/UpdateUser",{

            Id:value.id,

            FirstName:value.firstName,

            LastName:value.lastName,

            Email:value.email,

            Password:value.password,

            PhoneNumber:value.mobile,

            Age:value.age,

            Gender:value.gender,

            Address:value.address,

            City:value.city,

            State:value.state,

            Country:value.country,

           

        })

        .then((response) => {

          if (response.data.StatusCode=200) {
    
                 alert('User updated Successfully');
               window.location.reload();
          }
  
  
        })
  
        .catch((err) => {
  
          console.log("Err", err);
  
        });
  
      console.log(response);
  
    }

   

     

  return (
<>

    <Box sx={{ flexGrow: 1 }} >

     

     

      <Grid container spacing={2} >





        <Grid item xs={6} className='item'>

          <TextField

         

           required

           label="First Name"

           id="firstName"

           name="firstName"

           value={value.firstName}

          variant="outlined"

          onChange={e=>setValue({...value,firstName:e.target.value




        })}

         

          />

        </Grid>

        <Grid item xs={6} className='item'>

          <TextField required

          label="Last Name"

           id="lastName"

           name="lastName"

           value={value.lastName}

           variant="outlined"

           onChange={e=>setValue({...value,lastName:e.target.value




           })}       />

        </Grid>

        <Grid item xs={6} className='item'>

          <TextField

          required

           label="Mobile"

             id="mobile"  

             name="mobile"  

             variant="outlined"

             value={value.mobile}

             onChange={e=>setValue({...value,mobile:e.target.value
             })}
             />

        </Grid>

        <Grid item xs={6} className='item'>

          <TextField required

          label="Email"

          type="email"

          id="email"

           name="email"

           variant="outlined"

           value={value.email}

           onChange={e=>setValue({...value,email:e.target.value

           })}

             

           />

        </Grid>

        <Grid item xs={6} className='item'>

        <TextField

         required

         label="Age"

         type="number"

          id="age"

          name="age"  

          variant="outlined"

          value={value.age}

          onChange={e=>setValue({...value,age:e.target.value

          })} />

        </Grid>

          <Grid item xs={6} className='item'>

  <TextField

          required

          id="country"

          select

          label="Country"

          defaultValue="User"

          variant='outlined'

          value={value.country}

          onChange={e=>setValue({...value,country:e.target.value

          })}
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

          required

          id="state"

          select

          label="State"

          defaultValue="Bangalore"

          variant='outlined'

          value={value.state}

          onChange={e=>setValue({...value,state:e.target.value
          })}
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

          required

          id="city"

          select

          label="City"

          defaultValue="Chennai"

          variant='outlined'

          name="city"

          value={value.city}

          onChange={e=>setValue({...value,city:e.target.value




          })}

        
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

          required

          id="address"

          label="Address"

          multiline

          rows={3}

          name="address"

          value={value.address}

          variant="outlined"

          onChange={e=>setValue({...value,address:e.target.value

          })}
        />

    </Grid>

    <Grid item xs={6} className='item'>

  <FormControl>

<FormLabel id="gender">Gender</FormLabel>

<RadioGroup

    aria-labelledby="demo-radio-buttons-group-label"

    defaultValue="female"

    name="gender"

    value={value.gender}

    onChange={e=>setValue({...value,gender:e.target.value
    })}

>
<FormControlLabel value="female" control={<Radio />} label="Female" />

<FormControlLabel value="male" control={<Radio />} label="Male" />

<FormControlLabel value="other" control={<Radio />} label="Other" />

</RadioGroup>

</FormControl>

  </Grid>

  <Grid item xs={6} className='item'>

  <FormGroup >

  <FormLabel id="role" required>Role</FormLabel>

  <FormControlLabel control={<Checkbox color="primary" value='Admin' onChange={(e)=>getRoles(e)}></Checkbox>} label="Admin" />

  <FormControlLabel control={<Checkbox color="primary" value='Super Admin' onChange={(e)=>getRoles(e)}></Checkbox>} label="Super Admin" />

  <FormControlLabel control={<Checkbox color="primary" value='User' onChange={(e)=>getRoles(e)}></Checkbox>} label="User" />

</FormGroup>

  </Grid>
<Grid item xs={6} className='item'>

  <Button style={{marginLeft:250}} type="submit" color="primary" variant="contained" onClick={handleSubmit}>Edit</Button>

  </Grid>

      </Grid>

    </Box>
</>
  )

}




export default Editform