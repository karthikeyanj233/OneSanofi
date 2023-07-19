import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes ,Route, BrowserRouter} from 'react-router-dom';      
import Home from "./components/Home";
import Login from './components/Login';
import  Signup from './components/Signup';
import General from './components/General';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Moveup from './components/Moveup';
import Details from './components/Details';
import Sidebar from './components/Sidebar';
import Onbording from './components/pages/Onbording';
import Navebar from './components/Navebar';



function App() {

  
  return (
    <>
    
<BrowserRouter>
  <Routes>

    <Route path="/Profile" element={<Profile></Profile>}/>
    <Route path="/home" element={<Home></Home>}/>
    <Route path='/details' element={<Details></Details>}></Route>
    <Route path='login/*' element={<Login></Login>}/>
    <Route path='/signup' element={<Signup></Signup>}/>
    <Route path="/general" element={<General></General>}/>
   
   
  </Routes>
  <Moveup></Moveup>
 
  </BrowserRouter>

    </>
  );
}

export default App;
