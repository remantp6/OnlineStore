import React from "react";
import NavBar from "../components/common/NavBar";
import ProductDetailsComponent from "../components/productdetail/ProductDetailsComponent";
import Footer from "../components/common/Footer";

const ProductDetailPage = () => {
  return (
    <>
      <NavBar />
      <ProductDetailsComponent />
      <Footer />
    </>
  );
};

export default ProductDetailPage;
