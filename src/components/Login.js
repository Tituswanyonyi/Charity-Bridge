import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/LoginForm.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');
    setSuccessMessage('');

    if (!username || !password || !userType) {
      setError('Username, password, and userType are required.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, userType }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.access_token);
        setSuccessMessage('Login successful!');
        navigate('/Pages/Ngo')
        navigate('/Pages/Donor')
        navigate('/Pages/admin')
        // determineUserRoleAndRedirect(data.redirect_url);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  // const determineUserRoleAndRedirect = (redirectUrl) => {
  //   navigate(redirectUrl);
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div className="login-form-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
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
        <div className="form-group">
          <label>UserType:</label>
          <input
            type="text"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
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
