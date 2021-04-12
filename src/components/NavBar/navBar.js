/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './navBar.css';

function NavBar() {


  return (

    <nav className="menu">

        <div className="header">
          
          <h1 className="title">Aditya Srivastava</h1>

          <img className="headshot" src="https://adisriv-website.s3.us-east-2.amazonaws.com/Screen+Shot+2020-05-15+at+5.46.30+PM.png" alt="description"/>

        </div>
        
        <ol>
          <li className="menu-item"><FontAwesomeIcon icon={faHome}/><Link className="nav-item" to="/" exact>Home</Link></li>
          <li className="menu-item"><FontAwesomeIcon icon={faAddressCard}/><Link className="nav-item" to="/about">About</Link></li>
          <li className="menu-item"><FontAwesomeIcon icon={faProjectDiagram}/><Link className="nav-item" to="/projects">Projects</Link></li>
          {/* <li className="menu-item"><FontAwesomeIcon icon={faHome}/><Link className="nav-item" to="/photography">Photography</Link></li> */}
        </ol>

        <div className="logos">
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="outset" icon="linkedin" iconColor="rgba(33,31,31,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="19%" url="https://www.linkedin.com/in/adisriv/" size="30" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="outset" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(33,31,31,1)" iconSize="10" roundness="50%" url="https://github.com/adisriv" size="30" />
          <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="2" borderStyle="outset" icon="medium" iconColor="rgba(33,31,31,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="22%" url="https://medium.com/@adisriv" size="30" />
        </div>

    </nav>
  

  );
};

export default NavBar;
