import React, { useState, useMemo, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';
import { FormValuesContext } from './Contexts/FormValuesContext';
import { FormErrorsContext } from './Contexts/FormErrorsContext';
import useApi from './Hooks/useApi';
import API from './Utilities/API';

//********** Pages/Components **********//
import Mask from './GenericComponents/Mask';
import NavTrack from './Components/NavTrack';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

export default function App() {
  // const [data] = useApi(API.checkToken);
  // console.log(' the data ' + JSON.stringify(data));

  // Set UserContext provider values
  const [user, setUser] = useState({
    isAuthenticated: false,
    isCreated: false,
    firstName: null,
    lastName: null,
    email: null,
  });
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  // Set GlobalContext provider values
  const [global, setGlobal] = useState({
    isSubmitting: false,
    isLoading: false,
    leftDrawerOpen: false,
    rightDrawerOpen: false,
  });
  const globalValue = useMemo(() => ({ global, setGlobal }), [
    global,
    setGlobal,
  ]);

  // Set FormValuesContext provider values
  const [formValues, setFormValues] = useState({
    // All field names go here
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    passwordConfirmation: null,
  });
  const formValuesValue = useMemo(() => ({ formValues, setFormValues }), [
    formValues,
    setFormValues,
  ]);

  // Set FormErrorsContext provider values
  const [formErrors, setFormErrors] = useState({});
  const formErrorsValue = useMemo(() => ({ formErrors, setFormErrors }), [
    formErrors,
    setFormErrors,
  ]);

  let mask;
  if (global.isLoading) {
    mask = <Mask />;
  }

  // If user already logged in, redirect them to dashboard
  useEffect(() => {
    // const [data] = useApi(API.checkToken);
    // if (data) {
    //   console.log('data ' + data);
    //   // setGlobal(isLoading)
    // }
    API.checkToken().then((res) => {
      console.log(res);
      if (res.data.firstName) {
        setUser({ ...user, isAuthenticated: true });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <FormValuesContext.Provider value={formValuesValue}>
          <FormErrorsContext.Provider value={formErrorsValue}>
            <Router>
              <div className='main-container'>
                {mask}
                {user.isAuthenticated && <Redirect to='/dashboard' />}
                <NavTrack />
                <Switch>
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />

                  <Route path='/' component={Home} />
                </Switch>
              </div>
            </Router>
          </FormErrorsContext.Provider>
        </FormValuesContext.Provider>
      </GlobalContext.Provider>
    </UserContext.Provider>
  );
}
