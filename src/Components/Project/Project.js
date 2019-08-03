import React from 'react';
import '../Project/Project.css';

const Project = (props) => {
    const {title, description, image, link} = props.project;
    return (
        <div className="card">         
            <h2>{title}</h2>
            <p className="mb-10">{description}</p>
            <img src={image} alt={title} className="img-responsive"/> 
            
            <a href={link} className="button button-border black fweight600 mt-15 link-block" target="_blank" rel="noopener noreferrer">Github Link</a>
        </div>
    )
}

export default Project;