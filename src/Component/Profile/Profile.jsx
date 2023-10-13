import jwtDecode from 'jwt-decode'
import React from 'react'
import { Helmet } from 'react-helmet'

function Profile() {
    let token=localStorage.getItem("token")
    let  DecodedToken=jwtDecode(token)
    console.log(DecodedToken);
  return (
    <>
        <Helmet>
        <title>Profile</title>
    </Helmet>
    <div className='container py-5'>
        <h1>Hello : {DecodedToken.name}</h1>
        <h1>Role : {DecodedToken.role}</h1>
    </div>
      
    </>
  )
}

export default Profile
