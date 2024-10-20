// src/components/SignUp.js
import React from 'react';

// SignUp component for user registration
const SignUp = () => {
    return (
        <div id="main-content">
            <form id="sign-up-form">
                <h2>Sign-Up</h2>
                {/* Input for username */}
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                {/* Input for email */}
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                {/* Input for password */}
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                {/* Input for confirming password */}
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required />

                {/* Submit button for sign up */}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp; // Export SignUp component

