import "./App.css";
import "./css//base.css";
import "./css/style.css";
import "./css/grid.css";
import "./css/signs.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Clients/Cart/cart";
import Support from "./pages/Clients/Cart/support";
import Home from "./pages/Clients/Home/home";
import Signin from "./pages/Clients/Signs/signIn";
import Signup from "./pages/Clients/Signs/signUp";
import SearchHome from "./pages/Clients/SearchHome/searchHome";
import ProductDetail from "./pages/Clients/Detail/productDetails";
import User from "./pages/Clients/Users/user";
import PageProducts from "./pages/Clients/Home/HomeContent/pageProducts";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import ProductList from "./pages/Admin/List/productList";
import UserList from "./pages/Admin/List/userList";
import AddProduct from "./pages/Admin/Add/addProduct";
import EditProduct from "./pages/Admin/Edit/editProduct";
import AddTrademark from "./pages/Admin/Add/addTrademark";
import OrderList from "./pages/Admin/List/OrderList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./slices/authSlice";
import { getUserAddress } from "./slices/addressSlice";
import { getCartItems } from "./slices/cartSlice";
import PageCategoryProducts from "./pages/Clients/Home/HomeContent/pageCategoryProducts";
import PaymentPage from "./pages/Clients/Pay/PaymentPage";
import { getOrdersByUser } from "./slices/orderSlice";
import Protected from "./Protected";
//---------------------
function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuthenticated) {
      const fetchData = () => {
        dispatch(getCartItems());
        dispatch(getUserAddress());
        dispatch(getOrdersByUser());
      };
      fetchData();
    } else {
      const checkUser = () => {
        dispatch(isUserLoggedIn());
      };
      checkUser();
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page_products/*" element={<PageProducts />} />
      <Route path="/category/:slug" element={<PageCategoryProducts />} />
      <Route path="/pay/*" element={<PaymentPage />} />
      <Route path="/cart/*" element={<Cart />} />
      <Route path="/support/*" element={<Support />} />
      <Route path="/signin/*" element={<Signin />} />
      <Route path="/signup/*" element={<Signup />} />
      <Route path="/searchhome/*" element={<SearchHome />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/user/*" element={<User />} />
      <Route
        path="/admin/*"
        element={
          <Protected isLoggedIn={isAuthenticated}>
            <Dashboard />
          </Protected>
        }
      />
      <Route path="/listproduct/*" element={<ProductList />} />
      <Route path="/listUser/*" element={<UserList />} />
      <Route path="/addproduct/*" element={<AddProduct />} />
      <Route path="/editproduct/:id" element={<EditProduct />} />
      <Route path="/addtrademark/*" element={<AddTrademark />} />
      <Route path="/listorder/*" element={<OrderList />} />
    </Routes>
  );
}

export default App;
