import React from 'react';
import './App.css';
// routers
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

// redux store
import { Provider } from 'react-redux';
import store from './store/store';

// components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/client/AddClient';
import ClientDetails from './components/client/ClientDetails';
import EditClient from './components/client/EditClient';
import Login from './components/auth/Login';
import Settings from './components/settings/Settings';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                component={UserIsAuthenticated(Dashboard)}
              />
              <Route
                exact
                path="/login"
                component={UserIsNotAuthenticated(Login)}
              />
              <Route
                exact
                path="/client/add"
                component={UserIsAuthenticated(AddClient)}
              />
              <Route
                exact
                path="/client/edit/:id"
                component={UserIsAuthenticated(EditClient)}
              />
              <Route
                exact
                path="/client/:id"
                component={UserIsAuthenticated(ClientDetails)}
              />
              <Route
                exact
                path="/settings"
                component={UserIsAuthenticated(Settings)}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
