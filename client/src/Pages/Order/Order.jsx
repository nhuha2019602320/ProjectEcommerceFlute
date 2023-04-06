import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import SideBar from "../../Components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import "./Order.css";
import { useSelector } from "react-redux";
import axios from 'axios'
import { CreateOrder } from "../../services/order";
import { Grid, TextField } from "@mui/material";
const Order = () => {
    const navigate = useNavigate();
    // const {login} = useSelector((state) => state.auths)
    const login = JSON.parse(localStorage.getItem("user"))
    const cartLists = JSON.parse(localStorage.getItem("cartList"))
    const [userName, setUserName] = useState(login.userName ?? "null");
    const [phone, setPhone] = useState(login.phoneNumber ?? "null");
    const [address, setAddress] = useState("")
    const [note, setNote] = useState("")
    const totalBill = localStorage.getItem("totalBill");
    const [discount, setDiscount] = useState(0);
  
    const handelCreate = () => {
      if(address === "" || note === "" || cartLists === []) {
        alert("Tạo đơn không thành công mời kiểm tra lại")
      } else {
        const order = {
          address: address,
          note: note,
          phone: phone,
          productOrder: cartLists,
          total:parseInt(localStorage.getItem("totalBill").toString()) + 30000,
          user: login._id
        }
        CreateOrder(order)
        alert("Tạo đơn thành công cảm ơn quý khách")
        localStorage.removeItem("cartList")
        navigate("/orderdetail")
      }
    }
    useEffect(() => {
      console.log("vao deee")
      axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/discount/getAllDiscount`)
        .then((res) => {

            let valueDiscount = res.data.map((item) => item.percentDiscount);
              console.log("dd", valueDiscount[0])

              if(totalBill>=500000 && totalBill<=1000000)
                setDiscount(valueDiscount[1]);
              else if(totalBill > 1000000)
                setDiscount(valueDiscount[2])
              else 
                setDiscount(0)
            })
            
    },[])
    useEffect(() => {
      console.log(discount)
    },[discount])
  return (
    <div>

      <Header />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            {/* <Row style={{ display: "flex", justifyContent: "space-between" }}>
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
            </Row> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                 
                  autoFocus
                  value={userName}
                  // onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoComplete="family-name"
                  value={phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Địa chỉ"
                  name="Địa chỉ"
                  autoComplete="email"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="note"
                  label="Ghi chú"
                  name="Ghi chú"
                  autoComplete="email"
                  onChange={(e) => setNote(e.target.value)}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <span style={{marginTop:"40px"}}>Sản phẩm đặt</span>
              <div style={{border: "1px solid"}}>
                {
                  cartLists.map((item) => (
                    <ul>
                      <li><b>Tên sản phẩm:</b> {item.nameProduct} - <b> Mã sản phẩm :</b> {item.productCode} - <b> Đơn giá: </b> {Number(item.price*item.quantity).toLocaleString()}đ</li> 
                    </ul>
                  ))
                }
                <li><b>Phí vận chuyển:</b> 30.000đ</li>
                <li><b>Khuyến mãi:</b> {discount}</li>
                <li><b>Tổng thành tiền:</b> {
                  Number(parseInt(localStorage.getItem("totalBill").toString()) + 30000 - parseInt(localStorage.getItem("totalBill").toString())*discount).toLocaleString()
                }đ</li>
              </div>
            </Grid>
            <div style={{marginTop:"20px"}}>
              
            <Button variant="success"
                   style={{float:"right"}}
                  onClick={() => navigate("/")}
                >

                  Tiếp Tục Mua Hàng
                </Button>&emsp;
          <Button variant="success" style={{float:"right", marginRight:"10px"}} onClick={handelCreate}>Tạo đơn hàng</Button>
            </div>
          </Col>
          <SideBar />
        </Row>
      </Container>
    </div>
  );
};

export default Order;
