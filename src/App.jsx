import "./App.css";
import Sidebar from "../src/Componet/sidebar.jsx";
import Right from "../src/Componet/right.jsx";
import Number from "./Pages/number.jsx";
import Vaild from "./Pages/pagevaild/vaild.jsx"; // Check spelling here
import Email from "./Pages/email/email.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-box">
              <Sidebar />
              <Right />
            </div>
          }
        />
        <Route
          path="/number"
          element={
            <div className="main-box">
              <Sidebar />
              <Number />
            </div>
          }
        />
        <Route
          path="/vaild"
          element={
            <div className="main-box">
              <Sidebar />
              <Vaild />
            </div>
          }
        />
        <Route
          path="/email"
          element={
            <div className="main-box">
              <Sidebar />
              <Email />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
