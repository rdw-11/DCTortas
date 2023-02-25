import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./layout/PageLayout";
import ForgotPw from "./pages/ForgotPw";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/forgotpw" element={<ForgotPw />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// <Routes>
//   <Route path="/" element={<PageLayout />}>
//     <Route index element={<ForgotPw />} />
//   </Route>
// </Routes>;
