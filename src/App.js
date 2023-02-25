import React from 'react';
import './App.css';
import SearchBar from './navbar';
import HomePage from './HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <div>
          <SearchBar />
        </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/budget">
            <Budget />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <HomePage />
}

function Budget() {
  return <h2>Budget</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
