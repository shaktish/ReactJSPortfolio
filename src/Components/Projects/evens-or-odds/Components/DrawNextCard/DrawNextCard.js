import React from 'react'; 
import {connect} from 'react-redux';
import { FetchNextCardActionCreator } from '../../Redux/ActionCreators/FetchNewCardActionCreator';
import {EvenActiveActionCreator, OddActiveActionCreator} from '../../Redux/ActionCreators/SettingsActionCreator';
import {ResetScoreActionCreator} from '../../Redux/ActionCreators/ResetScoreActionCreator';

import EvenOrOdd from '../EvenOrOdd/EvenOrOdd';
import Score from '../Score/Score';

const correctGuessRecordKey = 'CORREC_GUESS_RECORD_KEY';
// localStorage.setItem(correctGuessRecordKey, 0 );
const checkRecord = (correctGuesses) => {
    
    const record = Number(localStorage.getItem(correctGuessRecordKey)); 
    console.log(record, 'record')
    console.log(correctGuesses, 'correctGuesses')
    if(correctGuesses >= record ) {
        localStorage.setItem(correctGuessRecordKey, correctGuesses );
        console.log('New record')
        return {record : correctGuesses, isNewRecord : true}
    } else {
        console.log('else part')
        return {record, isNewRecord : false}
    }
}



class DrawNextCard extends React.Component { 

    state = {
        isOddActive : false,
        isEvenActive : false,
        btnDisabled : false,
    }

    oddToggler = () => {
        this.setState({
            isOddActive : true,
            isEvenActive : false
        });
        this.props.OddActiveStateHelper();
    }
    
    evenToggler = () => {        
        this.setState({
            isOddActive : false,
            isEvenActive : true
        });
        this.props.EvenActiveStateHelper();
    }

    ResetScore = () => {
        localStorage.setItem(correctGuessRecordKey, 0 );
        this.props.ResetScoreHelper();
    }

    DrawNextCardHandler = () => {
        this.props.DrawNextCardHelper(this.props.DeckOfCardsReducerHelper.deck_id)
    }
    
    render(){
        //console.log(this.props, 'drawnextcard this.props')    
        let card;
        if(this.props.DeckOfCardsReducerHelper.cards) {
            let{image, suit, value} = this.props.DeckOfCardsReducerHelper.cards[0];
            card = 
            <section className="mb-20">
                <h3>{value} of {suit}</h3>
                <img src={image} alt={suit} style={{maxWidth:'120px'}}/>
            </section>            
        }

        let {record, isNewRecord} = checkRecord(this.props.GameStateReducerHelper.score)
        console.log(isNewRecord);

        const remaningCards = this.props.DeckOfCardsReducerHelper.remaining;

        let Gamecontent; 
        
        if(remaningCards === 0) {
            Gamecontent = 
            <div>
                 <h3>You Scored {this.props.GameStateReducerHelper.score} !!</h3>
            </div>
        } else {
            Gamecontent =  <div>
                <EvenOrOdd 
                    oddToggler={this.oddToggler}
                    evenToggler={this.evenToggler}
                    oddClass={this.state.isOddActive ? true : false}
                    evenClass={this.state.isEvenActive ? true : false}
                />
                {this.state.isEvenActive || this.state.isOddActive ? 
                <>
                
                {card}
                <button className="button button-border black fweight600" disabled={this.props.DeckOfCardsReducerHelper.btnDisabled} onClick={(e)=>{this.DrawNextCardHandler()}}> {this.props.DeckOfCardsReducerHelper.remaining <= 51 ? 'Draw the next card' : 'Draw the card' }</button>
                <br />
                <br />
                <button className="button gray" onClick={this.ResetScore}>Reset Score</button>
                </>  : null }     
               
            </div>
        }
        return (
            <div>

                <Score                
                    remaining = {this.props.DeckOfCardsReducerHelper.remaining }
                    score= {this.props.GameStateReducerHelper.score}
                    record = {record}
                    isNewRecord = {isNewRecord}
                />
                {Gamecontent}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state, '\n STATE FROM DRAWNEXTCARD, mapStateToProps');
    return {
        DeckOfCardsReducerHelper : state.DeckOfCardsReducer,
        GameSettingReducerHelper : state.GameSettingReducer,
        GameStateReducerHelper : state.GameStateReducer
    };
}

const mapDisptachToProps = (dispatch) => {
    return {
        DrawNextCardHelper : (id) => {dispatch(FetchNextCardActionCreator(id))},
        EvenActiveStateHelper : () =>{dispatch(EvenActiveActionCreator())},
        OddActiveStateHelper : () =>{dispatch(OddActiveActionCreator())},
        ResetScoreHelper : () => {dispatch(ResetScoreActionCreator())}
    }
}
const connectorComponent = connect(mapStateToProps, mapDisptachToProps);

export default connectorComponent(DrawNextCard);