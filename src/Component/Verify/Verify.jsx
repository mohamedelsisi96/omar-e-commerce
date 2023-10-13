import React, { useState } from 'react'
import * as Yup from 'yup'
import  axios  from 'axios';

import { Formik, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';


function Verify() {
let[loading,setLoading]=useState(false)
let navigate=useNavigate()

    async function Verficationcode(values){

        setLoading(true)
    let {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',values)
    setLoading(false)
    console.log(data.status);
    if(data?.status==="Success"){
        navigate('/resetpassword'); // Navigate to reset password
        console.log("3333");
      } 
    

    
  
    }
   
    let validationSchema=Yup.object({
        resetCode:Yup.string().required('please enter your verification code'),
    })
  
    let formik=useFormik({
      initialValues :{
        resetCode:'',
      },
      onSubmit:Verficationcode,
      validationSchema:validationSchema,
    })
    return (
      <div>
       <div className='my-5'>
        <div className='m-auto w-75'>
          <h1 className='my-3'>please enter your verification code</h1>
          <form className='my-3' onSubmit={formik.handleSubmit} >
  
            <label className='mb-2' htmlFor='resetCode'>Code :</label>
            <input onBlur={formik.handleBlur} value={formik.values.resetCode} onChange={formik.handleChange} className='mb-2 form-control' type='text' name='resetCode' id='resetCode' />
  
            {formik.errors.resetCode && formik.touched.resetCode ? <div className='alert alert-danger'>
               {formik.errors.resetCode}
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

export default Verify

