import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export default function RoutesApp() {

  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element={<Home />}
          />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
