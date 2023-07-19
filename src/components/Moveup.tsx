import React, { useEffect, useState } from 'react'
import '../styles/Moveup.css'
import {Link} from 'react-scroll'
import { BsArrowUpCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const Moveup = () => {
  const[moveup,setMoveUp]=useState(false);
    const navigate = useNavigate();
    const navigateToNavebar = () => {
        // 👇️ navigate to /contacts
        navigate('/navebar');
      };;

      useEffect(() => {
        window.addEventListener("scroll",()=>{
          if(window.scrollY>100){
            setMoveUp(true);
          }
          else{
            setMoveUp(false)
          }
        })
      }, [])

      const scrollUp=()=>{
        window.scrollTo({
          top:0,
          behavior:"smooth"
        })
      }


  return (
    <>
    { moveup &&(
        <Link to='navebar' className='moveup' smooth={true} duration={500}>
      <BsArrowUpCircle ></BsArrowUpCircle>
      </Link>
  )}
  </>
  )
}

export default Moveup
