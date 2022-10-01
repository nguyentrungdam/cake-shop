import { Route, Routes } from "react-router-dom";
import Home from "./pages/Clients/Home/home";
import HomePage from "./pages/Clients/HomePage/HomePage";
import Signin from "./pages/Clients/Signs/signIn";
import Signup from "./pages/Clients/Signs/signUp";

//---------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />

      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default App;
