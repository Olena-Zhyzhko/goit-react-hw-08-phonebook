import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as authSelectors from 'redux/auth/authSelectors'
import * as authOpetations from 'redux/auth/authOperations'


export default function UserMenu() {
    const userName = useSelector(authSelectors.getUserName);
    const dispatch = useDispatch();


  return (
      <div>
          <p>{userName.name}</p>
          <button type='button' onClick={() => dispatch(authOpetations.logOut())}>Logout</button>
      </div>
  )
}
