import React from 'react';
import './style.scss';

// this is a fallback page if the user ends up at a faulty url - albeit to a nice surprise :)
const EasterEgg = (props) => {
  return (
    <div>
      <div className="spaceships">
        <div className="spaceships__head" />
        <div className="spaceships__body" />
        <div className="spaceships__foot" />
        <div className="alien">
          <div className="alien__body">
            <div className="alien__ear">
              <div className="alien__eye" />
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <p>Page Does Not Exist</p>
      </div>
    </div>
  );
};

export default EasterEgg;
