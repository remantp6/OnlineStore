import React from "react";
import Layout from "../components/common/Layout";
import Carousel from "../components/carousel/HomeCarousel";
import ProductList from "../components/displayProduct/ProductList";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <>
      <Layout>
        <Carousel />
        <ProductList />
      </Layout>
    </>
  );
};

export default Home;
