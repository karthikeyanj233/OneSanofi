import React from 'react'
import { RootState } from './Store'
import { useSelector } from 'react-redux'
import Navebar from './Navebar'

const Profile = () => {
    const user=useSelector((state:RootState) => state.signup.value)
  return (
    <div>
      <Navebar></Navebar>
      <h1 className='center'>My Profile</h1>
      <h1>email:{user.email}</h1>
      <h1>phone:{user.password}</h1>
    </div>
  )
}

export default Profile
