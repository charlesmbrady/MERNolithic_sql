import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './Contexts/authContext';

//********** Pages/Components **********//
import Home from './Pages/Home';
import NavTrack from './Components/NavTrack';
import Login from './Pages/Login';
import Register from './Pages/Register';

export default function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div className='App'>
          <NavTrack />
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <PrivateRoute exact path='/home'>
              <Home />
            </PrivateRoute>

            <Route path='/' component={Login} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
