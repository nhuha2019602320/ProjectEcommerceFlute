import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import "./Detail.css"
import { useDispatch } from "react-redux";
import { AddCard } from "../../redux/cartSlice";
import SideBar from "../SideBar/SideBar";

const DetailProduct = () => {
  const params = useParams();
  // console.log("dddđ", params.id);
  const [detailProduct, setDetailProduct] = useState([]);
  const dispatch = useDispatch();
  console.log(detailProduct);

  const itemServices = [
    {
      urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631170/jxmrtpp1ovwjpu1edbqp.png",
      title: "Miễn phí vận chuyển",
      content: "Giao hàng tại nhà trong bán kính 10km"
    },
    {
      urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631172/nzmjhs7ugq16s9nvypyx.png",
      title: "Hoàn tiền 100%",
      content: "Nếu sản phẩm lỗi hoặc hư hỏng"
    },
    {
      urlImg:  "https://res.cloudinary.com/uploadimgvvv/image/upload/v1678631172/zfyh8bxnbpyqgtryjtg3.png",
      title: "Thanh toán tận nhà ",
      content: "Không cần cọc trước"
    },
    
  ]

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_LOCALHOST}/api/product/getProduct/${params.id}`
      )
      .then((res) => setDetailProduct(res.data));
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row style={{marginTop:"20px"}}>
          <Col>
            {detailProduct.map((item) => (
                <> 
                <Row style={{borderTop:"1px solid #f0f0f0", height:"100px", borderBottom:"1px solid #f0f0f0"}}>
                    <h1 style={{color:"#212121", fontSize:"30px", display:"flex", alignItems:"center"}}>{item.nameProduct}</h1>
                </Row>
                <Row style={{marginTop:"20px"}}>
                  <Col>
                  
                        <img src={item.imageProduct} alt=""  style={{width:"400px"}}/>
                  </Col>
                    <Col>

                      <div style={{marginLeft:"20px"}}>
                <Row>
                    <span style={{fontSize:"32px", color:"#49b14d"}}>{Number(item.price).toLocaleString()}đ</span>
                </Row>               
                        {parse(item.description)}
                        <Button variant="success"
                          onClick={() => dispatch(AddCard(item)) }
                        >Thêm vào giỏ hàng</Button>
                      </div>
                    </Col>       
                </Row>
                </>

            ))}
          </Col>
          {/* <Col xs md="3" className="gg">
            <div className="fg">
                {
                  itemServices.map((service) => (
                    <ul className="service">
                        <li>
                          <img src={service.urlImg} alt="" />
                          <div>
                            <p>{service.title}</p>
                              <span>{service.content}</span>
                          </div>
                        </li>
                    </ul>
                  ))
                }
            </div>
          </Col> */}
          <SideBar/>
        </Row>
      </Container>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default DetailProduct;
