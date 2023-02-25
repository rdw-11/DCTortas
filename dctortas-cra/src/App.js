import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./layout/PageLayout";
import ForgotPw from "./pages/ForgotPw";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<ForgotPw />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
