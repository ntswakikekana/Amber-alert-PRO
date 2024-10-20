// src/components/Login.js
import React from 'react';

// Login component for the user login form
const Login = () => {
    return (
        <div id="main-content">
            <form id="login-form">
                <h2>Log In</h2>
                {/* Input for username */}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                {/* Input for password */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                {/* Submit button for logging in */}
                <button type="submit">Log In</button>
            </form>
            <div id="login-message" style={{ display: 'none', marginTop: '20px' }}></div> {/* Message display area */}
        </div>
    );
};

export default Login; // Export Login component

