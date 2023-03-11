import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCard } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import './List.css'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Button, Container } from "react-bootstrap";
import { GetAllProduct } from "../../services/product";

const ListProducts = () => {
  const [ListProducts, setListProducts] = useState([]);
  // const [filteredList, setFilteredList] = new useState(ListProducts); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    GetAllProduct().then((res) => {
      setListProducts(res.data);
    });
    console.log(
      "list",
      ListProducts.map((product) => product.nameProduct.toString())
    );
  }, []);
  return (
    <Container>
      <MDBContainer fluid className="my-5 text-center">
        <h4 className="mt-4 mb-5">
          <strong>Sản phẩm bán chạy</strong>
        </h4>
        <input
          type="text"
          placeholder="Nhập sản phẩm cần tìm"
          style={{ maxWidth: "300px", textAlign: "center", border:"1px solid" }}
          className="search"
        />
        <button className="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <MDBRow>
          {ListProducts.map((product, id) => (
            <MDBCol md="6" lg="4" className="mb-4" key={id}>
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image rounded hover-zoom"
                >
                  <MDBCardImage
                    src={product.imgaeProduct}
                    fluid
                    className="w-100"
                  />
                  <a href="#!">
                    <div className="mask">
                      {/* <div className="d-flex justify-content-start align-items-end h-100">
                      <h5>
                        <span className="badge bg-primary ms-2">New</span>
                        <span className="badge bg-success ms-2">Eco</span>
                        <span className="badge bg-danger ms-2">-10%</span>
                      </h5>
                    </div> */}
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <h5 className="card-title mb-3">{product.nameProduct}</h5>

                  <h6 className="mb-3">
                    <s>$61.99</s>
                    <strong className="ms-2 text-danger">
                      {product.price}
                    </strong>
                  </h6>
                  <Button
                    variant="success"
                    onClick={() => dispatch(AddCard(product))}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </Container>
  );
};

export default ListProducts;
