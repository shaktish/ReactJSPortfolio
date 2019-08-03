import React from 'react';
import {connect} from 'react-redux';
import {instructionsExpanded, instructionsCollapsed} from '../../Redux/ActionType/ActionType';

const Instructions = (props) => {
    // console.log(props, 'from Instruction js after connect to redux state')

    let instructionsContent;

    if(props.GameSettingReducer.instructionsCollapsed) {
        instructionsContent = <div><p className="mb-10">Welcome to evens or odds. The game goes like this...</p>
        <button className="button gray" onClick={props.InstructionExpander}>Read more</button></div>;            
    } else {
        instructionsContent = <div>
        <p className="mb-10">Welcome to evens or odds. The game goes like this</p>
        <p className="mb-10">The deck is shuffled. Then Choose: will the next card be even or odd ?</p>
        <p className="mb-10">Make a choice on every draw, and se how many you get right!</p>

        <button className='button gray' onClick={props.InstructionCollapser}>Show Less</button></div>;   
    }
    return (
        <section>
            <h3>Instructions</h3>
            {instructionsContent}
            
        </section>
    );
}

const mapStateToProps = (state) => {    
    return {
        GameSettingReducer : state.GameSettingReducer
    }
}

const mapDisptachToProps = (dispatch)=>{
    return {
        InstructionExpander : ()=>{dispatch({type:instructionsExpanded})},
        InstructionCollapser : ()=>{dispatch({type:instructionsCollapsed})}
    }
}

const componentConnector = connect(mapStateToProps, mapDisptachToProps);

export default componentConnector(Instructions);