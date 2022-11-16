import { useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import * as authOpetations from 'redux/auth/authOperations'
import { Form, Lable, Input, BtnForm } from 'components/Form.styled'
// import { Input } from '@chakra-ui/react'

export  default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();

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
        <Form onSubmit={handleSubmit}>
            <Lable htmlFor={emailId}>E-mail</Lable>
            <Input
              id={emailId}
              type="text"
              name="email"
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={email}
              onChange={handleChange}              
            />
              
            <Lable htmlFor={passwordId}>Password</Lable>
            <Input
              id={passwordId}
              type="text"
              name="password"
            //   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={password}
              onChange={handleChange}              
            />
            <BtnForm type="submit">LogIn</BtnForm>
          </Form>
          )
}

