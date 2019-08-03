import React from 'react';
import './Avatar.css';

const Avatar = (props) => {
    return (
        <div className="Avatar-img-wrapper  Avatar-shadow">
            <img src={props.imgSrc}  alt={props.imgName} className='Avatar-img mb-20'/>
        </div>
    );
}

export default Avatar;