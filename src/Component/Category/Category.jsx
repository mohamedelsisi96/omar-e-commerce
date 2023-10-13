import axios from 'axios'
import React from 'react'

import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'

export default function Category() {
   function getCategory(){
   return  axios.get('https://ecommerce.routemisr.com/api/v1/categories')
   }
   let {data}=useQuery("getCateroryinPage",getCategory)
   console.log(data?.data.data);
  return <>
         <Helmet>
        <title>Category</title>
    </Helmet>
    <h2 className='text-center p-5 fw-bold'> All Category</h2>
    <div className='container'>
    <div className="row">
        {data?.data.data.map((myCategory)=>{
            return <div key={myCategory._id} className="col-md-3 py-3 prod-shadow">
                <div className=' p-2'>
                <img className='w-100' src={myCategory.image}  height={300}/>
                <h5 className=' font-sm text-main p-3'>{myCategory.name}</h5>
                </div>
                

            </div>}
  )
}
</div>
 </div>
 </>

}

