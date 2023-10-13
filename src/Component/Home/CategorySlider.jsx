import axios from 'axios'
import React from 'react'
import Slider from "react-slick";
import { useQuery } from 'react-query'

function CategorySlider() {

    function getCategory(){
        return axios.get("https://ecommerce.routemisr.com/api/v1/categories")
    }
    let{data}=useQuery("getCategoryImg",getCategory)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
      };
  return (
    <>
  
    {data?.data.data? <Slider {...settings}>
            {data?.data.data.map((category,index)=>{
                return <img src={category.image} key={index} height={200}  className='w-100' alt="" />
            })}
        </Slider>:""}
      
    </>
  )
}

export default CategorySlider
