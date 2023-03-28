import "./home.css";
import Header from "../../Components/Header/Header";
import ListProducts from "../../Components/ListProducts/ListProducts";
import Slider from "../../Components/Slider/Slider";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer/Footer"
import { useSelector } from "react-redux";
import Menu from "../../Components/Menu/Menu";
const HomePage = () => {
  const { login } = useSelector((state) => state.auth);
  console.log("homePage")
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
