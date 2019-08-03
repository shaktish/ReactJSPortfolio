import React from 'react';
import Avatar from '../../Components/Avatar/Avatar';
import Title from '../../Components/Title/Title';

import AvatarImg from '../../Assets/Images/avatar.jpg';
import Bio from '../../Components/Bio/Bio';
import Projects from '../../Components/Projects/Projects';

class Porfolio extends React.Component {
    
    render() {
        return (
            <div>
                <Avatar imgSrc={AvatarImg}/>
                <p>I'm <span className='fweight600'>Shaktish kumar</span></p>
                <Title />
                <Bio />
                <hr />
                <Projects />
            </div>
        )
    }
    
}

export default Porfolio;
