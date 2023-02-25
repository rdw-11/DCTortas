import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./layout/PageLayout";
import ForgotPw from "./pages/ForgotPw";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<PageLayout />}>
//     <Route index element={<ForgotPw />} />
//   </Route>
// </Routes>;
