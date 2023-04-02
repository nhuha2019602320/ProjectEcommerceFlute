// import {
//   Container,
//   Row,
//   Col,
//   Navbar,
//   Nav,
//   Dropdown,
//   Button,
//   InputGroup,
//   Form,
// } from "react-bootstrap";
// import { Facebook, Instagram, Youtube } from "react-bootstrap-icons";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import "./header.css";
// import { useState } from "react";
// import { logout } from "../../redux/authSlice";
// export default function Header() {
//   const navigate = useNavigate();
//   const { login } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <Container fluid style={{ padding: "10px 0", height: "90px" }}>
//         <Row className="nav__header nav-dropdown__header">
//           <Col md={2} style={{ maxHeight: "100%" }}>
//             <a href="/">
//               <img
//                 style={{ maxHeight: "80px" }}
//                 src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677085248/vjqoro1nzshossf8nebz.png"
//                 alt="1"
//               />
//             </a>
//           </Col>
//           <Col
//             md={3}
//             style={{ maxHeight: "100%" }}
//             className="header__mobile-search"
//           >
//             {/* <Button variant="success" onClick={() => navigate("/login")}>
//               Đăng Nhập
//             </Button> */}
//                 <Dropdown>
//       <Dropdown.Toggle variant="success" id="dropdown-basic">
//       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
//   <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
// </svg>
//       </Dropdown.Toggle>

//       <Dropdown.Menu>
//         <Dropdown.Item onClick={() => navigate("/login")}>Đăng Nhập</Dropdown.Item>
//         <Dropdown.Item onClick={() => navigate("/register")}>Đăng Ký</Dropdown.Item>
//         <Dropdown.Item onClick={() => navigate("/account")}>Tài Khoản</Dropdown.Item>
//         <Dropdown.Item href="/" onClick={() => dispatch(logout())}>Đăng Xuất</Dropdown.Item>
//       </Dropdown.Menu>
//     </Dropdown>
//             &emsp;

//           </Col>
//         </Row>
//       </Container>
//       {/* <div style={{ backgroundColor: "green" }}>
//         <div className="topHeader">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "200px",
//               marginTop: "15px",
//             }}
//           >
//             <span style={{ color: "white" }}>Theo giõi:</span>
//             <a
//               target="_blank"
//               href="https://www.facebook.com/"
//               style={{ fontSize: "1rem", color: "white" }}
//               rel="noreferrer"
//             >
//               <Facebook />
//             </a>
//             <a
//               target="_blank"
//               href="https://www.facebook.com/"
//               style={{ fontSize: "1rem", color: "white" }}
//               rel="noreferrer"
//             >
//               <Instagram />
//             </a>
//             <a
//               target="_blank"
//               href="https://www.facebook.com/"
//               style={{ fontSize: "1rem", color: "white" }}
//               rel="noreferrer"
//             >
//               <Youtube />
//             </a>
//           </div>
//           <div
//             style={{
//               marginTop: "15px",
//               display: "flex",
//               alignItems: "center",
//               padding: "0 5px",
//             }}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               class="bi bi-person-circle"
//               viewBox="0 0 16 16"
//               style={{ color: "white" }}
//             >
//               <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//               <path
//                 fill-rule="evenodd"
//                 d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
//               />
//             </svg>
//             &ensp;<span style={{ color: "white" }}>Hai 2k</span>
//           </div>
//         </div>
//         <Row style={{marginTop:"20px"}}>
//           <Col md={2} style={{ maxHeight: "100%" }}>
//             <a href="/">
//               <img
//                 style={{ maxHeight: "80px", zIndex: "-1" }}
//                 src="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677085248/vjqoro1nzshossf8nebz.png"
//                 alt="1"
//               />
//             </a>
//           </Col>
//           <Col>
//             <input type="text" style={{ width: "500px" }} />
//             <button
//               style={{ background: "none", border: "none", outline: "none" }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 class="bi bi-search"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//               </svg>
//             </button>
//           </Col>
//           <Col>fsadfsdfsdf</Col>
//         </Row>
//       </div> */}
//       <Container
//         fluid
//         style={{ minHeight: "40px", backgroundColor: "#34a853" }}
//       >
//         <Row className="nav__container nav-dropdown__row">
//           <Col md={9} sm={6} xs={6} className="nav-dropdown__col">
//             <Navbar style={{ padding: "0" }}>
//               <Nav>
//                 <Dropdown>
//                   <Dropdown.Toggle className="nav-dropdown">
//                     DANH MỤC
//                   </Dropdown.Toggle>
//                   <Dropdown.Menu>
//                     <Dropdown.Item
//                       as={Link}
//                       to="/"
//                       className="nav-dropdown-btn"
//                     >
//                       TRANG CHỦ
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       as={Link}
//                       to="/"
//                       className="nav-dropdown-btn"
//                     >
//                       SẢN PHẨM
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       as={Link}
//                       to="/"
//                       className="nav-dropdown-btn"
//                     >
//                       TIN TỨC
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       as={Link}
//                       to="/introduction"
//                       className="nav-dropdown-btn"
//                     >
//                       GIỚI THIỆU
//                     </Dropdown.Item>
//                     <Dropdown.Item
//                       as={Link}
//                       to="/"
//                       className="nav-dropdown-btn"
//                     >
//                       LIÊN HỆ
//                     </Dropdown.Item>
//                     <Dropdown.Item

//                       className="nav-dropdown-btn"
//                     >
//                       <a onClick={() => navigate("/cart")}>

//                       GIỎ HÀNG
//                       </a>
//                     </Dropdown.Item>
//                   </Dropdown.Menu>
//                 </Dropdown>

//                 <Nav.Link
//                   style={{ paddingLeft: "0" }}
//                   href="/"
//                   className="nav-link-btn"
//                 >
//                   TRANG CHỦ
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/" className="nav-link-btn">
//                   SẢN PHẨM
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/" className="nav-link-btn">
//                   TIN TỨC
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/introduction" className="nav-link-btn">
//                   GIỚI THIỆU
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/" className="nav-link-btn">
//                   LIÊN HỆ
//                 </Nav.Link>
//               </Nav>
//             </Navbar>
//           </Col>
//           <Col md={2} sm={3} xs={6} className="info">
//             <div
//               style={{
//                 display: "flex",
//                 width: "100%",
//                 height: "100%",
//                 alignItems: "center",
//                 color: "#ffffff",
//                 justifyContent: "start",
//               }}
//             >

//               <div style={{ display: "flex", alignItems: "center" }}>

//                 <a variant="success" onClick={() => navigate("/cart")}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-cart4"
//                 viewBox="0 0 16 16"
//               >
//                 <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
//               </svg>
//             </a>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { CardMedia } from "@mui/material";
import { Dropdown } from "react-bootstrap";
import { useNavigate,NavLink,createSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import MenuHeder from "../../Components/Menu/Menu";
import axios from "axios";
function ResponsiveAppBar() {
  const [productSearch, setProductSearch] = React.useState("")
  const [ListProducts, setListProducts] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/")
  }

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#49b14d" }}>
      <Container maxWidth="xl" sx={{ display: "flex", marginTop: "10px" }}>
        <Toolbar
          disableGutters
          sx={{ marginLeft: "90px", marginRight: "90px", display:"flex", alignItems:"center" }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "7%",
            }}
            image="https://res.cloudinary.com/uploadimgvvv/image/upload/v1677085248/vjqoro1nzshossf8nebz.png"
            alt="random"
            onClick={() => {
              navigate("/");
            }}
          />
          <InputGroup className="mb-3" style={{display:"flex", alignItems:"center", marginTop:"20px", marginLeft:"80px"}}>
            <Form.Control
              placeholder="Nhập thông tin sản phẩm cần tìm kiếm"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onClick={handleNavigate}
              onChange={(e) => {
                setProductSearch(e.target.value)
              }}
            />
             <NavLink
                    to={`search/${productSearch}`}
                    className="bg-image rounded hover-zoom"
                  >

            <Button to variant="outline-success" id="button-addon2">
              Tìm Kiếm 
            </Button>
                  </NavLink>
          </InputGroup>
          <Box sx={{ marginRight: "10px" }}>
            <a variant="success" onClick={() => navigate("/cart")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fillRule="currentColor"
                className="bi bi-cart4"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </a>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fillRule="currentColor"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => navigate("/login")}>
                    Đăng Nhập
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/register")}>
                    Đăng Ký
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/account")}>
                    Tài Khoản
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>
                    Đăng Xuất
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Tooltip>

          </Box>
        </Toolbar>
      </Container>
      <MenuHeder/>
    </AppBar>
  );
}
export default ResponsiveAppBar;
