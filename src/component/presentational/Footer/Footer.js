import React from 'react';
import './Footer.css'

const Footer = () => {
  return <>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li><p>About us</p></li>
              <li><p>Our services</p></li>
              <li><p>Privacy policy</p></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li><p>FAQ</p></li>
              <li><p>Help & Contact</p></li>
              <li><p>Special Assistance</p></li>
              <li><p>Baggage</p></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Terms and Condition</h4>
            <ul>
              <li><p>Key Terms</p></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <ul className="social-links">
              <li><i className="fab fa-facebook-f"></i> FaceBook</li>
              <li><i className="fab fa-twitter"></i>Twitter(X)</li>
              <li><i className="fab fa-instagram"></i>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">

      </div>
    </footer>
  </>
  
}

export default Footer