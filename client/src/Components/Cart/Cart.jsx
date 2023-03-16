import { Container, Row, Col, Button, Table } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./cart.css";
import { DecreaseCart, DeleteCart, IncreaseCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const {login} = useSelector((state) => state.auth)
  console.log("login", login.currectUser)
  const cartLists = cart.cartlists;
  console.log("carts/cart", cartLists);
  const dispatch = useDispatch();

  const priceListProduct = cartLists.map((a) => a.price*a.quantity);
  console.log("cartList", cartLists)
  const convertPriceListProduct = priceListProduct.map((str) => {
    return parseInt(str, 10);
  });
    // convertPriceListProduct.reduce((a, b) => a + b, 0);
    var totalBill = convertPriceListProduct.reduce((a, b) => a + b, 0);
    var discount = 0;
    if(totalBill<500000){
      discount = 0;
    }
    else if(totalBill>=500000 && totalBill<=1000000) {
      discount = 20
      totalBill = totalBill *0.8
    } else {
      discount = 40;
      totalBill = totalBill*0.6
    }
    localStorage.setItem("totalBill", totalBill.toString());
  console.log(convertPriceListProduct.reduce((a, b) => a + b, 0))
  const handlePay = () => {
    if(!login.currectUser) 
      navigate("/login")
    else
      navigate("/checkout")
  };
  return (
    <div>
      <Header />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Table striped style={{ marginTop: "30px" }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Ảnh</th>
                  <th>Tên Sản phẩm</th>
                  <th>Đơn Giá</th>
                  <th>Số Lượng</th>
                  <th>Thành Tiền</th>
                  <th>Xóa</th>
                </tr>
                {cartLists.map((item, index) => (
                  

                  <tr
                    key={item._id.toString()}
                    style={{ textAlign: "center", alignItems: "center" }}
                    className="inforUser"
                  >
                    <td>
                      <img src={item.imgaeProduct} width="80px" alt="" />
                    </td>
                    <td>{item.nameProduct}</td>
                    <td>{Number(item.price).toLocaleString()}đ</td>
                    <td>
                        <button className="quantity" onClick={() => dispatch(DecreaseCart(item))}>-</button>
                        <span>{item.quantity}</span>
                        <button className="quantity" onClick={() => dispatch(IncreaseCart(item))}>+</button>
     
                    </td>
                    <td>{Number(item.quantity * item.price).toLocaleString()}đ</td>
                    <td>
                      <button
                        className="handleBtn"
                        style={{ backgroundColor: "#198754" }}
                        onClick={() => dispatch(DeleteCart(item))}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  
                ))}
              </thead>
              
              
            </Table>
            <Row>
              <Col>
                <button
                  className="returnHomepage"
                  onClick={() => navigate("/")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-reply"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z" />
                  </svg>
                  Tiếp Tục Mua Hàng
                </button>
              </Col>
              <Col>
                <Table className="paymentTable">
                  <tr>
                    <td>Giá</td>
                    <td>{Number(convertPriceListProduct.reduce((a, b) => a + b, 0)).toLocaleString()}đ</td>
                  </tr>
                  <tr>
                    <td>Phí giao hàng</td>
                    <td>30.000đ</td>
                  </tr>
                  <tr>
                    <td>Tổng đơn + {discount}% discount</td>
                    <td>
                      {Number(totalBill + 30000).toLocaleString()}đ
                    </td>
                  </tr>
                </Table>
                  <button style={{float:"right"}} onClick={handlePay}>Thanh Toán</button>
              </Col>
            </Row>
          </Col>
          <SideBar />
        </Row>
        
      </Container>
    </div>
  );
};

export default Cart;
