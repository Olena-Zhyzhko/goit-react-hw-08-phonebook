import React
// { Suspense }
  from 'react'
import { Outlet } from "react-router-dom";
import './AppBar.css'
import Navigation from "./Navigation";
// import UserMenu from 'components/UserMenu'

export default function AppBar() {
  return (
    <>
      {/* <header className="Header">
        <NavLink className="NavLink" to="/contacts">Contacts</NavLink > */}
        <Navigation />
        {/* <AuthNav > */}
            {/* <NavLink className="NavLink" to="/login">LogIn</NavLink >
            <NavLink className="NavLink" to="/register">Register</NavLink > */}
        {/* </AuthNav > */}
        {/* <UserMenu /> */}
      {/* </header> */}
      {/* <Suspense fallback={null}> */}
          <Outlet />
      {/* </Suspense> */}
    </>
  )
}
