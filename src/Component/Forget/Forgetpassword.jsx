import React, { useState } from 'react'
import * as Yup from 'yup'
import  axios  from 'axios';

import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';


function Forgetpassword() {
let[loading,setLoading]=useState(false)
let navigate=useNavigate()
    async function ForgetPasword(values){
       
        setLoading(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values)
    setLoading(false)
    console.log(data);
    if (data?.statusMsg === "success") {
        navigate("/verify"); // Navigate to '/reset' if email is sent successfully
      } 
    
  
    }
   
    let validationSchema=Yup.object({
      email:Yup.string().required('email is required and  writen  as moh.eha@gmail.com').matches(/^\w{3,}.?\w{4,}?@(\w{3,}).(\w{3,})$/i),
    })
  
    let formik=useFormik({
      initialValues :{
        email:'',
      },
      onSubmit:ForgetPasword,
      validationSchema:validationSchema,
    })
    return (
      <div>
       <div className='my-5'>
        <div className='m-auto w-75'>
          <h1 className='my-3'>please enter your email</h1>
          <form className='my-3' onSubmit={formik.handleSubmit} >
  
            <label className='mb-2' htmlFor='email'>Email :</label>
            <input onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className='mb-2 form-control' type='email' name='email' id='email' />
  
            {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
               {formik.errors.email}
             </div>:null}
  
      
         {loading?<button disabled type='btn' className=' d-block btn bg-main text-white'><i className="fa-solid fa-spinner fa-spin"></i></button>
          : <button disabled={loading}  type='botton' className=' d-block btn bg-main text-white'>Verify</button>
         }


            
          </form>
        </div>
       </div>
      </div>
    )
}

export default Forgetpassword
