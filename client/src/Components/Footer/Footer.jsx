import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';
import './footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <Container>
            <Row style={{textAlign: "center"}}>
                <Col>
                    <h3>Sáo trúc Hải Trần</h3>
                    <p style={{textAlign: "justify"}}>&emsp;Sáo trúc Hải Trần được chế tác từ những công đoạn đơn giản nhất cho đến những công đoạn quan trọng nhất, điều đó góp phần giúp sản phẩm tới tay khách hàng
                        là chất lượng nhất. Mọi sản phẩm đều được thẩm âm và kiểm tra một cách rất kĩ càng trước khi được gửi đi cho khách hàng.
                    </p>
                </Col>
                <Col>
                    <h3>Địa Chỉ</h3>
                    <p><b>Địa chỉ: </b>Số 52,Tổ 19, Nguyễn Viết Xuân, Hạ Long, Quảng Ninh</p>
                    <p><b>Điện thoại: </b>0359568818</p>
                    <p><b>Email: </b>anh123vvv@gmail.com</p>
                </Col>
                <Col>
                    <h3>Về chúng tôi</h3>
                    <p>Giới thiệu</p>
                    <p>Tin tức</p>
                    <p>Đại lý</p>
                </Col>
                <Col>
                    <h3>Liên hệ</h3>
                    <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Facebook/></a></p>
                    <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Instagram/></a></p>
                    <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Youtube/></a></p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer