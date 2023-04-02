// import React from 'react';
// import Col from 'react-bootstrap/esm/Col';
// import Row from 'react-bootstrap/esm/Row';
// import Container from 'react-bootstrap/esm/Container';
// import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';
// import './footer.css'
// const Footer = () => {
//   return (
//     <div className="footer">
//         <Container>
//             <Row style={{textAlign: "center"}}>
//                 <Col>
//                     <h3>Sáo trúc Hải Trần</h3>
//                     <p style={{textAlign: "justify"}}>&emsp;Sáo trúc Hải Trần được chế tác từ những công đoạn đơn giản nhất cho đến những công đoạn quan trọng nhất, điều đó góp phần giúp sản phẩm tới tay khách hàng
//                         là chất lượng nhất. Mọi sản phẩm đều được thẩm âm và kiểm tra một cách rất kĩ càng trước khi được gửi đi cho khách hàng.
//                     </p>
//                 </Col>
//                 <Col>
//                     <h3>Địa Chỉ</h3>
//                     <p><b>Địa chỉ: </b>Số 52,Tổ 19, Nguyễn Viết Xuân, Hạ Long, Quảng Ninh</p>
//                     <p><b>Điện thoại: </b>0359568818</p>
//                     <p><b>Email: </b>anh123vvv@gmail.com</p>
//                 </Col>
//                 <Col>
//                     <h3>Về chúng tôi</h3>
//                     <p>Giới thiệu</p>
//                     <p>Tin tức</p>
//                     <p>Đại lý</p>
//                 </Col>
//                 <Col>
//                     <h3>Liên hệ</h3>
//                     <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Facebook/></a></p>
//                     <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Instagram/></a></p>
//                     <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"white"}} rel="noreferrer"><Youtube/></a></p>
//                 </Col>
//             </Row>
//         </Container>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Facebook, Instagram, Youtube } from 'react-bootstrap-icons';
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                SÁO TRÚC HẢI TRẦN
              </h6>
              <p>
                Tự hào là thương hiệu sáo trúc uy tín, trách nhiệm với khách hàng. <b><i>Cam kêt chuẩn âm trên từng phím bấm</i></b>
              </p>
              <p>
                Luôn luôn hỗ trợ khách hàng về sản phẩm tốt nhất, phù hợp với mục đích của khách hàng.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>VỀ CHÚNG TÔI</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Trang Chủ
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Giới Thiệu
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tin Tức
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chính Sách
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>LIÊN HỆ</h6>
              {/* <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p> */}
                                  <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"black"}} rel="noreferrer"><Facebook/></a></p>
                    <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"black"}} rel="noreferrer"><Instagram/></a></p>
                    <p style={{padding: "0 10px"}}><a target="_blank" href="https://www.facebook.com/" style={{fontSize: "1.5rem", color:"black"}} rel="noreferrer"><Youtube/></a></p>
            </MDBCol>

            {/* <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href='https://www.facebook.com/trannhu.hai.3'>
            DESIGN BY: <b>Hai Tran</b>
        </a>
      </div>
    </MDBFooter>
  );
}