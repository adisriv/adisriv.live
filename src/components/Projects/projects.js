import React from 'react';
import Cards from './cards';
import './style.scss';


 function Layout(props){
  return(
      <div className="projectslist">{props.children}</div>
    )
}

const Projects = (props) => {
  return (
    <Layout children={<Cards/>} />
    
  );
};

export default Projects;
