import React from 'react'
import { NavLink } from "react-router-dom";

import { Box, Flex } from "@chakra-ui/react"


export default function AuthNav() {
  return (
    <Flex align="center" justify="flex-start" px='20px'>
        <NavLink className="NavLink" to="/login">LogIn</NavLink >
        <NavLink className="NavLink" to="/register">Register</NavLink >
    </Flex>
  )
}
