import "./home.css";
import axios from 'axios'
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
const HomePage = () => {
  // const [listProduct, setListProduct] = useState([]);
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_URL_LOCALHOST}/api/product/getAllProducts`)
  //       .then((res) => setListProduct(res.data))
  // },[])
  return (
    <div>
      <NavBar/>
      <Header/>
    </div>
  )
};

export default HomePage;
