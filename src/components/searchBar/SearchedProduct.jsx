/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./SearchedProduct.css";
import { useNavigate } from "react-router-dom";

const SearchedProduct = ({ filteredData, searchTerm }) => {

  const navigate = useNavigate();

  const handleNavigate = (prodTitle) => {

    //navigate to product-details page
    navigate(`/product-details/${prodTitle.id}`);
  };
  return (
    <>
      <div className="search-product-list">
        {filteredData.length !== 0 ? (
          <div className="search-items-wrapper">
            {filteredData.map((prodTitle) => (
              <div
                className="search-item hover:bg-gray-200 cursor-pointer"
                key={prodTitle.id}
                onClick={() => handleNavigate(prodTitle)}
              >
                {prodTitle.title}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-search-result">
            {searchTerm !== "" && <p className="fs-3 text-red-500">No product match.</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchedProduct;
