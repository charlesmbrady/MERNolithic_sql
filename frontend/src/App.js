import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { UserContext } from './Contexts/UserContext';
import { GlobalContext } from './Contexts/GlobalContext';

//********** Pages/Components **********//
import NavTrack from './Components/NavTrack';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  const [user, setUser] = useState({
    isAuthenticated: false,
    firstName: null,
    lastName: null,
    email: null,
  });
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  const [global, setGlobal] = useState({
    sideDrawer: false,
  });
  const globalValue = useMemo(() => ({ global, setGlobal }), [
    global,
    setGlobal,
  ]);

  return (
    <UserContext.Provider value={userValue}>
      <GlobalContext.Provider value={globalValue}>
        <Router>
          <div className='app'>
            <NavTrack />
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />

              <Route path='/' component={Login} />
            </Switch>
          </div>
        </Router>
      </GlobalContext.Provider>
    </UserContext.Provider>
  );
}
