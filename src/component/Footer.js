import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; 

function Footer() {
  return (
    <>
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h4>Shop Smart</h4>
          <p>
            Your one-stop shop for bags, shoes, jackets, dresses, and watches!
          </p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#">
              <FaFacebook size={30} />
            </a>
            <a href="#">
              <FaTwitter size={30} />
            </a>
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
        <div class="footer-section">
          <h4>Subscribe</h4>
          <form action="/subscribe" method="POST">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Shop Smart. All Rights Reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
