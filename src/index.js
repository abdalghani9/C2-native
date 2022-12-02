import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Footer />
  </Router>
);
