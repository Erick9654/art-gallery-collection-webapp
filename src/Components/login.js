import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); // Utilize useNavigate hook

  const handleLogin = (event) => {
    event.preventDefault();

    // Simulate authentication (replace with actual login logic)
  
    const isAuthenticated = username === 'admin' && password === 'password123';

    setIsLoggedIn(isAuthenticated);
    setUsername(username);
    setPassword(password)
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to home page on login
    }
  }, [isLoggedIn, navigate]); // Include navigate in dependency array

  return (
    <div>
      {/* ... other content ... */}
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
  );
}

export default LoginPage;