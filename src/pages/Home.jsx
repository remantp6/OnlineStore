import React from 'react'
import NavBar from '../components/common/NavBar'
import Carousel from '../components/carousel/HomeCarousel'
import ProductList from '../components/displayProduct/ProductList'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <>
      <NavBar/>
      <Carousel/>
      <ProductList/>
      <Footer/>
    </>
  )
}

export default Home
