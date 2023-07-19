import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import Footer from './Footer'
import axios from 'axios';
import { Paper } from '@material-ui/core';
import '../styles/Details.css'
const Details = () => {
    const id = localStorage.getItem("id");
    const details = localStorage.getItem("name");
    const [para,setPara]=useState() as any;

   
      useEffect(() => { 
       getData(id);
      }, []);

      const getData = async (id) =>{
        const {data}= await axios.get(
          "https://localhost:7032/api/Dashboard/GetDashboardDetailsById?Id="+id
        );
        const General = data.Result.dashboard_Html;
        setPara(General);
      
      };

  return (
    <div>
      <Navebar></Navebar>
      <Paper className='details'>
        <br></br>
        <h2>{details}</h2>
      <div className='details'
      dangerouslySetInnerHTML={{__html: para}}
    />
      <br></br>
      </Paper>
      <Footer></Footer>
    </div>
  )
}

export default Details
