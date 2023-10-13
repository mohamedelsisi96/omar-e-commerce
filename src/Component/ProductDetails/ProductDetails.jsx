import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from "react-slick";
import toast from 'react-hot-toast';
import {CartContext} from "../../Context/CartContext"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from 'react-helmet';

export default function ProductDetails() {
    let {id} =useParams()
 let{AddToCart}=useContext(CartContext)
 async function AddProductToCart(id){
    let response=await AddToCart(id)
    console.log(response);
    if(response.data.status==="success"){
        toast.success("product added succesful")
    }else{
        toast.error("product failed added ")
    }
 }
    function getProductDetailes(id){
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }
    let{data}=useQuery("getProductDetailes",()=>getProductDetailes(id))
    console.log(data);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    
      };
    return (
        <>
        <Helmet>
        <title>{data?.data.data.category.name}</title>
        </Helmet>
        <div className='container py-5'>
            <div className="row  align-item-center">
                <div className="col-md-4">
                <div>
            <h2> Single Item</h2>
           <Slider {...settings}>
            {data?.data.data.images?.map((img,index)=>{
                    return <img src={img} key={index} className='w-100' alt="" />
                })}
            </Slider>
          </div>
                </div>
                <div className="col-md-8 my-auto">
                <h3>{data?.data.data.title}</h3>
                <p>{data?.data.data.description}</p>
                <h5 className=' font-sm text-main'>{data?.data.data.category.name}</h5>
                <div className='d-flex justify-content-between'>
                        <span>price: {data?.data.data.price} EGP</span>
                        <span>
                        {data?.data.data.ratingsAverage}
                        <i class="fa-solid fa-star rating-color px-2"></i>
                        </span>
                </div>
                <button onClick={()=>AddProductToCart(id)} className='btn mt-3 bg-main text-white w-100 btn-sm '>add to cart</button>
                </div>
            </div>
        </div>
           
        </>
  )
}
