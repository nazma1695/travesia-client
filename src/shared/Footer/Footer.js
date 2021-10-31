import React from "react";
import logo from "../../images/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      {/* Footer area  */}

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5 className="mb-3">RESOURCES</h5>
              <div className="footer-item">
                <ul>
                  <li>About Us</li>
                  <li>Tours</li>
                  <li>Gallery</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">INFORMATION</h5>
              <div className="footer-item">
                <ul>
                  <li>Wedding Tour</li>
                  <li>Bus Tour</li>
                  <li>Food & wine</li>
                  <li>Summer Rest</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">ABOUT US</h5>
              <div className="footer-item">
                <ul>
                  <li>Term of use</li>
                  <li>Code of conduct</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <h4 className="mb-3">
                <img src={logo} alt="" />
              </h4>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="footer-copyright">
              <p className="mt-3">Travesia &copy; 2021. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
