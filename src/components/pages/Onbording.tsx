import React from 'react'
import UserForm from '../UseForm'
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper, makeStyles } from '@material-ui/core'
import { Button } from '@mui/material'
import UserList from '../UserList'
import { SearchBar } from '../search/Searchbar'
import { SearchResultsList } from '../search/Searchresultlist'
import '../../styles/Onboarding.css'
import Popup from 'reactjs-popup'
import UseForm from '../UseForm'
const useStyle=makeStyles(theme=>({
  pageContent:{
     padding:theme.spacing(3),
      margin:theme.spacing(5),
    }
  }
))


const Onbording = () => {
  
const [open, setOpen] = React.useState(false);
  const classes=useStyle();
  const [results, setResults] =React. useState([]);
  const handleClickToOpen = () => {
    setOpen(true);

};
const handleToClose = () => {
  setOpen(false);
};

  return (
    <>
 
    <div className='onboarding'>
 
      <h1 className='onboarding_heading'>Sanofi onboarding</h1>
      <SearchBar  setResults={setResults}></SearchBar>

      {results && results.length > 0 && <SearchResultsList results={results} />}
      <UseForm></UseForm>
 
     <UserList></UserList>
      
  
     
    </div>
    </>
  )
}

export default Onbording
