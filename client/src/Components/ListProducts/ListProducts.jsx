import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddCard } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import './List.css'

import { Button, Container } from "react-bootstrap";
import { GetAllProduct } from "../../services/product";

const ListProducts = () => {
  const [ListProducts, setListProducts] = useState([]);
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
      <div fluid="true" className="my-5 text-center">
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
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <div>
          {ListProducts.map((product, id) => (
            <div md="" lg="3" className="mb-4" key={id}>
              <div>
                <Link
                  to={`detailProduct/${product._id}`}
                  className="bg-image rounded hover-zoom"
                >
                  <img
                    src={product.imgaeProduct}
                    // fluid
                    className="w-100 imgProduct"
                  />
                </Link>
                <div>
                  <h3>

                  <a className="card-title mb-3" style={{fontSize:"14px", textDecoration:"none", color:"#333", fontFamily:"Roboto',Helvetica,Arial,sans-serif"}}>{product.nameProduct}</a>
                  </h3>

                  <h6 className="mb-3">
                    <span>Giá bán: </span>
                    <strong className="ms-2 text-danger">
                      {Number(product.price).toLocaleString()}đ
                    </strong>
                  </h6>

                  <Button
                    variant="success"
                    onClick={() => dispatch(AddCard(product))}
                  >
                    Thêm Vào Giỏ
                  </Button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ListProducts;
