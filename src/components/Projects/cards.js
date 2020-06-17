import React from 'react';
import './style2.scss';
import { FaGithub,FaPython } from "react-icons/fa";
import { DiMongodb,DiFirebase,DiNodejsSmall,DiReact,DiApple,DiNpm,DiSass } from "react-icons/di";
import { BsFillForwardFill,BsLink45Deg } from "react-icons/bs";
import { GrServerCluster,GrHeroku } from "react-icons/gr";
import { IconContext } from "react-icons";
   
const Cards = (props) => {
      return (
        <div class="cards-container">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '150px' }} src="https://adisriv-website.s3.us-east-2.amazonaws.com/IMG_8947.jpg" alt="Winged" />
            </div>
          </header>
      
          <h3>Winged: Dating</h3>
          <div class="desc">
            Virtual dating mobile app to match with people available at the same day and time as you.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://apps.apple.com/us/app/winged-dating/id1507607706"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/frontend-winged"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <DiReact/>
            <DiNodejsSmall/>
            <DiMongodb/>
            <DiFirebase/>
            <GrHeroku/>
            <DiApple/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '100px' }} src="https://rlv.zcache.com/fake_news_logo_politically_incorrect_classic_round_sticker-r594e3acc6ca34ef1ac8c00f57e1adef0_0ugmp_8byvr_704.jpg" alt="Winged" />
            </div>
          </header>
      
          <h3>New Content Analyzer</h3>
          <div class="desc">
          Algorithm tells you if an unread article contains new information that is not covered by a read articles dataset.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://github.com/adisriv/NewContentAnalyzer"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/NewContentAnalyzer"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <FaPython/>
            <DiNpm/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '120px' }} src="https://connecticut.cbslocal.com/wp-content/uploads/sites/15909867/2012/07/stagetheater.jpg?w=420" alt="Winged" />
            </div>
          </header>
      
          <h3>TheaterMade</h3>
          <div class="desc">
            Fundraising and Social platform for local theater productions and professionals to produce their play.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://theatermade.surge.sh/"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/project-theatermade"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <DiReact/>
            <DiNodejsSmall/>
            <DiMongodb/>
            <GrHeroku/>
            <DiSass/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '150px' }} src="https://freesvg.org/img/simplemaze.png" alt="Winged" />
            </div>
          </header>
      
          <h3>Maze Solver</h3>
          <div class="desc">
          The maze challenge program is a client that solves mazes produced by the Dartmouth CS server.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://github.com/adisriv/MazeSimulation"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/MazeSimulation"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <FaPython/>
            <GrServerCluster/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '220px' }} src="https://images.immediate.co.uk/production/volatile/sites/4/2019/10/GettyImages-460712793-769fd3a.jpg?quality=90&crop=4px%2C37px%2C931px%2C401px&resize=931%2C396" alt="Winged" />
            </div>
          </header>
      
          <h3>Gravity Simulator</h3>
          <div class="desc">
          Simulator that animates motion of stars, planets, or moons of out solar system.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://github.com/adisriv/Gravity-Simulator"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/Gravity-Simulator"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <FaPython/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

        <div class="card card-one">
          <header>
            <div class="avatar">
              <img style={{width: '150px' }} src="https://tr1.cbsistatic.com/hub/i/r/2019/07/12/f01acf64-9e40-48ae-936f-42f26a6d1312/resize/1200x900/cf669956fcd038ed5a911a301c2c4a62/stickynotes-istock-497284431-xmee.jpg" alt="Winged" />
            </div>
          </header>
      
          <h3>Post-It Notes</h3>
          <div class="desc">
          Real-time sticky note editor web application that allows deletion, expansion, and movement of note.
          </div>
          <div class="contacts">
          <IconContext.Provider value={{ size: '2em' }}>
          <a href="https://aditya-cs52-lab3.surge.sh/"><BsLink45Deg/></a>
          <a href="https://github.com/adisriv/Post-It-Notes"><FaGithub/></a>
          <a href=""><BsFillForwardFill/></a>
          </IconContext.Provider>
            <div class="clear"></div>
          </div>
      
          <footer>
            <IconContext.Provider value={{ size: '2em' }}>
            <DiReact/>
            <DiNodejsSmall/>
            <DiFirebase/>
            <DiSass/>
            </IconContext.Provider>
          </footer>
        </div>
        <div class="clear"></div>

      </div>
      );
    }

  
export default Cards;