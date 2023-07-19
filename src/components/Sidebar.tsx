import React, { useEffect, useState } from 'react';
import { AiOutlineUserAdd,AiFillHome}from "react-icons/ai";
import { GiHamburgerMenu}from "react-icons/gi";
import { FiSettings}from "react-icons/fi";
import { AiFillEdit}from "react-icons/ai";
import { PiStudentBold}from "react-icons/pi";
import {BiSolidReport}from "react-icons/bi";
import Onbording from './pages/Onbording';
import Home from './pages/Home';
import '../styles/Sidebar.css'
import { useNavigate } from 'react-router-dom';
import Settings from './pages/Settings';
import { Avatar, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import transitions from '@material-ui/core/styles/transitions';
import Content_edit from './pages/Content_edit';
import Navebar from './Navebar';
import { logout } from './SignupSlice';
import {Element} from 'react-scroll'
import '../styles/Navebar.css';
import cognizant from '../images/Cognizant_logo.png'
import sanofi from '../images/Sanofi_logo.png'
import { Logout } from '@mui/icons-material';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
  const [menudata, setMenudata] = useState("onbording");
    const toggle = () => setIsOpen (!isOpen);
    useEffect(() => {   

        setMenudata("")
      }, []);

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
      <>

<Element name='navebar'>
        <div className='navebar row muiAppBar'>
        <div className="top_section">

<div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
    <GiHamburgerMenu onClick={toggle}/>
</div>
</div>

<img className='cognizant' onClick={()=>navigate('/home')} src={cognizant}></img>

            <h1>One University</h1>
            <img className='sanofi' src={sanofi}></img>
               


<div className='account'>
<h4>{user}Arun R</h4>
  <IconButton

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





        
        <div className="container">
         
           <div style={{width: isOpen ? "220px" : "70px" , backgroundColor: 'white',color: 'black'}} className="sidebar">
            
              <div className='liItems'>
            
              <div className='spage' onClick={()=>setMenudata('')}>
                <div className="icon"><AiFillHome/></div>
               <div  style={{display: isOpen ? "block" : "none"}} className="link_text">Home</div>
               </div>
               
                <div className='spage' onClick={()=>setMenudata('onboarding')}>
                <div className="icon"><AiOutlineUserAdd/></div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">Onboarding</div>
               </div>
               <div className='spage' onClick={()=>setMenudata('content_edit')}>
                <div className="icon"><AiFillEdit/></div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">Content_Edit</div>
               </div>
               <Divider/>
               <div className='spage' onClick={()=>setMenudata('setting')}>
                <div className="icon"><PiStudentBold/></div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">My_Training</div>
               </div>
               <div className='spage' onClick={()=>setMenudata('setting')}>
                <div className="icon"><BiSolidReport/></div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">Reports</div>
               </div>
               <div className='spage' onClick={()=>setMenudata('setting')}>
                <div className="icon"><FiSettings/></div>
               <div style={{display: isOpen ? "block" : "none"}} className="link_text">Setting</div>
               </div>
              </div>
           </div>
           <main>
 
           {menudata=="onboarding" && <Onbording></Onbording>}
           {menudata=="setting" && <Settings></Settings>}
{menudata=="" && <Home></Home>}
{menudata=="content_edit" && <Content_edit></Content_edit>}
           </main>
        </div>
        </>
    );
};

export default Sidebar;