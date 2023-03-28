import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import HomePage from "./Components/Home/HomePage";
import HomePage from "./Pages/Home/HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import AdminPage from "./Components/Admin/AdminPage";
import AdminPage from "./Pages/Admin/AdminPage"
// import Users from "./Components/pages/Users/index";
// import Products from "./Components/pages/Products/index";
// import Caterories from "./Components/pages/Caterories/index";
import Users from "./Pages/Users"
import Products from "./Pages/Products"
import Caterories from "./Pages/Caterories"
import "bootstrap/dist/js/bootstrap.js";
// import { useSelector } from "react-redux";
import Introduction from "./Components/Introduction/Introduction";
import Cart from "./Components/Cart/Cart";
import DetailProduct from "./Components/DetailProduct/DetailProduct";
import Order from "./Components/Order/Order";
import Account from "./Components/Account/Account";
import MyPurchase from "./Components/MyPurchase/MyPurchase";
import Text from "./Components/Test/Test"
import Contact from "./Pages/Contact/Contact";
import Discount from "./Pages/Discount/index"
function App() {
  // const { login } = useSelector((state) => state.auth);
  return (
    <Router>
      {/* <NavBar /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/categories" element={<Caterories />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/detailProduct/:id" element={<DetailProduct/>}/>
          <Route path="/checkout" element={<Order/>}></Route>
          <Route path="/account" element={<Account/>}></Route>
          <Route path="/purchase" element={<MyPurchase/>}></Route>
          <Route path="/test" element={<Text/>}></Route>
          <Route path="/discount" element={<Discount/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

