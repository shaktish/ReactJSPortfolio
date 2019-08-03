import React from 'react';
import Project from '../Project/Project';
import {projectList} from '../../Data/Data';

import '../Projects/Projects.css';

class Projects extends React.Component {    
    render () {
        const projects = projectList.map((projectEl)=>{
            return (
                <Project 
                    key ={projectEl.title}
                   project = {projectEl}
                />
            );
        });
        return (
            <>
                <h1 className="mb-20">Featured Projects in React JS</h1>
                <div className='Projects mb-20'>
                    {projects}
                </div>  
                
            </>
          
        );
    }
}

export default Projects;