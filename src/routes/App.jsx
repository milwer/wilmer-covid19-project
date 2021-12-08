import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";

import Layout from "../containers/Layout";
import Home from "../pages/Home";
import Countries from "../pages/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route key="1" path="/" element={<Home />} />
          <Route key="2" path="/countries" element={<Countries />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
