import React from 'react';
import classes from './Artist.module.css'

const Artist = ({artist}) => {
    if(!artist) return null;
    return (
        <div style={{marginTop:'20px'}}>
            {artist.images.length > 0 ? <img src={artist.images && artist.images[0].url} alt={artist.name} style={{boxShadow:'0 3px 4px 1px rgba(0,0,0,0.4)',objectFit:'cover', width:'200px', height:'200px', borderRadius:'100%', marginTop:'20px'}}/> : null }
            <h3 style={{margin:'15px 0'}}>{artist.name}</h3>
            <p className={classes.Follwers}>{artist.followers.total} followers</p>
            <h6>{artist.genres.map(el=>{return el+', '})}</h6>                        
        </div>
    )
}

export default Artist;