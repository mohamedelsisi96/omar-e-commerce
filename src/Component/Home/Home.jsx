import React from 'react'
import FeaturedProductes from './FeaturedProductes'
import CategorySlider from './CategorySlider'
import MainSlider from './MainSlider'
import {Helmet} from "react-helmet";

export default function Home() {
  return (
    <>
       <Helmet>
        <title>My Home</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
    <MainSlider/>
    <CategorySlider/>
    <FeaturedProductes/>
   
    </>
  )
}
