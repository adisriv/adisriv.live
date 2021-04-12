import React from 'react';
import './about.scss';

function About() {
  return (
    <div className="page">
        <div id="LineTime">
            <div className="container-fluid">

                <div className="row timeline-centered">
                    <div className="col-md-12 timelineMAIN-title">
                        <ul className="timeline timeline-centered">
                            <li className="timeline-item">
                                <div className="timeline-info">
                                    <span>August 2020</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Discover Financial Services</h3>
                                    <p>Software Engineering</p>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-info">
                                    <span>June 2019</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Better Life Partners</h3>
                                    <p>Software Engineering Intern</p>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-info">
                                    <span>January 2019</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Kline Hill Partners</h3>
                                    <p>Private Equity Secondaries Intern</p>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-info">
                                    <span>June 2018</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">Teaching Assistant Department of Computer Science</h3>
                                    <p>CS50: Software Design & Implementation</p>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-info">
                                    <span>March 2018</span>
                                </div>
                                <div className="timeline-marker"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">OTR Global</h3>
                                    <p>Quantitative Investment Research Intern</p>
                                </div>
                            </li>
                            <li className="timeline-item period">
                                <div className="timeline-marker"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};


export default About;
