import React from 'react';
import './style.scss';

const Work = (props) => {
  return (
    <div>
      <div><h2 className="work">Work Experience</h2></div>
      <div className="timeline">
        <div className="timeline__event animated fadeInUp delay-2s timeline__event--type1">
          <div className="timeline__event__icon">
            <i className="lni-burger" />
            <div className="timeline__event__date">
              Dartmouth Machine Learning Lab
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              ML/AI Undergraduate Researcher
            </div>
            <div className="timeline__event__description">
              <p>June 2019 | Present</p>
            </div>
          </div>
        </div>
        <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type2">
          <div className="timeline__event__icon ">
            <i className="lni-cake" />
            <div className="timeline__event__date">
              Better Life Partners
            </div>
          </div>
          <div className="timeline__event__content ">
            <div className="timeline__event__title">
              Software Engineering Intern
            </div>
            <div className="timeline__event__description">
              <p>May 2019 | September 2019</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
          <div className="timeline__event__icon">
            <i className="lni-slim" />
            <div className="timeline__event__date">
              Dartmouth COSC
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              CS50: Software Design & Implementation Teaching Assistant
            </div>
            <div className="timeline__event__description">
              <p>June 2018 | Present</p>
            </div>

          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type4">
          <div className="timeline__event__icon">
            <i className="lni-cake" />
            <div className="timeline__event__date">
              Kline Hill Partners
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Private Equity Secondaries Intern
            </div>
            <div className="timeline__event__description">
              <p>January 2019 | March 2019</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type5">
          <div className="timeline__event__icon">
            <i className="lni-cake" />
            <div className="timeline__event__date">
              OTR Global
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Quantitative Investment Research Intern
            </div>
            <div className="timeline__event__description">
              <p>March 2018 | June 2019</p>
            </div>
          </div>
        </div>
        <div className="timeline__event animated fadeInUp timeline__event--type6">
          <div className="timeline__event__icon">
            <i className="lni-cake" />
            <div className="timeline__event__date">
              Tuck School of Business
            </div>
          </div>
          <div className="timeline__event__content">
            <div className="timeline__event__title">
              Research Intern
            </div>
            <div className="timeline__event__description">
              <p>February 2017 | June 2018</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
