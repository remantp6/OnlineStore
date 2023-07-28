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
  getCartSubTotal
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
  }

  useEffect(() => {
    dispatch(getCartSubTotal());
  }, [cartItems]);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="cart-item-list">
        <Container className="py-5">
          {cartItems.length === 0 ? (
            <div className="empty-cart-message text-center">
              <img
                src={emptyCart}
                alt="cart-img"
                style={{ width: 600, height: "auto" }}
              />
              <p className="fs-4">No Products in the Cart</p>
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
                <div className="cart-item-wrapper">
                  <div className="cart-item-top p-4" key={cartProduct.id}>
                    <Row>
                      <Col md={5} className="d-md-flex justify-content-center">
                        <img src={cartProduct.image} alt="img" />
                        <div className="px-md-3 pt-md-3">
                          <h5 className="pb-3">{cartProduct.title}</h5>
                          <Button
                            label="Remove From Cart"
                            onClick={() => handleRemoveFromCart(cartProduct)}
                          />
                        </div>
                      </Col>
                      <Col md={2} className="pt-md-3">
                        <p className="pb-5">Price</p>
                        <span>$ {cartProduct.price} </span>
                      </Col>
                      <Col md={3} className="pt-md-3">
                        <p className="pb-5">Quantity</p>
                        <div className="quantity-counter">
                          <button
                            onClick={() => handleIncreaseCart(cartProduct)}
                          >
                            +
                          </button>
                          <span className="px-3">
                            {cartProduct.cartQuantity}
                          </span>
                          <button
                            onClick={() => handleDecreaseCart(cartProduct)}
                          >
                            -
                          </button>
                        </div>
                      </Col>
                      <Col md={2} className="pt-md-3">
                        <p className="pb-5">Total</p>
                        <span>
                          $ {cartProduct.price * cartProduct.cartQuantity}
                        </span>
                      </Col>
                    </Row>
                  </div>
                </div>
              ))}
              <div className="cart-item-bottom px-2 d-md-flex justify-content-between">
                <div className="d-flex">
                  <Button label="Clear Cart" onClick={() => handleClearCart()}/>
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
