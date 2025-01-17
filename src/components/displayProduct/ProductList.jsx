// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useGetAllProductQuery } from "../../services/productApi";
import Title from "../title/Title";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import Filter from "../filter/Filter";

const ProductList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetAllProductQuery();

  useEffect(() => {
    if (data) {
      const uniqueCategories = Array.from(
        new Set(data.map((product) => product.category))
      );
      setCategories(["All Categories", ...uniqueCategories]);
    }
  }, [data]);

  const handleNavigate = (product) => {
    // Navigate to product-details page
    navigate(`/product-details/${product.id}`);
  };

  const filteredProducts = data
    ? selectedCategory === "All Categories"
      ? data
      : data.filter((product) => product.category === selectedCategory)
    : [];

  return (
    <>
      <div className="product-list-wrapper px-2 md:px-4 my-10 md:my-14 lg:my-20 ">
        <div className="container">
          <Title titleProps="Products" />
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occurred.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-20">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex justify-center">
                  <div className="bg-white shadow-md rounded-lg w-full max-w-[390px] flex flex-col">
                    <img
                      className="rounded-t-lg w-[190px] h-[170px] md:w-[250px] md:h-[280px] mx-auto"
                      src={product.image}
                      alt={product.title}
                    />
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <h5 className="text-gray-900 text-md font-medium mb-2">
                        {product.title}
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
                        $ {product.price}
                      </p>
                      <div className="mt-auto">
                        <Button
                          label="View Details"
                          onClick={() => handleNavigate(product)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
