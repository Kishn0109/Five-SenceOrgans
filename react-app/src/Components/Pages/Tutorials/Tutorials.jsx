import React from "react";
import FIveOrgans from "./FIveOrgans";
import { Route, Routes, Outlet, Link } from "react-router-dom";
function Tutorials() {
  return (
    <>
      <Link to="karan">go to karan </Link>
      {/* <FIveOrgans /> */}
      <Outlet />
    </>
  );
}

export default Tutorials;
