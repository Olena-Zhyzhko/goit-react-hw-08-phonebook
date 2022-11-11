import { Routes, Route } from "react-router";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { lazy } from "react";

import { SharedLayout } from 'components/SharedLayout/SharedLayout';
// import { Login } from 'pages/Login/Login';
// import { Register } from 'pages/Register/Register'
// import Contacts from 'pages/Contacts/Contacts'
import * as authOpetations from 'redux/auth/authOperations'
import PublicRoute from 'components/SharedLayout/PublicRoute'
import PrivateRoute from 'components/SharedLayout/PrivateRoute'
import { getFetchingCurrentUser } from 'redux/auth/authSelectors'

const Login = lazy(() => import("pages/Login/Login"));
const Register = lazy(() => import("pages/Register/Register"));
const Contacts = lazy(() => import("pages/Contacts/Contacts"));



export function App() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(authOpetations.authCurrentUser()) }, [dispatch]);
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  return (
    !isFetchingCurrentUser && (
    < div >
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />} >
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />} >
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
    </div >
    ) 
  );  
}