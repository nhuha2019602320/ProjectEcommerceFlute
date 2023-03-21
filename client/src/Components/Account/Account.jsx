import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyAccount from "../MyAccount/MyAccount";
import NavAccount from "../NavAccount/NavAccount";
const Account = () => {
  return (
    <>
      <Header></Header>
      <Container style={{marginTop:"20px"}}>
        <Row>
          <Col xs={1} lg={3}>
            <NavAccount />
          </Col>
          <Col xs={4}>
            <MyAccount/>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default Account;
