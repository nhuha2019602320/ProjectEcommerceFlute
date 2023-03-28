import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import NavAccount from "../NavAccount/NavAccount";

const MyPurchase = () => {

  const [per, setPer] = useState({})
  const[listPurchase, setListPurchase] = useState([])
  const orders = JSON.parse(localStorage.getItem("user").toString()).order
  // const id = JSON.parse(localStorage.getItem("user"))._id
  // console.log("id", id)

  // console.log("listpre", listPurchase)
  const handleCheck =  (item) => {
    // let result = per.map(({ productOrder }) => productOrder)
    // console.log("result", result)
    // // console.log(result)
    // // setListPurchase(result)
    // // const x = listPurchase[0].map(({productCode, nameProduct}) => ({productCode, nameProduct}))
    // // console.log("ListPurchase",x)
    // console.log(item)
    
     axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder`, {id: JSON.parse(localStorage.getItem("user"))._id})
      .then((res) =>{
        // setPer(res.data)
        console.log(res.data)
      } )
    }
    // console.log(per)
    // per.map(item =>{
    //   item.productOrder.map(i =>{
    //     setListPurchase(i)
    //   })
    // })
    //     console.log(listPurchase)

    // useEffect(() => {
    //   axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder/6419e40351585e518c05613d`)
    //   .then((res) =>{
    //     // setPer(res.data)
    //     console.log(res.data)
    //   } )
    // },[])
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
              orders.map((item, index) => (
                <div key = {index}>
                  <p>ma don</p> <>{item}</>
                  <button onClick={() => handleCheck(item)}>Chi tiết</button>
                </div>
              ))
            }

          </Col>
          <Col>
{/* {
  per?.productOrder.map((item) => (
    <div>
      <p>{item.productCode}</p>
      <p>{item.nameProduct}</p>
    </div>
  ))
} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPurchase;
