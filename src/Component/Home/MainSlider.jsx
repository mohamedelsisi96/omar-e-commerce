import React from 'react'
import Slider from "react-slick";
import slide1 from "../../Asstes/images/slider-image-1.jpeg"
import slide2 from "../../Asstes/images/slider-image-2.jpeg"
import slide3 from "../../Asstes/images/slider-image-3.jpeg"
import blog1 from "../../Asstes/images/blog-img-1.jpeg"
import blog2 from "../../Asstes/images/blog-img-2.jpeg"

function MainSlider() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
  return (
    <>
    <div className="row g-0">
        <div className="col-md-9 ">
          <Slider {...settings}>
             <img height={400} src={slide1} className='w-100' alt='' />
             <img height={400} src={slide2} className='w-100' alt='' />
             <img height={400} src={slide3} className='w-100' alt='' />
          </Slider>
        </div>
        <div className="col-md-3">
              <img height={200} src={blog1} className='w-100' alt='' />
              <img height={200} src={blog2} className='w-100' alt='' />
        </div>
    </div>
      
    </>
  )
}

export default MainSlider
