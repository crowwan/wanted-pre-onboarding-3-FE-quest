import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../layouts/Nav";
function MainPageTemplate() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default MainPageTemplate;
