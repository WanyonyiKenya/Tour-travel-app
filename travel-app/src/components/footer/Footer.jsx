import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>MASAFU TRIPS</h1>
          <p>Welcome to Kenya</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-snapchat-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Main Attractions</h4>
          <a href="/">Natural Forests and Wildlife</a>
          <a href="/">Safari Rides</a>
          <a href="/">The Great Rift Valley</a>
          <a href="/">Beaches</a>
          <a href="/">Landforms</a>
        </div>
        <div>
          <h4>Parks and Reserves</h4>
          <a href="/">National parks</a>
          <a href="/">National Reserves</a>
          <a href="/">Sanctuaries</a>
          <a href="/">Marine Parks</a>
          <a href="/">Orphanages</a>
        </div>
        <div>
          <h4>Other Attractions</h4>
          <a href="/">Hot springs</a>
          <a href="/">The Crying Stones</a>
          <a href="/">The Equator</a>
          <a href="/">Kenyan Culture</a>
          <a href="/">Sports</a>
        </div>
        <div>
          <h4>Management & Governance</h4>
          <a href="/">Kenya Wildlife services</a>
          <a href="/">Ministry of Tourism</a>
          <a href="/">Ministry of Foreign Affairs</a>
          <a href="/">Ministry of Sport, Culture and Heritage</a>
          <a href="/">Ministry of Environment and Forestry</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
