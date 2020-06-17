import React from 'react';
import './style.scss';

const About = (props) => {
  return (
    <div>
    <div class="wrapper">
    <div class="outer-image"><img class="round-image" src="https://adisriv-website.s3.us-east-2.amazonaws.com/Screen+Shot+2020-05-15+at+5.46.30+PM.png" alt="description" height="100%"/></div>
    {/* <div class="header"></div> */}
</div>
<div id="centerpixel">
<div id="Portfolio">
<div class="inner">
    <div class="Portfolio_title">
        Aditya Srivastava <br />
        <p>Software Engineer</p>
    </div>
    <table class="portfolio_content">
        <tr>
            <td>Degree</td>
            <td class="one">:</td>
            <td>B.A. Computer Science & Economics</td>
        </tr>
        <tr >
            <td>Education</td>
            <td class="one">:</td>
            <td>Dartmouth College Class of 2020</td>
        </tr>
        <tr>
            <td>Languages</td>
            <td class="one">:</td>
            <td>Python, Java, JavaScript, C, C#, HTML, CSS</td>
        </tr>
        <tr>
            <td>Frameworks/Libraries</td>
            <td class="one">:</td>
            <td>React/React Native, Redux, Express, Node, JSON, .NET, Sci-Kit Learn</td>
        </tr>
        <tr>
            <td>Databases</td>
            <td class="one">:</td>
            <td>PostgreSQL, MongoDB</td>
        </tr>
        <tr>
            <td>Concepts</td>
            <td class="one">:</td>
            <td>Design Patterns, Data Structures, Algorithms, Git/GitHub, OOP, LaTeX</td>
        </tr>
    </table>
</div>
</div>
</div>
<div id="LineTime">
    <div class="container-fluid">

        <div class="row timeline-centered">
            <div class="col-md-12 timelineMAIN-title">
                <ul class="timeline timeline-centered">
                    <li class="timeline-item">
                        <div class="timeline-info">
                            <span>June 2019</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Better Life Partners</h3>
                            <p>Software Engineering Intern</p>
                        </div>
                    </li>
                    <li class="timeline-item">
                        <div class="timeline-info">
                            <span>January 2019</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Kline Hill Partners</h3>
                            <p>Private Equity Secondaries Intern</p>
                        </div>
                    </li>
                    <li class="timeline-item">
                        <div class="timeline-info">
                            <span>June 2018</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">Teaching Assistant Department of Computer Science</h3>
                            <p>CS50: Software Design & Implementation</p>
                        </div>
                    </li>
                    <li class="timeline-item">
                        <div class="timeline-info">
                            <span>March 2018</span>
                        </div>
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <h3 class="timeline-title">OTR Global</h3>
                            <p>Quantitative Investment Research Intern</p>
                        </div>
                    </li>
                    <li class="timeline-item period">
                        <div class="timeline-marker"></div>
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
