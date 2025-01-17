// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css"
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="sticky-footer py-8">
        <Container>
          <Row xs={2} md={3} lg={4} className="gx-4">
            <Col>
              <h6>Store Information</h6>
              <li className="d-flex">
                <i className="bi bi-geo-alt"></i>
                <span>Grace - Apparel Store 507-Union Trade Centre France</span>
              </li>
              <li>
                <i className="bi bi-telephone"></i>
                <span>+41-2433-4567</span>
              </li>
              <li>
                <i className="bi bi-envelope"></i>
                <span>sales@yourcompany.com</span>
              </li>
            </Col>
            <Col>
              <h6 className="mb-0">Information</h6>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li className="mb-0">Shipping Policy</li>
            </Col>
            <Col>
              <h6 className="mb-0">Account</h6>
              <li>Dashboard</li>
              <li>My Orders</li>
              <li>My Wishlist</li>
              <li className="mb-0">Account</li>
            </Col>
            <Col>
              <h6 className="mb-0">Categories</h6>
              <li> Clothing</li>
              <li>Bags</li>
              <li>Jewelery</li>
              <li className=" mb-0">Electronics</li>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
