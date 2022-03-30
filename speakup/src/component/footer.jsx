import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram, faYoutube, faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import "./footer.css";

const Footer = () => {
  return(
      <div name="footer" id="footer" className="container-fluid">
        <footer className="py-5">
          <div className="row">
            <div className="col-4 offset-1">
              <h4 id="footer-app-title">SpeakUp</h4>
              <p id="footer-app-subtitle">Counseling App</p>
              <p id="footer-app-desc">We will help you to overcome mental health problems and help you to reach your goals to make your life more meaningful</p>
              <a href="https://www.instagram.com/rianezza012/"><FontAwesomeIcon icon={faInstagram} id="ig"/></a>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><FontAwesomeIcon icon={faYoutube} className="offset-1" id="yt"/></a>
              <FontAwesomeIcon icon={faFacebookSquare} className="offset-1" id="fb"/>
            </div>
            <div id="company-this" className="col-1">
            <h4 id="company">Company</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#">Home</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Feature</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Diary</a>
              </li>
              </ul>
            </div>
            <div id="policy-this" className="col-1">
              <h4 id="policy">Policies</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#">Terms</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">Privacy</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">API</a>
              </li>
              </ul>
            </div>
            <div id="contacts-this" className="col-2">
              <h4 id="contacts">Contacts</h4>
              <ul>
              <li className="nav-item mb-2">
                <a href="#">+62 812 3568 6798</a>
              </li>
              <li className="nav-item mb-2">
                <a href="#">speakup@gmail.com</a>
              </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
  )
};

export default Footer;
