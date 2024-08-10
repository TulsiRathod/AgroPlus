import React from 'react';
import { useNavigate } from "react-router-dom";

const AgroLogin = () => {
    const nav= useNavigate();
    return (
        <div className="auth-wrapper">
            <div className="auth-form-container">
                <h2 className="auth-title">Welcome back!</h2>
                <p className="auth-subtitle">Enter your Credentials to access your account</p>
                <form className="auth-form">
                    <label htmlFor="login-email" className="auth-label">Email address</label>
                    <input type="email" id="login-email" className="auth-input" placeholder="Enter your email" />

                    <label htmlFor="login-password" className="auth-label">Password</label>
                    <input type="password" id="login-password" className="auth-input" placeholder="Enter your password" />

                    <div className="auth-remember-forgot">
                        <label className="auth-remember">
                            <input type="checkbox" />
                            Remember for 30 days
                        </label>
                        <a href="#" className="auth-terms-link">forgot password</a>
                    </div>

                    <button type="submit" className="auth-button">Login</button>
                </form>

                <p onClick={()=>nav('/register')} className="auth-footer">Don't have an account? <a  className="auth-footer-link">Sign Up</a></p>
            </div>
            <div className="auth-image-container">
                <img src="images/Login.jpg" alt="Leaf Image" className="auth-image" />
            </div>
        </div>
    );
};

export default AgroLogin;
