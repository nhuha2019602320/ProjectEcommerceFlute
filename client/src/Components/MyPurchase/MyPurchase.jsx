import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import NavAccount from "../NavAccount/NavAccount";

const MyPurchase = () => {
  const [listOrder, setListOrder] = useState([
    // JSON.parse(localStorage.getItem("user")).order
    
  ]);
  const [per, setPer] = useState([])
  const[listPurchase, setListPurchase] = useState()
  // const [productOrders, setProductOrdes] = useState([]);
  console.log("listPurchase", listPurchase)
  const id = JSON.parse(localStorage.getItem("user"))._id
  console.log("id", id)

  const handleCheck = async (item) => {


    console.log(item)
    await axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder/${item}`)
      .then((res) => setPer(res.data))
      // console.log("order", per.map((p) => p.productOrder))
      // setProductOrdes(per.map((p) => p.productOrder))
      // console.log("productOrders", productOrders)
      // let result = per.map(({ productOrder }) => productOrder)
      // console.log("result", result)
      // console.log(result)
      // setListPurchase(result)
      // const x = listPurchase[0].map(({productCode, nameProduct}) => ({productCode, nameProduct}))
      // console.log("ListPurchase",x)


    }



    useEffect(() => {
       axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/user/getOneUser/${id}`).then((res) => setListPurchase(res.data.map((item) => item.order)))
    },[])
  return (
    <>
      <Header></Header>
      <Container style={{marginTop:"10px"}}>
        <Row>
          <Col md={3}>
            <NavAccount />
          </Col>
          <Col>
            {
              listPurchase[0].map((item, index) => (
                <div key = {index}>
                  <p>ma don</p> <>{item}</>
                  <button onClick={() => handleCheck(item)}>Chi tiết</button>
                </div>
              ))
            }

          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPurchase;
