import axios from "axios";
import { createContext } from "react";


export let CartContext = createContext()

let headers={
    token:window.localStorage.getItem("token")
}
export  function AddToCart(id){

    return axios.post("https://ecommerce.routemisr.com/api/v1/cart" ,
    {
        productId: id
    },
    {headers : headers})
    .then((response)=>response)
    .catch((error)=>error)
}

export  function AddToWishlist(id){

    return axios.post("https://ecommerce.routemisr.com/api/v1/wishlist" ,
    {
        productId: id
    },
    {headers : headers})
    .then((response)=>response)
    .catch((error)=>error)
}

export function RemoveCartItem(id){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}` ,
    {headers : headers})
    .then((response)=>response)
    .catch((error)=>error)
}
export function getLoggedUserCart(){
    return axios.get("https://ecommerce.routemisr.com/api/v1/cart" ,
    {headers: headers})
    .then((response)=>response)
    .catch((error)=>error)
}
export function ClearUserCart(){
    return axios.delete("https://ecommerce.routemisr.com/api/v1/cart" ,
    {headers: headers})
    .then((response)=>response)
    .catch((error)=>error)
}
export function UpdateProduct(productId,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
    {count:count},
    {headers: headers})
    .then((response)=>response)
    .catch((error)=>error)
}
export function OnlinePayment(productId,url,values){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${productId}?url=${url}`,
    {shippingAddress:values},
    {headers: headers})
    .then((response)=>response)
    .catch((error)=>error)
}

export default function CartContextProvider(props){

    return <CartContext.Provider value={{AddToCart,OnlinePayment,getLoggedUserCart,RemoveCartItem,AddToWishlist,UpdateProduct,ClearUserCart}}>
{props.children}
    </CartContext.Provider>
}