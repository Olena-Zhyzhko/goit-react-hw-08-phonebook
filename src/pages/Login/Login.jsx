import { useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import * as authOpetations from 'redux/auth/authOperations'
import { Form, Lable, Input, BtnForm } from 'components/Form.styled'

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
                required
                value={email}
              onChange={handleChange}              
            />
              
            <Lable htmlFor={passwordId}>Password</Lable>
            <Input
              id={passwordId}
              type="text"
              name="password"
                required
                value={password}
              onChange={handleChange}              
            />
            <BtnForm type="submit">LogIn</BtnForm>
          </Form>
          )
}

