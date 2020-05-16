import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';
import { FormContext } from './Contexts/FormContext';

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

  // Set FormContext provider values
  const [form, setForm] = useState({
    // All field names go here
    firstName: {
      input: null,
      error: null,
    },
    lastName: {
      input: null,
      error: null,
    },
    email: {
      input: null,
      error: null,
    },
    password: {
      input: null,
      error: null,
    },
    passwordConfirmation: {
      input: null,
      error: null,
    },
  });
  const formValue = useMemo(() => ({ form, setForm }), [form, setForm]);

  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <FormContext.Provider value={formValue}>
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
        </FormContext.Provider>
      </GlobalContext.Provider>
    </UserContext.Provider>
  );
}
