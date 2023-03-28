import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import "./OrderDetail.css"
const Test = () => {
  const [list, setList] = useState([]);
  const [show, setShow] = useState(false);
  const[orderDetail, setOrderDetail] = useState()
  const handleClose = () => setShow(false);

  const handleShow = (item) => {
    setShow(true);
    console.log("item", item._id)
    // console.log("orderDetail", orderDetail[])
    const itemOrder = list.find((i) => i._id === item._id)
    console.log("itemOrder", itemOrder)
    setOrderDetail(itemOrder?.productOrder)
  };
  const navigate = useNavigate();
  // axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder`, {id: JSON.parse(localStorage.getItem("user"))._id})
  // .then((res) =>{
  // //   setList(res.data)
  //   console.log(res.data)
  // } )
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/order/getOrder/${
          JSON.parse(localStorage.getItem("user"))._id
        }`
      )
      .then((res) => {
        setList(res.data);
        // setOrderDetail("order detail", res.data.map(({productOrder})=>productOrder))
        // console.log(res.data);
      });
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <h2 style={{ textAlign: "center" }}>Chi Tiêt Hóa Đơn</h2>
            <Table striped style={{ marginTop: "30px" }}>
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th>Mã đơn</th>
                  <th>Địa chỉ nhận</th>
                  <th>Ghi chú</th>
                  <th>Tình trạng</th>
                  <th>Tổng đơn</th>
                  <th>Chức năng</th>
                </tr>
                {list?.map((item, id) => (
                  <tr style={{ textAlign: "center" }} key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.address}</td>
                    <td>{item.note}</td>
                    <td>{item.status}</td>
                    <td>{Number(item.total).toLocaleString()}đ</td>
                    <td>
                      <button
                        onClick={() => handleShow(item)}
                        style={{ background: "none" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fillRule="currentColor"
                          className="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                        </svg>
                      </button>
                      <button style={{ background: "none" }}>x</button>
                    </td>
                  </tr>
                ))}
              </thead>
            </Table>
          </Col>
          <SideBar />
        </Row>
      </Container>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Chi tiết đơn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {
                orderDetail?.map((item, id) => (
                  <div>
                    {item.productCode}
                    {item.price}
                    
                  </div>
                ))
              }        
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Test;
