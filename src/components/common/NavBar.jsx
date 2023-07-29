import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const NavBar = () => {
  const items = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary px-lg-5">
        <Container fluid className="px-lg-5">
          <Navbar.Brand className="fs-4" as={NavLink} to="/">
            Online<span>Store</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="px-md-4"/>
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <SearchBar/>
            <Nav className="ps-lg-4 fs-5">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="px-lg-2">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cart/items">
                <i className="bi bi-cart3"></i>(<span>{items.length}</span>)
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
