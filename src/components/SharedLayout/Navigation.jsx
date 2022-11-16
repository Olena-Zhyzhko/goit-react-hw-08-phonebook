import React from 'react'
import { NavLink } from "react-router-dom";
import UserMenu from 'components/UserMenu'
import { useSelector } from "react-redux";
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import AuthNav from 'components/SharedLayout/AuthNav'
import { Box, Flex } from "@chakra-ui/react"


export default function Navigation() {
      const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className="Header">
      <Flex flex-direction='row-reverse' align="center" justify="flex-start" px='20px'>
        <Box mr='auto'>
          {isLoggedIn && <NavLink className="NavLink" to="/contacts">Contacts</NavLink >}

        </Box>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}

      </Flex>
    </header>  )
}
