import "./home.css";
import Header from "../Header/Header";
import ListProducts from "../ListProducts/ListProducts";
import Slider from "../Slider/Slider";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer"
const HomePage = () => {
  return (
    <div>
      <Container>
        <Header />
        <Slider />
        <ListProducts />
      </Container>
      <Footer/>
    </div>
  );
};

export default HomePage;
