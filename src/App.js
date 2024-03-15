import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './/Login';
import Signup from './Signup';
import Home from './Home'; 
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setIsLoggedIn(!!storedUser);
  }, []);

  const handleLogin = (email, password) => {
    console.log('Login successful:', email, password);
    setIsLoggedIn(true);
  };

  const handleSignup = (email, password, confirmPassword) => {
    console.log('Signup successful:', email, password);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
      {/* <Home /> */}
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
          </Routes>
        )}
       
      </div>
    </Router>
  );
};

export default App;
