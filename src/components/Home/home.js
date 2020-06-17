import React from 'react';
import Typing from 'react-typing-animation';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import './style.scss';


const Home = (props) => {
  return (
    <div className="intro">
      <div className="name">
        <div className="intro-1">Hi, my name is...</div>
        <Typing speed={75}>
          <div className="intro-2">Aditya Srivastava.</div>
          <div className="intro-3">I enjoy coding simple solutions to complex problems.</div>
          <div className="intro-4">I am a software engineer, who is interested in software development roles in a variety of industries. Please reach out if you would like to discuss projects, roles, and/or open positions!
          </div>
        </Typing>
      </div>
      <div className="logos">
        <div className="logo1">
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="linkedin" iconColor="rgba(33,31,31,1)" backgroundColor="rgba(255,255,255,1)" iconSize="3" roundness="19%" url="https://www.linkedin.com/in/adisriv/" size="30" />      
        </div>
        <div className="logo2">
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(33,31,31,1)" iconSize="10" roundness="50%" url="https://github.com/adisriv" size="30" />
        </div>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="outset" icon="medium" iconColor="rgba(33,31,31,1)" backgroundColor="rgba(255,255,255,1)" iconSize="4" roundness="22%" url="https://medium.com/@adisriv" size="30" />
      </div>
    </div>
  );
};

export default Home;
