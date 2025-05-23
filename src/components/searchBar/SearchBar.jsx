// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import './SearchBar.css';
import Form from "react-bootstrap/Form";
import { useGetAllProductQuery } from "../../services/ProductApi";
import SearchedProduct from "./SearchedProduct";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data: products } = useGetAllProductQuery();
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  const filteredProducts = products?.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(filteredProducts);
    } else {
      setFilteredData([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const handleClose = () => {
    setSearchTerm("");
    setFilteredData([]);
  };

  return (
    <>
    <div className="search-bar d-block">
      <Form className="d-flex align-items-center">
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="search-icon">
          {!searchTerm ? (
            <i className="bi bi-search"></i>
          ) : (
            <i className="bi bi-x fs-3 cursor-pointer" onClick={handleClose}></i>
          )}
        </div>
      </Form>
      <SearchedProduct filteredData={filteredData} searchTerm={searchTerm}/>
    </div>
    </>
  );
};

export default SearchBar;
