import { Route, Routes } from "react-router-dom";
import Home from "./pages/Clients/Home/home";
import HomePage from "./pages/Clients/HomePage/HomePage";

//---------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default App;
