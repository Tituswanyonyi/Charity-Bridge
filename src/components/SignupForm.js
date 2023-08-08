import React, { useState } from 'react';
import '../css/SignupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState(''); // State to store user type
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    userType, // Include the userType in the request body
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setError('');
            } else {
                setError(data.error);
                setMessage('');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            setMessage('');
        }
    };

    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            {message && <p className="message">{message}</p>}
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userType">User Type:</label>
                    <select
                        id="userType"
                        value={userType}
                        onChange={(e) => setUserType(e.target.value)}
                    >
                        <option value="">Select User Type</option>
                        <option value="admin">admin</option>
                        <option value="ngo">ngo</option>
                        <option value="donor">donor</option>
                    </select>
                </div>
                <button type="submit">Sign Up</button>
            </form>
            <p className="create-account-link">
                Already Registered? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default SignupForm;
