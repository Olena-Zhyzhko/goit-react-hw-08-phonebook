import { Routes, Route } from "react-router-dom";
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register'
import Contacts from 'pages/Contacts/Contacts'
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import * as authOpetations from 'redux/auth/authOperations'


export function App() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(authOpetations.authCurrentUser()) }, [dispatch]);


  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
      

    );  
}