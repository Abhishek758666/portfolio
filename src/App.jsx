import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <div className="text-[#ffffff] font-body bg-[#151515]">
      <Router>
        <Cursor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
