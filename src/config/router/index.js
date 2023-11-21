import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/funtechgram.com" replace="true"></Navigate>}
          />
          <Route path="/funtechgram.com" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
