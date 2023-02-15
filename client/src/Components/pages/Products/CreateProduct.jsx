import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const CreateProduct = () => {
  const [show, setShow] = useState(false);
  const [productCode, setProductCode] = useState("")
  const [nameProduct, setNameProduct] = useState("")
  const [price, setPrice] = useState("")
  const [imgProduct, setImgProduct] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const upLoadImage = (files) => {
    const formData = new FormData();
    formData.append("file", imgProduct);
    formData.append("upload_preset", "rahh7f3b");
    axios.post('https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload',formData).then((res) => console.log(res))
  }
  return (
    <div>
      <button onClick={handleShow}>Thêm sản phẩm</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thay đổi thông tin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="edit">
            <label htmlFor="">Mã sản phẩm</label>
            <input type="text" />
            <label>Tên sản phẩm</label>
            <input type="text" />
            <label htmlFor="">Giá</label>
            <input type="text" />
            <label htmlFor="">Ảnh sản phẩm</label>
            <input type="file"         
                onChange={(event) => {
                    setImgProduct(event.target.files[0])
                }}
            />
            <label htmlFor="">Số lượng</label>
            <input type="text" />
            <label htmlFor="">Mô tả</label>
            <input type="text" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary" onClick={upLoadImage}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CreateProduct;
