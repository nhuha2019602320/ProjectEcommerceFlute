import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import "./Order.css";
import { useSelector } from "react-redux";
import axios from 'axios'
import { CreateOrder } from "../../services/order";
const Order = () => {
    const navigate = useNavigate();
    const {login} = useSelector((state) => state.auth)
    const cart = useSelector((state) => state.cart);
    const cartLists = cart.cartlists;
    const [userName, setUserName] = useState(login.currectUser.userName ?? "null");
    const [phone, setPhone] = useState(login.currectUser.phoneNumber ?? "null");
    const [address, setAddress] = useState("")
    const [note, setNote] = useState("")

    const handelCreate = () => {
      if(address === "" || note === "" || cartLists === []) {
        alert("Tạo đơn không thành công mời kiểm tra lại")
      } else {

        const order = {
          address: address,
          note: note,
          productOrder: cartLists,
          total: localStorage.getItem("totalBill") + 30000,
          user: login.currectUser._id
        }
        CreateOrder(order)
        alert("Tạo đơn thành công cảm ơn quý khách")
      }
    }
  return (
    <div>
      <Header />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
              <input
                type="text"
                placeholder="Tên của bạn"
                style={{ width: "48%" }}
                value={userName}
              />
              <input
                type="text"
                placeholder="Điện thoại"
                style={{ width: "48%" }}
                // onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </Row>
            <Row>
              <input type="text" placeholder="Địa chỉ nhận hàng" onChange={(e) =>setAddress(e.target.value)}/>
            </Row>
            <Row>
              <input type="text" placeholder="Ghi chú" onChange={(e) =>setNote(e.target.value)}/>
            </Row>
            {/* <Row>
              <textarea name="" id="" cols="30" rows="10" value={text}></textarea>
            </Row> */}
            <Row style={{border: "1px solid"}}>
              <span>Sản phẩm đặt</span>
              <div>
                {
                  cartLists.map((item) => (
                    <ul>
                      <li>Tên sản phẩm: {item.nameProduct} - Mã sản phẩm : {item.productCode}</li>
                    </ul>
                  ))
                }
                <li>Phí vận chuyển: 30.000đ</li>
                <li>Tổng thành tiền: {
                  Number(parseInt(localStorage.getItem("totalBill").toString()) + 30000).toLocaleString()
                }đ</li>
              </div>
            </Row>
            <Button variant="success"
                   style={{float:"right"}}
                  onClick={() => navigate("/")}
                >

                  Tiếp Tục Mua Hàng
                </Button>&emsp;
          <Button variant="success" style={{float:"right"}} onClick={handelCreate}>Tạo đơn hàng</Button>
          </Col>
          <SideBar />
        </Row>
      </Container>
    </div>
  );
};

export default Order;
