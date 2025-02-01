// eslint-disable-next-line no-unused-vars
import React from "react";
import { useGetProductByIdQuery } from "../../services/ProductApi.jsx";
import { useNavigate, useParams } from "react-router-dom";
import Title from "../title/Title";
import Button from "../buttons/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/feature/CartSlice";

const ProductDetailsComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);

  const handleClick = (product) => {
    dispatch(addToCart(product));
  };

  const handleNavigate = () => {
    navigate("/cart/items");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-4xl px-4 lg:px-10 py-10 md:py-14 lg:py-20">
        <Title titleProps="Product Details" />
        {isLoading ? (
          <p className="text-lg text-center">Loading...</p>
        ) : error ? (
          <p className="text-lg text-center">An error occurred.</p>
        ) : (
          product && (
            <div className="overflow-x-hidden product-content flex flex-col lg:flex-row lg:items-center lg:space-x-12 pt-2 md:pt-6">
              {/* Image section */}
              <div className="w-full lg:w-1/3 flex justify-center mb-2 md:mb-0">
                <img
                  className="w-[270px] h-[300px] md:w-[300px] md:h-[340px] lg:w-full"
                  src={product.image}
                  alt={product.title}
                />
              </div>

              {/* Product details section */}
              <div className="w-full flex flex-col">
                <h6 className="pt-4 pb-1 text-gray-500">{product.category}</h6>
                <h5 className="text-lg md:text-2xl font-semibold">{product.title}</h5>
                <p className="py-1 text-gray-700">{product.description}</p>
                <p className="my-1 text-lg font-medium">Rating: {product.rating.rate}</p>
                <p className="my-1 text-lg font-medium">Price: $ {product.price}</p>
                
                <div className="flex gap-4 mt-3">
                  <Button onClick={() => handleClick(product)} label="Add To Cart" />
                  <Button onClick={handleNavigate} label="Go To Cart" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductDetailsComponent;
