import React from 'react';
import '../Project/Project.css';
import {NavLink} from 'react-router-dom'


const Project = (props) => {
    const {title, description, image, link, navLinkUrl, buttonText} = props.project;
    return (
        <div className="card">         
            <h2>{title}</h2>
            <p className="mb-10">{description}</p>
            <img src={image} alt={title} className="img-responsive card-image"/> 
            <div className='links-wrap'>
                <a href={link} className="button button-border black fweight600 mt-15 link-block" target="_blank" rel="noopener noreferrer">Github Link</a>
                <NavLink className="button button-border black fweight600 mt-15 link-block" to={navLinkUrl}>{buttonText}</NavLink>
            </div>
            
            
            
        </div>
    )
}

export default Project;