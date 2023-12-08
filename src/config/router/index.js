import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

const Router = () => {
  const token = localStorage.getItem("token");

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {!token ? (
            <Route
              path="/"
              element={<Navigate to="/login" replace="true"></Navigate>}
            />
          ) : (
            <Route
              path="/"
              element={
                <Navigate to="/funtechgram.com" replace="true"></Navigate>
              }
            />
          )}

          <Route path="/funtechgram.com" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
