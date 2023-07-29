import React from "react";
import "./ProductDetailsComponent.css";
import { useGetProductByIdQuery } from "../../services/productApi";
import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
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
      <div className="product-details pt-4 pt-lg-5">
        <Container>
          <Title titleProps="Product Details" />
          {isLoading ? (
            <p className="fs-5">Loading...</p>
          ) : error ? (
            <p className="fs-5">An error occured.</p>
          ) : (
            product && (
              <div className="product-content px-3 px-lg-5">
                <Row>
                  <Col md={2}>
                    <img src={product.image} alt="img" />
                  </Col>
                  <Col md={10}>
                    <div className="product-content-article px-2 px-md-3 px-md-5">
                      <h6>{product.category}</h6>
                      <h5>{product.title}</h5>
                      <p className="mb-0 desc">{product.description}</p>
                      <p className="mb-0 my-2 fs-5">
                        Rating: {product.rating.rate}
                      </p>
                      <p className="my-2 fs-5">Price:$ {product.price}</p>
                      <div className="d-flex">
                        <Button
                          onClick={() => handleClick(product)}
                          label="Add To Cart"
                        />
                        <div className="mx-3">
                          <Button onClick={handleNavigate} label="Go To Cart" />
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            )
          )}
        </Container>
      </div>
    </>
  );
};

export default ProductDetailsComponent;
