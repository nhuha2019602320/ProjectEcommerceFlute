import React from 'react';
import AdminPage from '../../Admin/AdminPage';
import Container from "react-bootstrap/esm/Container";
const index = () => {
  return (
    <div style={{display:"flex"}}>
      <AdminPage/>
      <Container>
        Products
      </Container>
    </div>
  )
}

export default index