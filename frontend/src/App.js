import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';
import { FormValuesContext } from './Contexts/FormValuesContext';
import { FormErrorsContext } from './Contexts/FormErrorsContext';

//********** Pages/Components **********//
import NavTrack from './Components/NavTrack';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';

export default function App() {
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
    sideDrawer: false,
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
    confirmPassword: null,
  });
  const formValuesValue = useMemo(() => ({ formValues, setFormValues }), [
    formValues,
    setFormValues,
  ]);

  // Set FormErrosContext provider values
  const [formErrors, setFormErrors] = useState({
    // All field names go here
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const formErrorsValue = useMemo(() => ({ formErrors, setFormErrors }), [
    formErrors,
    setFormErrors,
  ]);
  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <FormValuesContext.Provider value={formValuesValue}>
          <FormErrorsContext.Provider value={formErrorsValue}>
            <Router>
              <div className='app'>
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
