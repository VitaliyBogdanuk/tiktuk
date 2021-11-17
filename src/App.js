import React from 'react'
import Posts from './Posts/Posts'
import User from './User/User'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import './App.css';

function App() {
    return (
      <Router>
        <div className="app">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            
            <Routes>
              <Route exact path="/" element={<Posts/>}/>
              <Route path="/user/:userName" element={<User/>}/>
            </Routes>
        </div>
      </Router>
    );
}

export default App;
