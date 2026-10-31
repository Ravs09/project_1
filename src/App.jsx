
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import ProductPage from "./component/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/Products" element ={<ProductPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
