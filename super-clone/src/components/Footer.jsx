import React from 'react';
import { FaXTwitter, FaInstagram, FaDiscord, FaYoutube } from 'react-icons/fa6';
import superLogo from '../assets/super-logo-white.png'; // Replace with your white logo image

const Footer = () => {
  return (
  <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-top">
      <img src={superLogo} alt="Super Logo" className="footer-logo" />
      <div className="footer-right">
        <FaXTwitter />
        <FaInstagram />
        <FaDiscord />
        <FaYoutube />
      </div>
    </div>

    <div className="footer-main">
      <div className="footer-center">
        <a href="#">Templates</a>
        <a href="#">Themes</a>
        <a href="#">Showcase</a>
        <a href="#">Blog</a>
        <a href="#">Guides</a>
        <a href="#">Docs</a>
        <a href="#">Builder</a>
        <a href="#">Pricing</a>
        <a href="#">Notion Sites vs Super</a>
        <a href="#">Icons</a>
        <a href="#">Illustrations</a>
        <a href="#">Create</a>
        <a href="#">Roadmap</a>
        <a href="#">Community</a>
        <a href="#">Affiliates — 30% commission</a>
        <a href="#">Consulting</a>
        <a href="#">Report</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
       
      </div>
       <p class="super-footer__footnote">© Super Publishing Co </p>
    </div>
  </div>

  <div className="super-badge">⚡ Made with Super</div>
  
</footer>


  );
};

export default Footer;
