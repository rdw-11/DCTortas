import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import AfterForgotPw from "./pages/AfterForgotPw";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<AfterForgotPw />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
