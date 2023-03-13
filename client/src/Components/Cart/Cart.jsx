import { Container, Row, Col, Button, Table } from "react-bootstrap";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
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
  const cartLists = cart.cartlists;
  console.log("carts/cart", cartLists);
  const dispatch = useDispatch();

  const priceListProduct = cartLists.map((a) => a.price*a.quantity);
  console.log("cartList", cartLists)
  const convertPriceListProduct = priceListProduct.map((str) => {
    return parseInt(str, 10);
  });
  convertPriceListProduct.reduce((a, b) => a + b, 0);

  const handlePay = () => {
    toast.success(
      "Thanh toán thành công. Cảm ơn quý khách đã tin tưởng của hàng!"
    );
  };
  // return (
  //   <Container style={{ marginTop: "30px", width: "100%", textAlign: "center" }} fluid>
  //     <Row>
  //       <Col style={{ backgroundColor: "white", borderRight: "1px" }}>
  //         <Row>
  //           <div
  //             style={{
  //               display: "flex",
  //               justifyContent: "center",
  //               alignItems: "center",
  //             }}
  //           >
  //             <h3>Giỏ Hàng Của bạn</h3>
  //           </div>
  //         </Row>
  //         {cartLists.map((item, id) => (
  //           <MDBRow
  //             className="mb-4 d-flex justify-content-between align-items-center"
  //             key={id}
  //           >
  //             <MDBCol md="2" lg="2" xl="2">
  //               <MDBCardImage
  //                 src={item.imgaeProduct}
  //                 fluid
  //                 className="rounded-3"
  //                 alt="Cotton T-shirt"
  //                 style={{width:"50%"}}
  //               />
  //             </MDBCol>
  //             <MDBCol md="3" lg="3" xl="3">
  //               <MDBTypography tag="h6" className="text-muted">
  //                 {item.productCode}
  //               </MDBTypography>
  //               <MDBTypography tag="h6" className="text-black mb-0">
  //                 {item.nameProduct}
  //               </MDBTypography>
  //             </MDBCol>
  //             <MDBCol
  //               md="3"
  //               lg="3"
  //               xl="3"
  //               className="d-flex align-items-center"
  //             >
  //               <div style={{display:"flex", alignItems:"center"}}>

  //               <Button onClick={() => setCount(count - 1)}>-</Button>
  //               <p> {count}</p>
  //               <Button onClick={() => setCount(count + 1)}>+</Button>
  //               </div>

  //               <MDBBtn color="link" className="px-2">
  //                 <MDBIcon fas icon="plus" />
  //               </MDBBtn>
  //             </MDBCol>
  //             <MDBCol md="3" lg="2" xl="2" className="text-end">
  //               <MDBTypography tag="h6" className="mb-0">
  //                 € {Number(item.price).toLocaleString()}
  //               </MDBTypography>
  //             </MDBCol>
  //             <MDBCol md="1" lg="1" xl="1" className="text-end">
  //               <a href="#!" className="text-muted">
  //                 <MDBIcon fas icon="times" />
  //               </a>
  //             </MDBCol>
  //             <MDBCol md="1" lg="1" xl="1" className="text-end">
  //               <button onClick={() => dispatch(DeleteCart(item))}>
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width="16"
  //                   height="16"
  //                   fill="currentColor"
  //                   className="bi bi-x-lg"
  //                   viewBox="0 0 16 16"
  //                 >
  //                   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
  //                 </svg>
  //               </button>
  //             </MDBCol>
  //             <hr className="my-3" />
  //           </MDBRow>
  //         ))}
  //         <div>
  //           <div>
  //             Tổng sản phẩm: <b>{cartLists.length}</b>
  //           </div>
  //           <b>Tổng thành tiền :</b>{" "}
  //           {convertPriceListProduct.reduce((a, b) => a + b, 0)} VND
  //         </div>
  //         <Button variant="success" onClick={() => navigate("/")}>
  //           Tiếp Tục Mua Hàng
  //         </Button>
  //         &emsp;
  //         <Button variant="success" onClick={handlePay}>
  //           Thanh Toán
  //           <ToastContainer />
  //         </Button>
  //         &emsp;
  //       </Col>
  //     </Row>
  //   </Container>
  // );
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
              </thead>
              <tbody>
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
              </tbody>
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
                    <td>Tổng đơn</td>
                    <td>
                      {Number(convertPriceListProduct.reduce((a, b) => a + b, 0) + 30000).toLocaleString()}đ
                    </td>
                  </tr>
                </Table>
                  <button style={{float:"right"}}>Thanh Toán</button>
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
