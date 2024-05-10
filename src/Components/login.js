import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import NavBar from "./NavBar";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();

  
    const isAuthenticated = username === 'admin' && password === 'password123';
    if(username==='admin' && password==='password123') {
    setIsLoggedIn(isAuthenticated);
    setUsername(username);
    setPassword(password)}
    else { alert('wrong password or username')}
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
    <header>
          <NavBar/>
      </header>
    <div className='login-container'>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
    </>
  );
}

export default LoginPage;