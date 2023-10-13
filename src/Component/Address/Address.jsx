import axios from 'axios';
import { Formik, useFormik } from 'formik'
import React, { useState , useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import { CartContext } from './../../Context/CartContext';



export default function Address() {

   let {OnlinePayment} = useContext(CartContext)

  async function handleAddressSubmite(values){
    console.log(values);
   
    console.log( window.localStorage.getItem("productid"));
     let response= await OnlinePayment(window.localStorage.getItem("productid") ,'http://localhost:3000',values)
     console.log(response?.data.session.url);
     window.location.href=response.data.session.url
  }
  let validationSchema=Yup.object({
    details:Yup.string().min(3,'details shuld be grater than 3 char').max(20,'details shuld be less than 20 char').required('details is required'),
    phone:Yup.string().required('phone is required').matches(/^(01(0|1|2|5))\d{8}$/),
    city:Yup.string().min(3,'city shuld be grater than 3 char').max(20,'city shuld be less than 20 char').required('city is required'),  
})

  let formik=useFormik({
    initialValues :{
      details:'',
      phone:'',
      city:'',
    },
    onSubmit:handleAddressSubmite,
    validationSchema,
  })
  return (
    <div>
     <div className='my-5'>
      <div className='m-auto w-75'>
        <h1 className='my-3'>Login Now:</h1>
        <form className='my-3' onSubmit={formik.handleSubmit}>

          <label className='mb-2' htmlFor='details'>Details :</label>
          <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='mb-2 form-control' type='text' name='details' id='details' />

          {formik.errors.details && formik.touched.details ? <div className='alert alert-danger'>
             {formik.errors.details}
           </div>:null}

           <label className='mb-2' htmlFor='phone'>Phone :</label>
          <input onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} className='mb-2 form-control' type='tel' name='phone' id='phone' />

          {formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>
             {formik.errors.phone}
           </div>:null}

           <label className='mb-2' htmlFor='city'>City :</label>
          <input onBlur={formik.handleBlur} value={formik.values.city} onChange={formik.handleChange} className='mb-2 form-control' type='text' name='city' id='city' />
          
           {formik.errors.city && formik.touched.city ? <div className='alert alert-danger'>
             {formik.errors.city  }
           </div>:null}

           <button type="botton" className='btn bg-main w-25 text-white'>Pay Now</button>


          
        </form>
      </div>
     </div>
    </div>
  )
}
