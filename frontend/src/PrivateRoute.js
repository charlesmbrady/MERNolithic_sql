import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { useAuth } from './Contexts/authContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
}
