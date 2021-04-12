import React from 'react';
import Typing from 'react-typing-animation';
import './home.scss';


function Home() {
  return (
    <div className="intro">
      <div className="name">
        <div className="intro-1">Hi there,</div>
        <Typing speed={75}>
          <div className="intro-3">I enjoy coding simple solutions to complex problems.</div>
          <div className="intro-4">I am a software engineer, who is interested in software development roles in a variety of industries. Please reach out if you would like to discuss projects, roles, and/or open positions!
          </div>
        </Typing>
      </div>
    </div>
  );
};

export default Home;
