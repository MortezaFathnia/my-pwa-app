import React from 'react';
import UserContext from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
export interface Props{
    children:any,
}
export const RequireAuth = ({children}:Props) => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return value.user ? children : <Navigate to="/" />;
      }}
    </UserContext.Consumer>
  );
};
