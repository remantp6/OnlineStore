import React from "react";
import { useGetProductByIdQuery } from "../../services/productApi";
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
    <>
      <div className="">
        <div className="lg:mt-[65px] mb-[8px]">
          <Title titleProps="Product Details" />
          {isLoading ? (
            <p className="text-lg">Loading...</p>
          ) : error ? (
            <p className="text-lg">An error occurred.</p>
          ) : (
            product && (
              <div className="product-content flex flex-col lg:flex-row items-center justify-center gap-8 px-4 lg:px-10 py-8 lg:py-10">
                {/* Image section */}
                <div className="w-full lg:w-1/3 flex justify-center">
                  <img
                    className="w-full max-w-xs object-cover"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                {/* Product details section */}
                <div className="w-full lg:w-[50%] flex flex-col justify-center">
                  <h6 className="pt-4 pb-1 text-gray-500">{product.category}</h6>
                  <h5 className="text-2xl font-semibold">{product.title}</h5>
                  <p className="py-2 text-gray-700">{product.description}</p>
                  <p className="my-2 text-lg font-medium">Rating: {product.rating.rate}</p>
                  <p className="my-2 text-lg font-medium">Price: $ {product.price}</p>
                  
                  <div className="flex gap-4 mt-4">
                    <Button onClick={() => handleClick(product)} label="Add To Cart" />
                    <Button onClick={handleNavigate} label="Go To Cart" />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
