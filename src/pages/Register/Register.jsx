import React from 'react'
import { useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import * as authOpetations from 'redux/auth/authOperations'
import { Form, Lable, Input, BtnForm, BtnShow } from 'components/Form.styled'
import { Box, InputGroup, InputRightElement } from '@chakra-ui/react';


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const [show, setShow] = useState(false)

  
    const dispatch = useDispatch();

    const nameId = nanoid();
    const emailId = nanoid();
    const passwordId = nanoid();


    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
      case 'name':
        setName(value);
        break;

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
        dispatch(authOpetations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

  return (
    <Box     py='20px' pl='20px' mx="auto">
        <Form onSubmit={handleSubmit}>
            <Lable htmlFor={nameId}>Name</Lable>
            <Input
              id={nameId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
              onChange={handleChange}              
            />
              
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
            <BtnForm type="submit">Register</BtnForm>
          </Form>

    </Box>
          )
}
