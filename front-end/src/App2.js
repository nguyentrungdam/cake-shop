/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admins/Dashboard/Dashboard";
import ProductList from "./pages/Admins/List/productList";
import UserList from "./pages/Admins/List/userList";
import AddProduct from "./pages/Admins/Add/addProduct";
import EditProduct from "./pages/Admins/Edit/editProduct";
import AddTrademark from "./pages/Admins/Add/addTrademark";
import OrderList from "./pages/Admins/List/OrderList";
import Account from "./pages/Clients/Account/Account";
import Addresses from "./pages/Clients/Account/Addresses";
import Cart from "./pages/Clients/Cart/cart";
import HomePage from "./pages/Clients/HomePage/HomePage";
import ListProduct from "./pages/Clients/ListProduct/ListProduct";
import Pay from "./pages/Clients/Payment/Pay";
import ProductDetail from "./pages/Clients/ProductDetail/ProductDetail";
import Search from "./pages/Clients/Search/Search";
import Signin from "./pages/Clients/Signs/signIn";
import Signup from "./pages/Clients/Signs/signUp";
import Protected from "./Protected";
import { getAccountProfile, signin } from "./slices/accountSlice";

//---------------------
function App() {
  const { isAuthenticated } = useSelector((state) => state.account);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     const fetchData = () => {
  //       dispatch(getAccountProfile());
  //       // dispatch(getUserAddress());
  //       // dispatch(getOrdersByUser());
  //     };
  //     fetchData();
  //   } else {
  //   }
  // }, [isAuthenticated]);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/list-product" element={<ListProduct />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Pay />} />
      <Route path="/account" element={<Account />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account/addresses" element={<Addresses />} />
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
