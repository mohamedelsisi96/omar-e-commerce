import React, { useContext,useEffect, useState } from 'react'
import {CartContext} from "../../Context/CartContext"
import { Circles } from  'react-loader-spinner'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'




function Cart() {
   let   {getLoggedUserCart,RemoveCartItem,UpdateProduct,ClearUserCart}=useContext(CartContext)
   let [cartDetailes,setCartDetailes]= useState(null)
   async function getCart(){
    let {data}= await getLoggedUserCart()
    window.localStorage.setItem("productid",data?.data._id)
    console.log(data?.data._id);
    setCartDetailes(data)
    console.log(cartDetailes);
  }
  async function DeletCart(id){
    let {data}= await RemoveCartItem(id)
    console.log(data);
    setCartDetailes(data)
  }
  let navigate=useNavigate()
  async function DeletCartUser(){
  
    let {data}= await ClearUserCart()
    console.log(data);
    setCartDetailes(data)
    navigate('/home')
  }
  async function UpdateProductCart(id,count){
    let {data}= await UpdateProduct(id,count)
    setCartDetailes(data)
  
  }

  useEffect(()=>{getCart()},[])
  return (
    <>
        <Helmet>
        <title>My Cart</title>
    </Helmet>

    {cartDetailes?  
    <div className='w-90 bg-main-light mx-auto my-auto  p-3'>
      <h3>Shoping Cart</h3>
      <h4 className='h6 text-main fw-bolder mb-4'>Cart Item : {cartDetailes.numOfCartItems}</h4>
      {cartDetailes?.data.products.map((product)=> <div className='row border-bottom py-3 align-items-center' key={product.product.id}>
       <div className='col-md-2'>
        <img src={product.product.imageCover} className='w-100' alt="" />
       </div>
       <div className='col-md-10 '>
        <div className='d-flex justify-content-between align-items-center'>
        <div>
        <h3 className='h6'>{product.product.title.split(" ").slice(0,3).join(" ")}</h3>
        <h6 className='text-main'>Price: {product.price} EGP</h6>
        </div>
        <div>
          <button onClick={() =>UpdateProductCart(product.product.id, product.count + 1)} className='btn border-main p-2'>+</button>
          <span className='px-2'>{product.count}</span>
          <button onClick={()=>UpdateProductCart(product.product.id, product.count - 1)} className='btn border-main p-2'>-</button>
        </div>
        </div>
        <button onClick={()=>DeletCart(product.product.id)} className='btn p-0 font-sm'><i className='text-danger fas fa-trash-can'></i> Remove </button>

       </div>
      </div> )}
      <div className='d-flex justify-content-between align-items-center'>
      <h4 className='h6 text-main fw-bolder py-3'>Total Cart Price:  {cartDetailes.data.totalCartPrice} EGP</h4>
      <button onClick={DeletCartUser} className='btn '><i className='text-danger fas fa-trash-can'></i> Delete Cart </button>
      </div>
      <div className='d-flex justify-content-around align-items-center '>
      <Link to="/address" className='btn bg-main w-25 text-white'>Online Payment</Link>
      
      </div>
    </div>
    : <div className='d-flex justify-content-center align-items-center m-5'>
      <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
      </div>}
   
      
    </>
  )
}

export default Cart



