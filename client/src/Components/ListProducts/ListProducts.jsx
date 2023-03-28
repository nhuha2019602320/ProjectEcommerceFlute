// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { AddCard } from "../../redux/cartSlice";
// import { useNavigate } from "react-router-dom";
// import './List.css'

// import { Button, Container } from "react-bootstrap";
// import { GetAllProduct } from "../../services/product";

// const ListProducts = () => {
//   const [ListProducts, setListProducts] = useState([]);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   useEffect(() => {
//     GetAllProduct().then((res) => {
//       setListProducts(res.data);
//     });
//     console.log(
//       "list",
//       ListProducts.map((product) => product.nameProduct.toString())
//     );
//   }, []);
//   return (
//     <Container>
//       <div fluid="true" className="my-5 text-center">
//         <h4 className="mt-4 mb-5">
//           <strong>Sản phẩm bán chạy</strong>
//         </h4>
//         <input
//           type="text"
//           placeholder="Nhập sản phẩm cần tìm"
//           style={{ maxWidth: "300px", textAlign: "center", border:"1px solid" }}
//           className="search"
//         />
//         <button className="search">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="16"
//             height="16"
//             fill="currentColor"
//             className="bi bi-search"
//             viewBox="0 0 16 16"
//           >
//             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//           </svg>
//         </button>
//         <div>
//           {ListProducts.map((product, id) => (
//             <div md="" lg="3" className="mb-4" key={id}>
//               <div>
//                 <Link
//                   to={`detailProduct/${product._id}`}
//                   className="bg-image rounded hover-zoom"
//                 >
//                   <img
//                     src={product.imageProduct}
//                     // fluid
//                     className="w-100 imgProduct"
//                   />
//                 </Link>
//                 <div>
//                   <h3>

//                   <a className="card-title mb-3" style={{fontSize:"14px", textDecoration:"none", color:"#333", fontFamily:"Roboto',Helvetica,Arial,sans-serif"}}>{product.nameProduct}</a>
//                   </h3>

//                   <h6 className="mb-3">
//                     <span>Giá bán: </span>
//                     <strong className="ms-2 text-danger">
//                       {Number(product.price).toLocaleString()}đ
//                     </strong>
//                   </h6>

//                   <Button
//                     variant="success"
//                     onClick={() => dispatch(AddCard(product))}
//                   >
//                     Thêm Vào Giỏ
//                   </Button>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default ListProducts;

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { GetAllProduct } from "../../services/product";
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { AddCard } from "../../redux/cartSlice";
const theme = createTheme();

export default function ListProduct() {
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
      </AppBar>
      <main>
  
            <Typography variant="h5" align="center" color="text.secondary" sx={{marginTop:"40px"}}>
                  <h2>Sản Phẩm Cửa Hàng</h2>
            </Typography>
        
        <Container sx={{ py: 8 }} maxWidth="px">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {ListProducts.map((item,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                 <NavLink
                   to={`detailProduct/${item._id}`}
                  className="bg-image rounded hover-zoom"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      // pt: '56.25%',
                    }}
                    image={item.imageProduct}
                    alt="random"
                  />
                
                </NavLink>           
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.nameProduct}
                    </Typography>
  
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => dispatch(AddCard(item))}>Thêm giỏ hàng</Button>
                    <Button size="small"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}