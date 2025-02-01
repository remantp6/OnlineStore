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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto px-2 md:px-4 py-5">
      <h2 className="text-center mb-5 text-lg font-bold">
      {
        cartItems.length === 0 ? 'Shopping Cart' :'Your Cart'
      }
      </h2>
      <Container>
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <img src={emptyCart} alt="cart-img" className="w-full max-w-lg mx-auto" />
            <p className="text-xl my-4">No Products in the Cart</p>
            <div className="px-2">
              <button className="bg-transparent py-2 px-4 border border-gray-300 rounded-sm" onClick={handleNavigate}>
                <i className="bi bi-chevron-left"></i>
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        ) : (
          <div>
            {cartItems?.map((cartProduct) => (
              <div className="border border-gray-100 rounded-md shadow-sm my-8 p-3" key={cartProduct.id}>
                <Row>
                  <i
                    className="bi bi-x-lg cursor-pointer flex justify-end mb-4"
                    onClick={() => handleRemoveFromCart(cartProduct)}
                  ></i>
                  <Col md={5} className="flex flex-col md:flex-row">
                    <img src={cartProduct.image} alt="img" className="w-36 mx-auto mb-4 sm:mb-0" />
                    <h5 className="pb-4 md:px-3 md:pt-3 text-lg font-semibold">{cartProduct.title}</h5>
                  </Col>
                  <Col md={2} className="pt-md-3 flex md:flex-col justify-between md:justify-start items-center">
                    <p className="text-base md:text-lg font-medium uppercase md:pb-5">Price</p>
                    <span className="text-lg font-normal">$ {cartProduct.price}</span>
                  </Col>
                  <Col md={3} className="flex justify-between md:flex-col md:justify-start my-2 md:my-0">
                    <p className="text-base md:text-lg font-medium uppercase md:pb-5">Quantity</p>
                    <div className="flex items-center space-x-4">
                      <i className="bi bi-plus-lg cursor-pointer" onClick={() => handleIncreaseCart(cartProduct)}></i>
                      <span>{cartProduct.cartQuantity}</span>
                      <i className="bi bi-dash-lg cursor-pointer" onClick={() => handleDecreaseCart(cartProduct)}></i>
                    </div>
                  </Col>
                  <Col md={2} className="pt-md-3 flex justify-between md:flex-col md:justify-start">
                    <p className="text-base md:text-lg font-medium uppercase md:pb-5">Total</p>
                    <span className="text-lg font-normal">
                      $ {parseFloat((cartProduct.price * cartProduct.cartQuantity).toFixed(2))}
                    </span>
                  </Col>
                </Row>
              </div>
            ))}
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <Button label="Clear Cart" onClick={() => handleClearCart()} />
                <div className="px-2">
                  <button className="bg-transparent py-2 px-4 border border-gray-300 rounded-sm" onClick={handleNavigate}>
                    <i className="bi bi-chevron-left"></i>
                    <span>Continue Shopping</span>
                  </button>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-base md:text-lg font-medium">Total Quantity</p>
                  <h6 className="text-lg font-normal">{cartTotalQuantity}</h6>
                </div>
                <div className="flex justify-between items-center py-[1px] mb:py-0">
                  <p className="text-base md:text-lg font-medium md:pb-5">SubTotal</p>
                  <h6 className="text-lg font-normal">$ {cartTotalAmount}</h6>
                </div>
                <p className="text-sm font-medium text-gray-600 pb-2 mb:pb-0">Taxes and shipping are calculated at checkout</p>
                <div className="check-out-btn md:mb-2">
                  <button className="bg-blue-500 text-white py-2 px-4 text-lg uppercase rounded-sm">Check Out</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
  
};

export default CartItem;
