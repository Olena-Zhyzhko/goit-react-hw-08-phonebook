import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import './AppBar.css'
import Navigation from "./Navigation";

export const SharedLayout = () => {
  return (
    <>
        <Navigation />
      <Suspense fallback={null}>
          <Outlet />
      </Suspense>
    </>
  )
};