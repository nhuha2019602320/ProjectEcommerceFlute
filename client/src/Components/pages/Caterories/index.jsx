import React, { useState } from "react";
import AdminPage from '../../Admin/AdminPage'
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NavBar from "../../NavBar/NavBar";
import Table from "react-bootstrap/Table";
const Index = () => {
  const [show, setShow] = useState(false);
  const [listCategories, setListCategories] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    console.log("idnay", id);
    localStorage.setItem("idProductUpdate", id);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/getCategory`)
     .then((res) => {
       console.log("list",res.data)
       setListCategories(res.data)
     })
 },[])
 return (
  <div style={{ display: "flex" }}>
    <AdminPage />
    <div style={{ maxWidth: "100%" }} className="col-10">
    <NavBar/>
      <Table striped style={{ marginTop: "30px" }}>
        <thead>
          <tr
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            <th>STT</th>
            <th>Mã danh mục</th>
            <th>Tên danh mục</th>
            <th>Số Lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
        {listCategories.map((category, index) => (
              <tr
                key={category._id.toString()}
                className="inforProduct"
                id="product"
              >
                <th>{index}</th>
                <th>{category.categoryCode}</th>
                <th>{category.categroyName}</th>
                <th>{category.products.length}</th>
                <th>
                  <button
                    className="handleBtn"
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
                  <button className="handleBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill="currentColor"
                      className="bi bi-vector-pen"
                      viewBox="0 0 16 16"
                      onClick={() => handleShow(category._id)}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"
                      />
                    </svg>
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </Table>

    </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Sửa thông tin danh mục</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="edit">
          <label htmlFor="">Mã danh mục</label>
          <input
            type="text"
          />
          <label>Tên danh mục</label>
          <input
            type="text"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save Changes</Button>
          
      </Modal.Footer>
    </Modal>
  </div>
);
};

export default Index;
