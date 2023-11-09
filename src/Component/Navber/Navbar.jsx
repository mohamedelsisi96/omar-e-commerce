
import React,{ useContext } from 'react'
import img1 from '../../Asstes/images/freshcart-logo.svg'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import { useSelector } from 'react-redux'


export default function Navbar() {
let {userLogged,setUserLogged}=useContext(AuthContext)
function logout(){
  setUserLogged(false)
  localStorage.removeItem('token')
}

let {counter}= useSelector((state)=>state.counter)
  return (
<nav className="navbar navbar-expand-lg bg-light sticky-top mb-2 navbar-light ">
  <div className="container">
    <Link className="navbar-brand" to="/">
     <img src={img1}/>
    </Link>
    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userLogged? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  " to="/cart">Cart 
          <span class="  badge mx-2 rounded-pill bg-danger">
          {window.localStorage.getItem('mycounter') }
          </span>
          </Link>
        </li>
      
        <li className="nav-item">
          <Link className="nav-link" to="/wishlist">Wish List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/category">Category</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>:null}
     
      <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
        <li className='nav-item'>
        <i class="fa-brands mx-2 fa-facebook"></i>
        <i class="fa-brands mx-2 fa-instagram"></i>
        <i class="fa-brands mx-2 fa-tiktok"></i>
        <i class="fa-brands mx-2 fa-twitter"></i>
        <i class="fa-brands mx-2 fa-linkedin"></i>
        <i class="fa-brands mx-2 fa-youtube"></i>
        </li>

      </ul>
      <ul className='d-flex list-unstyled mt-3'>
        {!userLogged?<>
          <li className='mx-2'>
          <Link to="/register" className='nav-link'>Register</Link>
        </li>
        <li className='mx-2'>
        <Link to="/login" className='nav-link'>Login</Link>
        </li>
        </>:null}
        {userLogged?
         <li className='mx-2'>
         <Link onClick={logout} to="/login" className='nav-link'>Logout</Link>
         </li>:null
        }
       
      </ul>
  
    </div>
  </div>
</nav>

  )
}
