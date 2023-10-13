import axios from 'axios'
import React , { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Circles } from  'react-loader-spinner'
import { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';



function Wishlist() {
    let headers={
        token:window.localStorage.getItem("token")
    }
    let { AddToCart } = useContext(CartContext)
    async function AddProductToCart(id){
      let response=await AddToCart(id)
      console.log(response);
      if(response.data.status==="success"){
          toast.success("product added succesful to cart")
      }else{
          toast.error("product failed added to cart")
      }
   }
 function getProductWishlist(){
  return  axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{headers:headers})

}


async function deleteProductWishlist(id){
   let response= await  axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:headers})
   .catch((err)=>console.log(err))
   getProductWishlist()

  }

let{data}=useQuery("getProductWish",getProductWishlist,{
  refetchOnMount:true,
  staleTime:3000,
  refetchInterval:100,
})
console.log(data?.data.data);

  return (
    <>
    <Helmet>
      <title>  Wishlist Page</title>
    </Helmet>
        <div className='container py-5'>
    <div className="row">

      {data?.data.data?
      data?.data.data.map((product)=>{
            return <div key={product.id} className="col-md-3 py-3 product">
              
                <div className=' p-2'>
                <Link to={`/productdetails/${product._id}`}>
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
                <div className='d-flex justify-content-between align-items-center '>
                <button onClick={()=>AddProductToCart(product._id)} className='btn bg-main text-white w-40 btn-sm '>add to cart</button>
                <button onClick={()=>deleteProductWishlist(product._id)}  className='btn bg-main text-white w-40 btn-sm '>delete product</button>
                </div>
                </div> 
                 
            

        }) :<div className='d-flex justify-content-center align-items-center m-5'>
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
 

    </div>
  </div>
    </>
  )
}

export default Wishlist
