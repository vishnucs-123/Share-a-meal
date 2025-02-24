import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import DonateFood from "./components/DonateFood";
import DonationList from "./components/DonationsList";
import FindNeedy from "./components/FindNeedy";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar is now correctly included */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonateFood />} />
        <Route path="/donations" element={<DonationList />} />
        <Route path="/find" element={<FindNeedy />} />
      </Routes>
    </Router>
  );
};

export default App;
