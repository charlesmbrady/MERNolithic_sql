import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './style.css';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './Contexts/authContext';

//********** Pages/Components **********//
import NavTrack from './Components/NavTrack';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div className={style.app}>
          <NavTrack />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />

            <Route path='/' component={Login} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
