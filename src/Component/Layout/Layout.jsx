import React from 'react'
import Navbar from '../Navber/Navbar'
import Foot from '../Foot/Foot'
import { Outlet } from 'react-router-dom'
import AuthContextProvider from "../../Context/AuthContext"
import CartContextProvider from "../../Context/CartContext"

import { Offline, Online } from "react-detect-offline";
import { Toaster } from 'react-hot-toast'

export default function Layout() {
  return (
    <>
    <CartContextProvider>
    <AuthContextProvider>
      
    <Navbar/>
      <div className="container">
      <Outlet/>
      </div>
      <Offline >
        <div className="network p-3">
        <i class="fa-solid fa-wifi"></i> Only shown offline (surprise!)
        </div>
        </Offline>
        <Toaster />
        
        {/* <Foot/> */}
       
    
      
    </AuthContextProvider>
    </CartContextProvider>
   
    </>
  )
}
