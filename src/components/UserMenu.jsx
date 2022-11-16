import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as authSelectors from 'redux/auth/authSelectors'
import * as authOpetations from 'redux/auth/authOperations'
import { Box, Text, Flex } from "@chakra-ui/react"


export default function UserMenu() {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();


  return (
      <Flex align="center" justify="space-between" px='20px'>
          <Text mr='20px' my='0'>
              {userName.email}
          </Text>
          <button type='button' onClick={() => dispatch(authOpetations.logOut())}>Logout</button>
      </Flex>
  )
}
