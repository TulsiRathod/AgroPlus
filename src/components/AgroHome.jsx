import React from 'react';
import { useNavigate } from "react-router-dom";

const AgroHome = () => {
    const nav = useNavigate();
    return (
        <>
            {/* Hero Section */}
            <section className="home-container">
                <nav className="home-navbar">
                    <div className="home-logo">AgroPlus</div>
                    <ul className="home-nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News & Articles</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a onClick={()=>nav('/register')}>Sign Up</a></li>
                        <li><a onClick={()=>nav('/login')}>Login</a></li>
                    </ul>
                </nav>
                <div className="home-sub_container">
                    <h1>Fertilizers for the future</h1>
                    <p>Soils Testing • Crop Cultivation • Agricultural Progress</p>
                    <div className="home-container-buttons">
                        <a href="#" className="home-btn-secondary">GET STARTED</a>
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="home-blog">
                <h2>Popular Articles And Tips</h2>
                <div className="home-blog-grid">
                    <div className="home-blog-item">
                        <img src="images/blog1.jpeg" alt="Connecting with farmers" />
                        <h3>Connecting with farmers to improve Livelihoods</h3>
                        <a href="#"><i className="fas fa-arrow-right"></i> Read More</a>
                    </div>
                    <div className="home-blog-item">
                        <img src="images/blog2.jpeg" alt="Environment on Agriculture" />
                        <h3>The Changing Effects of the Environment on Agriculture</h3>
                        <a href="#"><i className="fas fa-arrow-right"></i> Read More</a>
                    </div>
                    {/* Repeat for all blog items */}
                </div>
            </section>

            {/* Services Section */}
            <section className="home-services">
                <h2>What We Do</h2>
                <p>We Are Different From Others To Provide Services</p>
                <p>We transform Ghana's agricultural sector by combining economic success with environmental protection and social responsibility.</p>
            </section>

            {/* About Section */}
            <section className="home-about">
                <h2>About AgroPlus</h2>
                <p>Improve the crop production of Africa</p>
                <p>AgroPlus is widely recognized as a leading Ghanaian company focused on enhancing the crop production in Africa by providing affordable fertilizers for farmers. We also emphasize sustainable agriculture by conducting soil tests on farms to determine the fertilizer needs specific to each farm.</p>
            </section>

            {/* Footer Section */}
            <footer className="home-footer">
                <div className="home-footer-content">
                    <div className="home-footer-logo">AgroPlus</div>
                    <div className="home-footer-links">
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Media</a></li>
                            <li><a href="#">Checkout</a></li>
                        </ul>
                    </div>
                    <div className="home-footer-newsletter">
                        <p>Conact with us for Future</p>
                        <input type="email" placeholder="Enter your email" />
                        <button><i className="fas fa-paper-plane"></i> Enquiry Now</button>
                    </div>
                    <div className="home-footer-social">
                        <a href="#"><i className="fab fa-facebook-f"></i> Facebook</a>
                        <a href="#"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
                <div className="home-footer-bottom">
                    <p>&copy; 2024 AgroPlus. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default AgroHome;
