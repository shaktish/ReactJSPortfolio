import React, {useState} from 'react';

const Bio = () => {
    const [expandBio, expandHandler] = useState(false);
    return (
        <section className={'Bio section mt-30'}>
            {expandBio ?
             <p className="mb-10">I have been into Web Application Development & Cross-Platform Mobile. I would like to deliver the consumer a unique and enjoyable experience with the latest stack. <br/> (Preferably React JS)
             </p>  
             :  
             <p className="mb-10">I  have been into Web Application Development & Cross-Platform Mobile... </p> }
            
            <button className={'button gray mt-10'} onClick={()=>{expandHandler(!expandBio)}}>{expandBio ? 'Show less' : 'Read more' }</button>
        </section>
    );
}

export default Bio;
