// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import emptyCart from "../../assets/images/emptyCart.png";
import "./CartItem.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "../buttons/Button";
import { Col, Container, Row } from "react-bootstrap";
import {
  addToCart,
  clearCart,
  decreaseCartItem,
  getCartSubTotal,
} from "../../redux/feature/CartSlice";
import { removeFromCart } from "../../redux/feature/CartSlice";
import { useNavigate } from "react-router-dom";

const CartItem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );

  const handleDecreaseCart = (cartProduct) => {
    dispatch(decreaseCartItem(cartProduct));
  };

  const handleIncreaseCart = (cartProduct) => {
    dispatch(addToCart(cartProduct));
  };

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    dispatch(getCartSubTotal());
  }, [cartItems, dispatch]);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="cart-item-list">
        <h2 className="text-center py-3 py-md-4 mb-0">Shopping Cart</h2>
        <Container className="pb-3 pb-md-5">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message text-center">
              <img
                src={emptyCart}
                alt="cart-img"
                style={{ width: 600, height: "auto" }}
              />
              <p className="fs-4 my-3">No Products in the Cart</p>
              <div className="back-to-shopping px-2">
                <button onClick={handleNavigate}>
                  <i className="bi bi-chevron-left"></i>
                  <span>Continue Shopping</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-Item">
              {cartItems?.map((cartProduct) => (
                // eslint-disable-next-line react/jsx-key
                <div className="cart-item-wrapper">
                  <div className="cart-item-top p-4" key={cartProduct.id}>
                    <Row>
                        <i
                          className="bi bi-x-lg"
                          onClick={() => handleRemoveFromCart(cartProduct)}
                        ></i>
                      <Col md={5} className="d-md-flex">
                        <img src={cartProduct.image} alt="img" />
                        <h5 className="pb-3 px-md-3 pt-md-3">
                          {cartProduct.title}
                        </h5>
                      </Col>
                      <Col md={2} className="pt-md-3">
                        <p className="pb-5">Price</p>
                        <span>$ {cartProduct.price} </span>
                      </Col>
                      <Col md={3} className="pt-md-3">
                        <p className="pb-5">Quantity</p>
                        <div className="quantity-counter">
                          <div>
                            <i
                              className="bi bi-plus-lg"
                              onClick={() => handleIncreaseCart(cartProduct)}
                            ></i>
                          </div>
                          <span>{cartProduct.cartQuantity}</span>
                          <div>
                            <i
                              className="bi bi-dash-lg"
                              onClick={() => handleDecreaseCart(cartProduct)}
                            ></i>
                          </div>
                        </div>
                      </Col>
                      <Col md={2} className="pt-md-3">
                        <p className="pb-5">Total</p>
                        <span>
                          $ {parseFloat((cartProduct.price * cartProduct.cartQuantity).toFixed(2))}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              ))}
              <div className="cart-item-bottom px-2 d-md-flex justify-content-between">
                <div className="d-flex">
                  <Button
                    label="Clear Cart"
                    onClick={() => handleClearCart()}
                  />
                  <div className="back-to-shopping px-2">
                    <button onClick={handleNavigate}>
                      <i className="bi bi-chevron-left"></i>
                      <span>Continue Shopping</span>
                    </button>
                  </div>
                </div>
                <div className="check-out-section">
                  <div className="total_quantity d-md-flex">
                    <p>Total Quantity</p>
                    <h6 className="ms-auto">{cartTotalQuantity}</h6>
                  </div>
                  <div className="amount-section d-md-flex">
                    <p>SubTotal</p>
                    <h6 className="ms-auto">$ {cartTotalAmount}</h6>
                  </div>
                  <p>Taxes and shipping are calculated at checkout</p>
                  <div className="check-out-btn mb-2">
                    <button>Check Out</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
};

export default CartItem;
