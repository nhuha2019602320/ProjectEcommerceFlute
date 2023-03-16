import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const { login } = useSelector((state) => state.auth);

  return (
    <div>
      <Container fluid style={{ padding: "10px 0", height: "90px" }}>
        <Row className="nav__header nav-dropdown__header">
          <Col md={2} style={{ maxHeight: "100%" }}>
            <a href="/">
              <img
                style={{ maxHeight: "80px" }}
                src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677085248/vjqoro1nzshossf8nebz.png"
                alt="1"
              />
            </a>
          </Col>
          <Col
            md={3}
            style={{ maxHeight: "100%" }}
            className="header__mobile-search"
          >
            <Button variant="success" onClick={() => navigate("/login")}>
              Đăng Nhập
            </Button>
            &emsp;
            <Button variant="success" onClick={() => navigate("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ minHeight: "40px", backgroundColor: "#34a853" }}
      >
        <Row className="nav__container nav-dropdown__row">
          <Col md={9} sm={6} xs={6} className="nav-dropdown__col">
            <Navbar style={{ padding: "0" }}>
              <Nav>
                <Dropdown>
                  <Dropdown.Toggle className="nav-dropdown">
                    DANH MỤC
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      TRANG CHỦ
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      SẢN PHẨM
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      TIN TỨC
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/introduction"
                      className="nav-dropdown-btn"
                    >
                      GIỚI THIỆU
                    </Dropdown.Item>
                    <Dropdown.Item
                      as={Link}
                      to="/"
                      className="nav-dropdown-btn"
                    >
                      LIÊN HỆ
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Nav.Link
                  style={{ paddingLeft: "0" }}
                  href="/"
                  className="nav-link-btn"
                >
                  TRANG CHỦ
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="nav-link-btn">
                  SẢN PHẨM
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="nav-link-btn">
                  TIN TỨC
                </Nav.Link>
                <Nav.Link as={Link} to="/introduction" className="nav-link-btn">
                  GIỚI THIỆU
                </Nav.Link>
                <Nav.Link as={Link} to="/" className="nav-link-btn">
                  LIÊN HỆ
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>
          <Col md={2} sm={3} xs={6} className="info">
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                color: "#ffffff",
                justifyContent: "start",
              }}
            >
              {/* {
                               login.isFetching?<p>Login</p>:<p>{login.currectUser.userName}</p>
                            } */}
              {/* <button onClick={() => navigate("/login")}>Login</button>
                            <button onClick={() => navigate("/cart")}>Cart</button> */}
              {/* <div style={{fontSize: "1.5rem"}}/><p style={{margin: "0 0 0 10px", fontSize: "1rem"}}><button onClick={() => navigate("/login")}>Login</button></p>&ensp;
                            <div style={{fontSize: "1.5rem"}}/><p style={{margin: "0 0 0 10px", fontSize: "1rem"}}><button onClick={() => navigate("/cart")}>Cart</button></p>&ensp; */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fillRule="currentColor"
                  className="bi bi-person-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fillRule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                  />
                </svg> &ensp;  
                {/* {login.currectUser.userName} &ensp; 
                {
                  login.currectUser.userName ? <span>{login.currectUser.userName}</span>: <span>123</span>
                } */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
