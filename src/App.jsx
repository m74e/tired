import "./App.css";

import Right from "../src/Componet/right.jsx";
import Number from "./Pages/number.jsx";
import Vaild from "./Pages/pagevaild/vaild.jsx";
import Email from "./Pages/email/email.jsx";
import Web from "./Pages/web/web.jsx";
import useStore from "./zustand/store.js";
import Editprofile from "./EditProfile/editprofile.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const { count, setCount } = useStore();

  function counterPath() {
    if (count === 0) {
      return <Right />;
    } else if (count === 1) {
      return <Number />;
    } else if (count === 2) {
      return <Vaild />;
    } else if (count === 3) {
      return <Email />;
    } else if (count === 4) {
      return <div></div>;
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={counterPath()} />
        <Route path="/web" element={<Web /> } />
        <Route path="/edit" element={<Editprofile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
