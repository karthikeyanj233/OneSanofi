import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Element} from 'react-scroll'
import '../styles/Navebar.css';
import cognizant from '../images/Cognizant_logo.png'
import sanofi from '../images/Sanofi_logo.png'
import { Logout } from '@mui/icons-material';
function stringToColor(string: string) {

  let hash = 0;

  let i;

  for (i = 0; i < string.length; i += 1) {

    hash = string.charCodeAt(i) + ((hash << 5) - hash);

  }
  let color = '#';

  for (i = 0; i < 3; i += 1) {

    const value = (hash >> (i * 8)) & 0xff;

    color += `00${value.toString(16)}`.slice(-2);

  }
  return color;

}
function stringAvatar(name: string) {

  return {

    sx: {

      bgcolor: stringToColor(name),

    },

    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,

  };

}

const Navebar = () => {
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user=localStorage.getItem("user");
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout=()=>{
    handleClose();
    localStorage.setItem('user','')
  }
  const navigateToProfile = () => {
    // 👇️ navigate to /contacts
    navigate('/general');
  };;
  return (

<Element name='navebar'>
        <div className='navebar row muiAppBar'>

<img className='cognizant' onClick={()=>navigate('/home')} src={cognizant}></img>

            <h1>One University</h1>
            <img className='sanofi' src={sanofi}></img>
               


<div className='account'>
<h4>{user}Arun R</h4>
  <IconButton

    size="large"

    aria-label="account of current user"


    aria-controls="menu-appbar"

    aria-haspopup="true"

    onClick={handleClick}

   className='usericon'

    color="inherit"
  >

    <Avatar></Avatar>

  </IconButton>
  <Menu 
        className='dropdown'
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem  className='menuitem'onClick={navigateToProfile}>
          <Avatar /> Profile
        </MenuItem>
        <Divider /> 
        <MenuItem className='menuitem' onClick={()=>{logout()}}>
          <ListItemIcon >
            <Logout fontSize="small" />
          </ListItemIcon >
          Logout
        </MenuItem>
      </Menu>
</div>

        </div>
        </Element>

      )}
export default Navebar
