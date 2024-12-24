import React from 'react';
import { Link,Outlet} from 'react-router-dom';
import { FaSearch,FaFacebook,FaYoutube,FaInstagram } from 'react-icons/fa'; 

const Root = () => {
  return (
    <div>
      <header>
        <img src="/logo.jpg" alt="" className="brand-logo" />
        <nav>
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/loginpage'>LOGIN</Link></li>
            <li><Link to='/products'>PRODUCTS</Link></li>
            <li className="search-bar">
              <FaSearch className="search-icon" />
              <input type="text" className="input" placeholder="Search for products" />
            </li>
          </ul>
        </nav>
      </header>
      <main>
       
        <Outlet />
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h4>About Us</h4>
            <p>We are a leading e-commerce platform providing high-quality products at affordable prices. Our mission is to offer the best shopping experience online.</p>
          </div>

          <div className="footer-middle">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-right">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 stylebyte. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Root;
