import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import API from './Utilities/API';
import { UserContext } from './Contexts/UserContext';

export default function PrivateRoute({ component: Component, ...rest }) {
  let isAuthenticated = API.checkToken().then((res) => {
    if (res.status == 200) {
      return true;
    }
  });

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}
