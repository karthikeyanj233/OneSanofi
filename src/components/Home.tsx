import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import { AppBar, Avatar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,  Grid,  List, ListItem, ListItemText, ListSubheader, Menu, MenuItem, Paper, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navebar from './Navebar';
import axios, { Axios } from 'axios';
import Footer from './Footer';
import Moveup from './Moveup'; 
export default function Home() {

const [open, setOpen] = React.useState(false);
  const [para,setpara]=useState('');
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const [readMore3, setReadMore3] = useState(true);
  const [readMore4, setReadMore4] = useState(true);
  const [readMore5, setReadMore5] = useState(false);
  const [readMore6, setReadMore6] = useState(false);
  const navigate = useNavigate();
  const[heading1,setHeading1]=useState();
  const[heading2,setHeading2]=useState();
  const[heading3,setHeading3]=useState();
  const[heading4,setHeading4]=useState();
  const[heading5,setHeading5]=useState();
  const[heading6,setHeading6]=useState();
  const[lists1,setLists1]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);
  const[lists2,setLists2]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);
  const[lists3,setLists3]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);
  const[lists4,setLists4]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);
  const[lists5,setLists5]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);
  const[lists6,setLists6]=useState([
    {
      id:'',
      name:'',
      code:''
    }
  ] as any);

 
  
  const handleClickToOpen = () => {
      setOpen(true);
  };
 

  const fetchDashboard = async () => {
    const {data}= await axios.get(
      "https://localhost:7032/api/Dashboard/GetDashboard"
    );
    console.log(data)
  
  for (var i = 0; i < data.Result.length; i++){
    if (data.Result[i].code =="001")
    {
      setLists1(data.Result[i].dashboardLists);
      setHeading1(data.Result[i].headerName)
    }
    if (data.Result[i].code =="002")
    {
    setLists2(data.Result[i].dashboardLists);
    setHeading2(data.Result[i].headerName)
  }
    if (data.Result[i].code =="003")
   {
     setLists3(data.Result[i].dashboardLists);
    setHeading3(data.Result[i].headerName)
  }

    if (data.Result[i].code =="004")
    {
    setLists4(data.Result[i].dashboardLists);
    setHeading4(data.Result[i].headerName)
  }
    if (data.Result[i].code =="005")
    {
    setLists5(data.Result[i].dashboardLists);
    setHeading5(data.Result[i].headerName)
  }
    if (data.Result[i].code =="006")
    {
    setLists6(data.Result[i].dashboardLists);
    setHeading6(data.Result[i].headerName)
  }
  }
};


  useEffect(() => { 
    fetchDashboard();
  }, []);

  const handleToClose = () => {
      setOpen(false);
  };

 const getData = async (id,name) =>{
  localStorage.setItem("id", id);
  localStorage.setItem("name", name);
  navigate('/details');
};

  return (
    <>
    <Navebar></Navebar>
   <div className='home'>
   <Grid container className='row'>
  <Grid xs={3} className=' col1 row'>
  
  <Grid xs={2} container className='card r'>

  <List className={readMore1? 'list-group':'list-groupexpand'} sx={{
listStyleType:'disc',
listStylePosition: 'inside'

}}>
<h2> Sanofi - Cognizant</h2>
    <h3>{heading1}</h3>
    {lists1.map((name,id) => (
<ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists1[id].id,lists1[id].name)}>{lists1[id].name}</ListItem>
 ))}
</List>

{lists1.length>4 &&

<h4 className="btn readmore" onClick={() => setReadMore1(!readMore1)}>
          {readMore1 ? "read less.." : "  read more.."}
        </h4>}
        </Grid>

  </Grid>

 

  <Grid xs={9} className='row col2'  >
  <Grid xs={12} className='heading'><h2>Getting Trained & Informed</h2></Grid>
    <Grid xs={3} className='card list1 '>
        <List className={readMore2? 'list-group':'list-groupexpand'}  sx={{
item:'true',
listStyleType: 'disc',

listStylePosition: 'inside'

}}>

    <h3>{heading2}</h3>
    {lists2.map((name,id) => (     
      <ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists2[id].id,lists2[id].name)}>{lists2[id].name}</ListItem>     
       ))}
</List>
{lists2.length>4 &&
<h4 className="btn readmore" onClick={() => setReadMore2(!readMore2)}>
          {readMore2 ? "read less.." : "  read more.."}
        </h4>}
    </Grid>
    <Grid xs={3}  className='card'>
        <List className={readMore3? 'list-group':'list-groupexpand'}  sx={{listStyleType: 'disc',
listStylePosition: 'inside'

}}>

    <h3>{heading3}</h3>
    {lists3.map((name,id) => (
      
      <ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists3[id].id,lists3[id].name)}>{lists3[id].name}</ListItem>
      
       ))}
<ListItem className="list-group-item"  sx={{ display: 'list-item' }}>What is Sanofi/Cognizant About</ListItem>
<ListItem className="list-group-item"  sx={{ display: 'list-item' }}>What is Sanofi/Cognizant About</ListItem>
</List>
{lists3.length>4 &&
<h4 className="btn readmore" onClick={() => setReadMore3(!readMore3)}>
          {readMore3 ? "read more.." : "  read less.."}
        </h4>}
    </Grid>
    <Grid xs={3} className='card training data4'>
        <List className={readMore4? 'list-group':'list-groupexpand'}  sx={{

listStyleType: 'disc',

listStylePosition: 'inside'

}}>

    <h3>{heading4}</h3>

     {lists4.map((name,id) => (
      
      <ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists4[id].id,lists4[id].name)}>{lists4[id].name}</ListItem>
      
       ))}
</List>
{lists4.length>4 &&
<h4 className="btn readmore" onClick={() => setReadMore4(!readMore4)}>
          {readMore4 ? "read less.." : "  read more.."}
        </h4>}
    </Grid>

  </Grid>

  </Grid>
 
  <Box className='row2'>

        <Box className='row2column1'>

          <h3 className='center'>{heading5}</h3>

          <List className={readMore5? 'list-group':'list-groupexpand'} sx={{

        listStylePosition: 'inside'

      }}>


{lists5.map((name,id) => (
      
      <ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists5[id].id,lists5[id].name)}>{lists5[id].name}</ListItem>
      
       ))}

  
</List>

{lists5.length>4 &&
<h4 className="btn readmore" onClick={() => setReadMore5(!readMore5)}>
          {readMore5 ? "read less.." : "  read more.."}
        </h4>}
        </Box>

        <Box className='row2column2'>
          <h3 className='center '>{heading6}</h3>
          <List className={readMore6? 'list-group':'list-groupexpand'} sx={{listStyleType: 'disc',listStylePosition: 'inside'}}>
 
 {lists6.map((name,id) => (
      <ListItem className="list-group-item" key={id} sx={{ display: 'list-item' }} onClick={event=>getData(lists6[id].id,lists6[id].name)}>{lists6[id].name}</ListItem> ))}

</List>
{lists6.length>4 &&
<h4 className="btn readmore" onClick={() => setReadMore6(!readMore6)}>
          {readMore6 ? "read less.." : "  read more.."}
        </h4>}
        </Box>
      </Box>
   
     
   
      <Dialog open={open} onClose={handleToClose}>
<DialogTitle>{"one Sanofi"}</DialogTitle>
<DialogContent>
    <DialogContentText>
    <div
dangerouslySetInnerHTML={{__html: para}}
/>
    </DialogContentText>
</DialogContent>
<DialogActions>
    <h4 onClick={handleToClose}
        color="primary" autoFocus>
        Close
    </h4>
</DialogActions>
</Dialog>
</div>

<br></br>
<Footer></Footer>
    </>

)};

