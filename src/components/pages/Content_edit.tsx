import { MenuItem, TextField } from '@material-ui/core'

import axios from 'axios'

import React from 'react'

import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";




const Content_edit = () => {




    const[dashboardBox,setDashboardBox]=React.useState([]) as any

    React.useEffect(()=>{

        axios.get('https://localhost:7032/api/Dashboard/GetDashboard')

        .then(

          res=>{

           setDashboardBox(res.data.Result);

            }

        )

        .catch(err=>console.log(err))

    },[])

   // console.log(dashboardBox);    

   

      const[dashboardBoxValue,setDashboardBoxValue]=React.useState() as any

      const[dashboardDetailValue,setDashboardDetailValue]=React.useState() as any

      const[Dashboard,setDashboard]=React.useState([]) as any

      const[DashboardDetails,setDashboardDetails]=React.useState([]) as any

      const [idValue,setIdValue]=React.useState() as any

      const changeDashboardBox=(e)=>{

        setDashboardBoxValue(e.target.value);

        setDashboard(dashboardBox.find(ctr=>ctr.headerName===e.target.value)?.dashboardLists)

       

      }  

      const findIdValue=(e)=>{

        setIdValue(Dashboard.find(ctr=>ctr.name===e.target.value)?.id)

      }

      const changeDashboard=(e)=>{

       findIdValue(e)




       handleGetDashboardDetails(e)

      }

     console.log(idValue)

      React.useEffect(()=>{

        axios.get('https://localhost:7032/api/Dashboard/GetDashboard')

        .then(

          res=>{

           setDashboardBox(res.data.Result);

            }

        )

        .catch(err=>console.log(err))

    },[])

    const handleGetDashboardDetails=(e)=>{

        console.log(idValue)

        const response =  axios.get('https://localhost:7032/api/Dashboard/GetDashboardDetailsById?Id=1')

        .then(

          res=>{

           setDashboardDetails(res.data.Result);

           //console.log(res.data)

            }

        )

        .catch(err=>console.log(err))




    }

  console.log(DashboardDetails.dashboard_Html)




 

  return (
    <>
 
    <div>

          <TextField

    className='dropdown'

      id="dashboardBox"

      select

      label="Dashboard Header"

      defaultValue="dashboardBox"

      variant='outlined'

      name="dashboardBox"

      onChange={changeDashboardBox}{...changeDashboard}

    >

        {dashboardBox.map((option) => (

                <MenuItem key={option.headerName} value={option.headerName}>

                  {option.headerName}

                </MenuItem>

              ))}

     

    </TextField>

    <br>

</br>

<br></br>

    <TextField

            className='dropdown'

              id="dashboard"

              select

              label="Dashboard"

              defaultValue="dashboard"

              variant='outlined'

              name="dashboard"

              onChange={changeDashboard}

            >

                   {Dashboard.map((option) => (

                <MenuItem key={option.name} value={option.name}>

                  {option.name}

                </MenuItem>

              ))}

             

            </TextField>

<br></br>

           <br></br>

            <Editor

            //editorState={editorState}

          toolbarClassName="toolbarClassName"

          wrapperClassName="wrapperClassName"

          editorClassName="editorClassName"

          wrapperStyle={{ width: 800, border: "1px solid black" }}

           value={DashboardDetails.dashboard_Html}

   

       />

    </div>
    </>
  )

}




export default Content_edit