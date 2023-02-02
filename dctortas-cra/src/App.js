import { Route, Routes } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
