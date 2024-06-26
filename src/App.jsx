import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from "./components/Cursor";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const App = () => {
  return (
    <div className="text-[#ffffff] font-body bg-[#101010]">
      <Router>
        {/* <div className="flair">
          <Cursor />
        </div> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
