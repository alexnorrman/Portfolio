import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faLinkedin,
    //faTwitter,
    //faFacebook,
    faInstagram,
    faDribbble,
    //faBehance
  } from "@fortawesome/free-brands-svg-icons";
import './Footer.css';
 /*
 <a target="_blank" href="https://www.behance.net/alexnorrman" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faBehance} size="2x" />
        </a>
 <a target="_blank" href="https://twitter.com/alex_norrman" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a target="_blank" href="https://www.facebook.com/alexnorrman" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
  */
const Footer = () => (
    <footer>
        <a target="_blank" href="https://www.linkedin.com/in/alexnorrman/" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a> 
        <a target="_blank" href="https://github.com/alexnorrman/" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a target="_blank" href="https://dribbble.com/alexnorrman" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faDribbble} size="2x" />
        </a>
        <a target="_blank" href="https://www.instagram.com/alexnorrman/" rel="noopener noreferrer" className="social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </footer>
);

export default Footer;