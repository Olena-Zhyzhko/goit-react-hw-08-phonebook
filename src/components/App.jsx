import { Routes, Route } from "react-router-dom";
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register'
import Contacts from 'pages/Contacts/Contacts'

export function App() {
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