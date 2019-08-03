import React from 'react';
import classes from './Score.module.css';

const Score = (props) => {
    let recordContent;    
    console.log(props, 'from props score .js')
    props.isNewRecord ? recordContent = 'Current Score : ' : recordContent = 'Best Score : ';
    // console.log(props);
    return (
        <section className="mb-20">
            <h4 >{recordContent} <span className={props.isNewRecord ? classes.NewScoreStyle : null }> {props.record}</span></h4>
            
            <div className={['d-flex', 'justify-content-center', 'align-items-center mb-10', classes['score-card']].join(' ')} >                
            <p  style={{padding:'10px'}}><strong>{props.score}</strong> correct  {props.score === 1 ? 'Guess' : 'Guesses' }</p>               
            </div>
            {props.remaining === 0 ? null : <p  style={{marginBottom:'5px'}}><strong>{props.remaining}</strong> Remaining</p> }
                        
        </section>
    )
}

export default Score