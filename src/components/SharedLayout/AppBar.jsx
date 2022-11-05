import React
// { Suspense }
  from 'react'
import { Outlet, NavLink } from "react-router-dom";
// import './AppBar.css'

export default function AppBar() {
  return (
    <>
      <header className="Header">
          <nav>
            <NavLink className="NavLink" to="/login">LogIn</NavLink >
            <NavLink className="NavLink" to="/register">Register</NavLink >
            <NavLink className="NavLink" to="/contacts">Contacts</NavLink >
          </nav>
      </header>
      {/* <Suspense fallback={null}> */}
          <Outlet />
      {/* </Suspense> */}
    </>
  )
}
