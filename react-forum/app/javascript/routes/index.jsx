import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Discussions from "../components/Discussions";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discussions" element={<Discussions />} />
    </Routes>
  </Router>
);