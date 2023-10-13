import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import {CartContext} from "../../Context/CartContext"

export default function FeaturedProductes() {
    let { AddToCart ,AddToWishlist } = useContext(CartContext)
    async function AddProductToCart(id){
        let response=await AddToCart(id)
        console.log(response);
        if(response.data.status==="success"){
            toast.success("product added succesful to cart")
        }else{
            toast.error("product failed added to cart")
        }
     }

     async function AddProductToWishlist(id){
        let response=await AddToWishlist(id)
        console.log(response);
        if(response.data.status==="success"){
            toast.success("product added succesful to wish list")
        }else{
            toast.error("product failed added to wish list ")
        }
     }


    function getProducts(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    }
   

    let{isLoading,data}=useQuery("getProduct",getProducts)
    console.log(isLoading,data?.data.data);


 
  return <>
  <div className='container'>
    <div className="row">
        {data?.data.data.map((product)=>{
            return <div key={product.id} className="col-md-3 py-3 product">
              
                <div className=' p-2'>
                <Link to={`/productdetails/${product.id}`}>
                <img className='w-100' src={product.imageCover} />
                <h5 className=' font-sm text-main'>{product.category.name}</h5>
                <h4>{product.title.split(" ").slice(0,2).join(" ")}</h4>
                <div className='d-flex justify-content-between'>
                    <span>{product.price} EGP</span>
                    <span>
                    {product.ratingsAverage}
                    <i class="fa-solid fa-star rating-color"></i>
                    </span>
                </div>
                </Link>
                </div>
                <div className='d-flex justify-content-around align-items-center'>
                <button onClick={()=>AddProductToCart(product.id)} className='btn bg-main text-white w-40 btn-sm '>add to cart</button>
                <button onClick={()=>AddProductToWishlist(product.id)} className='btn bg-main text-white w-40 btn-sm '>add to wishlist</button>
                </div>
            </div>

        })}

    </div>
  </div>
  </>
}
