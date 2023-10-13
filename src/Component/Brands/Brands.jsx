import React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query';
export default function Brands() {
  function getBrandes(){
    return  axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    }
    let {data}=useQuery("getBrandesinPage",getBrandes)
    console.log(data?.data.data);
  return (
    <>
        <Helmet>
        <title>Brandes</title>
    </Helmet>
    <h2 className='text-center p-5 fw-bold'> All Brands</h2>
    <div className='container'>
    <div className="row">
        {data?.data.data.map((brand)=>{
            return <div key={brand._id} className="col-md-3 py-3 prod-shadow">
                <div className=' p-2'>
                <img className='w-100' src={brand.image}  height={300}/>
                <h3 className='  text-main p-3'>{brand.name}</h3>
                </div>
                

            </div>}
  )
}
</div>
 </div>
    </>
  )
}
