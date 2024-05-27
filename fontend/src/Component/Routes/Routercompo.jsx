import { Route, Routes } from "react-router-dom";
import "../App.css";
import Bollywood from "../pages/Bollywood";

import Technology from "../pages/Technology";

import Hollywood from "../pages/Hollywood";

import Home from "../pages/Home";

import Fitness from "../pages/Fitness";

import Food from "../pages/Food";

import Detaildesciption from "../Detaildesciption";
import Contextapi from "../Contextapi/Contextapi";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

function Routercompo() {
  return (
    <div className="App">
      <Contextapi>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route
            path="/detaildescription/:id/:catgory"
            element={<Detaildesciption />}
          />
        </Routes>
        <Footer />
      </Contextapi>
    </div>
  );
}

export default Routercompo;
