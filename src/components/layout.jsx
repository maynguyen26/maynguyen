import { Outlet } from "react-router-dom";
import React from 'react';
import Header from "./header"; // ⚠️ verify it's the correct path

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;