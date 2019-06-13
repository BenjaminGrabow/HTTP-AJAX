import React from 'react';
import FriendsContainer from './Component/FriendsList/FriendsContainer';
import LoginPage from './Component/Login/LoginPage';
import { Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginPage} />
      <Route path="/friends" component={FriendsContainer} /> 
    </div>
  );
}

export default App;
