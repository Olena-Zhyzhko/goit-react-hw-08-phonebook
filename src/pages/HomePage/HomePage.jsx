import React from 'react'
// import { Link } from "react-router-dom";
import { Box, Heading, Text, Flex, Link } from "@chakra-ui/react"
import { Link as ReachLink } from "@reach/router";

export default function HomePage() {
  return (
      <Box mx="auto" pt='50px' pb='1hv' >
            <Heading size='30px' textAlign='center'>Welcome!</Heading>
            <Text fontSize='20px' textAlign='center'>
              <Text>You entered the student work on creating a phone book.</Text>
              <Text>If you are visiting us for the first time, please register first to create your account.</Text> <Text>If you are already registered, please log in.</Text>
              <Text>Pleasant use.</Text>
          </Text>
          <Flex align="center" justify="center" mt='10px'>
            <Box borderRadius='4px' bg='#6fccf7' mr='10px' px='15px' py='10px'>
                <Link className="Link"  as={ReachLink} to="login">Login</Link >
            </Box>
            <Box borderRadius='4px' bg='#6fccf7' px='15px' py='10px'>
                <Link className="Link" to="/register">Register</Link >
            </Box>

        </Flex>
      </Box>
  )
}

