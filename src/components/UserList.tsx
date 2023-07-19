import { useState, useEffect, useMemo } from 'react';
import '../styles/UserList.css'
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled, DialogTitle } from '@mui/material'
import axios, { AxiosRequestConfig } from 'axios';
import Pagination from './Pagination';
import '../styles/UserList.css'
import { Dialog, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';
import Editform from './EditForm';
import Navebar from './Navebar';

import { AiFillCloseCircle}from "react-icons/ai";
const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 15px;
        background: white;
        color: black;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 14px
    }
`;
let PageSize = 5;
const UserList = () => {
    const [users, setUsers] = useState([
        {
            id:'',
            firstName:'',
            email:'',
            phoneNumber:'',
            age:'',
            gender:'',
            country:''
        }
    ]);
    const [open, setOpen] =useState(false);

  const handleClickToOpen = () => {

    setOpen(true);
};

const handleToClose = () => {

  setOpen(false);

};
    const getAllUsers = async () => {

        const {data}= await axios.get(

          "https://localhost:7032/api/User/GetAllUser"

        );
        const General = data.Result;

        setUsers(General);
      };

     const deleteUser=async (id)=>{
       
            const response= await axios.delete(
                "https://localhost:7032/api/User/DeleteUser?Id="+id
                   
                )
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
  

      useEffect(() => {   

        getAllUsers();
      }, []);
       
      const getData = async (id) =>{
        handleClickToOpen()
        localStorage.setItem("edit_id", id);
       
      };

    
     
  
   //--------------------------------
   const [currentPage, setCurrentPage] = useState(1);

   const currentTableData = useMemo(() => {
     const firstPageIndex = (currentPage - 1) * PageSize;
     const lastPageIndex = firstPageIndex + PageSize;
     return users.slice(firstPageIndex, lastPageIndex);
   }, [currentPage]);


  
   
    return (
<>
        <StyledTable className='userlist'>
            <TableHead>
                <THead>
                <TableCell><b>S.No</b></TableCell>
                    <TableCell><b>Id</b></TableCell>
                    <TableCell><b>Name</b></TableCell>
                    <TableCell><b>Email</b></TableCell>
                    <TableCell><b>Phone</b></TableCell>
                    <TableCell><b>Age</b></TableCell>
                    <TableCell><b>Gender</b></TableCell>
                    <TableCell><b>Country</b></TableCell>
                    <TableCell><b>EDIT</b></TableCell>
                    <TableCell><b>REMOVE</b></TableCell>
                    

                </THead>

            </TableHead>

            <TableBody >

                {currentTableData.map((user,key,sNo) => (

                    <TRow key={key} className='tablecell'>

                       <TableCell >{key+1}</TableCell>
                        <TableCell >{user.id}</TableCell>

                        <TableCell>{user.firstName}</TableCell>

                        <TableCell>{user.email}</TableCell>

                        <TableCell>{user.phoneNumber}</TableCell>

                        <TableCell>{user.age}</TableCell>
                        <TableCell>{user.gender}</TableCell>
                        <TableCell>{user.country}</TableCell>
                        <TableCell>
 
                            <Button color="primary" variant="contained"  onClick={event=>getData(user.id)}>Edit</Button>
</TableCell><TableCell>
                            <Button color="secondary" variant="contained" onClick={()=>{deleteUser(user.id)}} >Delete</Button>

                        </TableCell>

                    </TRow>

                ))}

            </TableBody>
            <Dialog open={open}  >




            <div className='dialogutitle'>
           
           <h2 className='add'>Edit User</h2>
           <h4 className='close' onClick={handleToClose}><AiFillCloseCircle></AiFillCloseCircle></h4>
        

           </div>

       
        
        <DialogContent>

            <DialogContentText></DialogContentText>
           <Editform></Editform>
</DialogContent>



</Dialog>
           
        </StyledTable>
         <Pagination
         className="pagination-bar"
         currentPage={currentPage}
         totalCount={users.length}
         pageSize={PageSize}
         onPageChange={page => setCurrentPage(page)}
       />
</>
    )

}




export default UserList;