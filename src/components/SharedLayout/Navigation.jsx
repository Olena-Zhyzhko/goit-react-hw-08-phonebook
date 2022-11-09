import React from 'react'
import { NavLink } from "react-router-dom";
import UserMenu from 'components/UserMenu'


export default function Navigation() {
  return (
    <header className="Header">
        <NavLink className="NavLink" to="/contacts">Contacts</NavLink >
        {/* <AuthNav > */}
            <NavLink className="NavLink" to="/login">LogIn</NavLink >
            <NavLink className="NavLink" to="/register">Register</NavLink >
        {/* </AuthNav > */}
        <UserMenu />
      </header>  )
}
