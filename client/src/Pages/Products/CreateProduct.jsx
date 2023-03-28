import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Toast } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NewProduct } from "../../services/product";
import MenuBar from "../../Components/MenuBar/MenuBar";
import TipTap from "../../Components/TipTap/TipTap";
import { ToastContainer, toast } from 'react-toastify';
const CreateProduct = () => {
  const [show, setShow] = useState(false);
  const [productCode, setProductCode] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imgProduct, setImgProduct] = useState(null);
  const [urlImg, setUrlImg] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const notify = () => toast("Wow so easy!");

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
  };

  const upLoadImage = (e) => {
    console.log("img ", imgProduct);
    const formData = new FormData();
    formData.append("file", imgProduct);
    formData.append("upload_preset", "rahh7f3b");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload",
        formData
      )
      .then((res) => setUrlImg(res.data.url));
    console.log(urlImg);
  };

  const editor = useEditor({
    extensions: [StarterKit],
    content: `
        Mô tả sản phẩm
      </p>
    `,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      setDescription(html)
  }
  })

  const createProduct = () => {
    const product = {
      productCode: productCode,
      nameProduct: nameProduct,
      price: price,
      imageProduct: urlImg,
      quantity: quantity,
      description: description,
      category: category,
    };
    NewProduct(product);
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_RIGHT
  });
  setShow(false)
  window.location.reload(false);
  };

  const [options, setOptions] = useState([]);

  const onOptionChangeHandler = (event) => {
    event.preventDefault();
    setCategory(event.target.value)
  };
  // const listCategories = options.map((item) => item.categroyName);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_LOCALHOST}/api/category/getAllCategory`)
      .then((res) => {
        setOptions(res.data)
        console.log("category", res.data)
      });
  }, []);
  return (
    <div>
       <ToastContainer />
      <button onClick={handleShow}>Thêm sản phẩm</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

         
            {/* <label htmlFor="">Mã sản phẩm</label>
            <input
              type="text"
              onChange={(e) => setProductCode(e.target.value)}
            /> */}
                 <Form.Control
                type="text"
                placeholder="Mã Sản Phẩm"
                autoFocus
                floating
                onChange={(e) => setProductCode(e.target.value)}
              /><br></br>
            {/* <label>Tên sản phẩm</label>
            <input
              type="text"
              onChange={(e) => setNameProduct(e.target.value)}
            /> */}
                 <Form.Control
                type="text"
                placeholder="Tên sản phẩm"
                autoFocus
                floating
                onChange={(e) => setNameProduct(e.target.value)}
              /><br></br>
            {/* <label htmlFor="">Giá</label>
            <input type="text" onChange={(e) => setPrice(e.target.value)} /> */}
                 <Form.Control
                type="text"
                placeholder="Gia"
                autoFocus
                floating
                onChange={(e) => setPrice(e.target.value)}
              /><br></br>
            {/* <label htmlFor="">Ảnh sản phẩm</label>
            <br></br>
            <input
              type="file"
              onChange={(event) => {
                setImgProduct(event.target.files[0]);
                // const formData = new FormData();
                // formData.append("file", imgProduct);
                // formData.append("upload_preset", "rahh7f3b");
                // await axios.post('https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload',formData).then((res) => console.log(res))
              }}
              // onChange={(e) => upLoadImage(e)}
              style={{ width: "350px" }}
            /> */}
     <Form.Control
                type="file"
                autoFocus
                floating
                // defaultValue={JSON.parse(localStorage.getItem("user"))?.email ?? ""}
                onChange={(event) => {
                  setImgProduct(event.target.files[0]);
                  // const formData = new FormData();
                  // formData.append("file", imgProduct);
                  // formData.append("upload_preset", "rahh7f3b");
                  // await axios.post('https://api.cloudinary.com/v1_1/uploadimgvvv/image/upload',formData).then((res) => console.log(res))
                }}
              /><br></br>            
            <button type="submit" onClick={upLoadImage}>
              Gửi ảnh
            </button>
            <br></br>
            <Form.Control
                type="text"
                placeholder="Số Lượng"
                autoFocus
                floating
                onChange={(e) => setQuantity(e.target.value)}
              /><br></br>
            {/* <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            /> */}
            {/* <TipTap /> */}
            <br></br>
            <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
            </div>
            <label htmlFor="">Danh Mục</label>
            <br />
            <select onChange={onOptionChangeHandler}>
              <option>Please choose one option</option>
              {options.map((option, index) => {
                return <option key={index} value={option._id}>{option.categroyName}</option>;
              })}
            </select>
          
        </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={createProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
         
    </div>
  );
};

export default CreateProduct;
