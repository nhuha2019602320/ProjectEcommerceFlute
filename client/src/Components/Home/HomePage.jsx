import "./home.css";
import Header from "../Header/Header";
import ListProducts from "../ListProducts/ListProducts";
import Slider from "../Slider/Slider";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer"
import { useSelector } from "react-redux";
import Menu from "../Menu/Menu";
const HomePage = () => {
  const { login } = useSelector((state) => state.auth);
  return (
    <div>
      <Header />
        <Menu/>
      <Container>
        <Slider />
        <ListProducts />
      </Container>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
