import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Protected({children}) {
  return (
    <>
      {window.localStorage.getItem('token')?children:
      <Navigate to={"/login"}/>}
    </>
  )
}
