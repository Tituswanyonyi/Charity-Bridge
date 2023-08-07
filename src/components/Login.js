import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    if (!username || !password) {
      setError('Username and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        
        // Determine the user's role and redirect to the relevant dashboard
        if (data.role === 'Admin') {
          navigate('/AdminDashboard');
        } else if (data.role === 'NGO') {
          navigate('/NgoDashboard');
        } else if (data.role === 'Donor') {
          navigate('/DonorDashboard');
        } else {
          setError('Invalid role.');
        }
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {isLoggedIn && (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </form>
      <p className="create-account-link">
        Not yet Registered? <a href="/signup">Create account</a>
      </p>
    </div>
  );
};

export default Login;
