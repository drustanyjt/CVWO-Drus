import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Discussions from "../components/Discussions";
import Discussion from "../components/Discussion";
import NewDiscussion from "../components/NewDiscussion";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discussions" element={<Discussions />} />
      <Route path="/discussion/:id" element={<Discussion />} />
      <Route path="/discussion" element={<NewDiscussion />} />
    </Routes>
  </Router>
);