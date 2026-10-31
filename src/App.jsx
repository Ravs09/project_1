import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;