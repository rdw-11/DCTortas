import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
