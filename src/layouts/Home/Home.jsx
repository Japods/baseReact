import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
}

export default HomeLayout;
