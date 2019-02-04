import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import LoginPage from './components/loginpage.js'
// import GroupPage from './components/groupPage.js'
import SettingsPage from './components/settingsPage.js'
import MemberPage from './components/memberPage.js'

class App extends Component {
  render() {
    return (
      <MemberPage/>
    );
  }
}

export default App;
