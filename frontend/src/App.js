import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './Contexts/authContext';

//********** Pages/Components **********//
import Home from './Pages/Home';

export default function App() {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>

            <Route path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
