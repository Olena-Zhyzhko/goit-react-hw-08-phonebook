import { useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import * as authOpetations from 'redux/auth/authOperations'
import { getErrorLogin } from 'redux/auth/authSelectors'
import { Form, Lable, Input, BtnForm, BtnShow } from 'components/Form.styled'
import { Box, Text, InputGroup, InputRightElement } from "@chakra-ui/react"


export  default function Login() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false)
  
  const dispatch = useDispatch();
  const error = useSelector(getErrorLogin);


    const emailId = nanoid();
    const passwordId = nanoid();


    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
      case 'email':
        setEmail(value);
        break;
            
      case 'password':
        setPassword(value);
        break;
          
      default:
        return;
        };
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        dispatch(authOpetations.logIn({ email, password }));
        setEmail('');
        setPassword('');
  };

  return (
    <Box py='20px' pl='20px'>
      {error && 
      <Text color='red' fontSize={24}>Your login or password is incorrect. Try again.</Text>}
        <Form onSubmit={handleSubmit}>
            <Lable htmlFor={emailId}>E-mail</Lable>
                <Input
                  id={emailId}
                  type="text"
                  name="email"
                    required
                    value={email}
                  onChange={handleChange}              
                />
              
      <Lable htmlFor={passwordId}>Password</Lable>
        <InputGroup >
            <Input
              id={passwordId}
              type={show ? 'text' : 'password'}
              name="password"
                required
                value={password}
              onChange={handleChange}              
          />
            <InputRightElement display='flexbox;' justify-content='flex-start' width='100%' top='3px' left='145' font-size='8px'>
                <BtnShow  onClick={() => setShow(!show)}>
                  {show ? 'Hide' : 'Show'}
                </BtnShow>
                  </InputRightElement>
              </InputGroup>

            <BtnForm type="submit">LogIn</BtnForm>
          </Form>
      
    </Box>
          )
}