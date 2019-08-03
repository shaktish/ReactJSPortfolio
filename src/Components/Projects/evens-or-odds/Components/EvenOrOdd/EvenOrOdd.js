import React from 'react';
import classes from './EvenOrOdd.module.css';

const EvenOrOdd = (props) => {
    return (
        <section>            
            <h3 >Will it be Even Or Odd</h3>
            <button 
                className={props.evenClass ? [classes.active, classes.button, classes.gray].join(' ') : [classes.button, classes.gray].join(' ')} 
                onClick={props.evenToggler}
            >Even</button>
            <button 
                className={props.oddClass ? [classes.active, classes.button, classes.gray].join(' ') : [classes.button, classes.gray].join(' ')}
                onClick={props.oddToggler}
            >Odd</button>            
        </section>
    );
}


export default EvenOrOdd;