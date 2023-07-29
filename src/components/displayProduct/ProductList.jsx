import React, { useState, useEffect } from "react";
import "./ProductList.css";
import Card from "react-bootstrap/Card";
import { useGetAllProductQuery } from "../../services/productApi";
import { Col, Container, Row } from "react-bootstrap";
import Title from "../title/Title";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";
import Filter from "../filter/Filter";

const ProductList = () => {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories"); // Default to showing all products
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
    //navigate to product-details page
    navigate(`/product-details/${product.id}`);
  };

  const filteredProducts = data
    ? selectedCategory === "All Categories"
      ? data
      : data.filter((product) => product.category === selectedCategory)
    : [];
  return (
    <>
      <div className="product-list-wrapper">
        <Container>
          <Title titleProps="Products" />
          <Filter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>An error occured.</p>
          ) : (
            <Row xs={1} md={2} lg={3} className="g-5">
              {filteredProducts.map((product) => (
                <Col key={product.id}>
                  <Card className="p-3">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body className="p-0">
                      <Card.Title className="mt-3">{product.title}</Card.Title>
                      <Card.Text className="mb-2">$ {product.price}</Card.Text>
                      <Button
                        label="View Details"
                        onClick={() => handleNavigate(product)}
                      />
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Container>
      </div>
    </>
  );
};

export default ProductList;
