import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }: any) => {
  const signed = true;

  return signed ? <Item /> : <Signin />;
};

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="*" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Private Item={Home} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
