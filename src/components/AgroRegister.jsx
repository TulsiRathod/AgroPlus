import React from 'react';
import { useNavigate } from "react-router-dom";

const AgroRegister = () => {
    const nav=useNavigate();
    return (
        <div className="auth-wrapper">
            <div className="auth-form-container">
                <h2 className="auth-title">Get Started Now</h2>
                <form className="auth-form">
                    <label htmlFor="signup-name" className="auth-label">Name</label>
                    <input type="text" id="signup-name" className="auth-input" placeholder="Enter your name" />

                    <label htmlFor="signup-email" className="auth-label">Email address</label>
                    <input type="email" id="signup-email" className="auth-input" placeholder="Enter your email" />

                    <label htmlFor="signup-password" className="auth-label">Password</label>
                    <input type="password" id="signup-password" className="auth-input" placeholder="Enter your password" />

                    <div className="auth-terms">
                        <label className="auth-remember">
                            <input type="checkbox" />
                            I agree to the <a href="#" className="auth-terms-link">terms & policy</a>
                        </label>
                    </div>

                    <button type="submit" className="auth-button">Signup</button>
                </form>

                <p onClick={()=>nav('/login')} className="auth-footer">Have an account? <a href="#" className="auth-footer-link">Sign In</a></p>
            </div>
            <div className="auth-image-container">
                <img src="images/Login.jpg" alt="Leaf Image" className="auth-image" />
            </div>
        </div>
    );
};

export default AgroRegister;
