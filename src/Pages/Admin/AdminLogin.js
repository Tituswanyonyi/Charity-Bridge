import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import AdminNavbar from './AdminNavBar';
import "./AdminLogin.css";

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        // will call authProvider.login({ email, password })
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        );
    };

    return (
        <div className="adminlogin">
            <AdminNavbar className="admin-nav"></AdminNavbar>
        <div className='login'>
        <form onSubmit={handleSubmit} className="loginForm">
            <input
                name="name"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="loginInput"
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="loginInput"
            />
            <button type="submit" className="loginButton">Login</button>
        </form>
        </div>
        </div>
    );
};

export default AdminLogin;