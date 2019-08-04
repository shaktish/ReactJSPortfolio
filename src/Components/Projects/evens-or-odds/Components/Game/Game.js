import React from 'react';
import {connect} from 'react-redux';

// ACTION_CREATORS 
import {FetchDeckOfCardsActionCreators} from '../../Redux/ActionCreators/FetchDeckOfCardsActionCreators'
import {StartGameActionCreator, StopGameActionCreator} from '../../Redux/ActionCreators/SettingsActionCreator';

// COMPONENTS
import Instructions from '../Instructions/Instructions';
import DrawNextCard from '../DrawNextCard/DrawNextCard';
import { ResetScoreActionCreator } from '../../Redux/ActionCreators/ResetScoreActionCreator';

class Game extends React.Component {
    startGameLocalInit = () => {
        this.props.startGameHelper();  
        this.props.FetchDeckOfCardsHelper();      
    }

    stopGameHandler = () => {
        this.props.ResetScoreHelper();
        this.props.stopGameHelper();
    }
    render() {
        //console.log(this.props.DeckOfCardsHelper)
        console.log(this.props, 'PROPS FROM GAME.JS');

        let gameContent;

        if (this.props.GameSettingHelper.gameIsOn) {            
            gameContent = <React.Fragment>
                <section>
                    <p className={'mb-10'}>The Game is ON!</p>                        
                    <DrawNextCard />
                    <hr />          
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button  
                            className="button gray"
                            style={{marginRight:'15px'}}
                            onClick={this.props.ResetScoreHelper}> 
                            Reset Score
                        </button>

                        <button  
                            className="button gray"
                            onClick={this.stopGameHandler}> 
                            {this.props.DeckOfCardsHelper.remaining === 0 ? 'Play again' : 'Cancel Game' } 
                        </button>
                    </div>                   
                </section>
             </React.Fragment>
        } else {
            gameContent = <React.Fragment>
                <section>
                    <p className="mb-10">A New Game Awaits</p>
                    <button className="button gray" onClick={this.startGameLocalInit}>Start Game</button>
                </section>
                <Instructions />
            </React.Fragment>
        }
        return (
            <div style={{marginTop:'20px'}}>
                <h1>Evens or Odds</h1>   
                {this.props.DeckOfCardsHelper.ErrorFetchDeckCardsStatus ?
                 <p>Looks like there was a problem in getting cards.  Status Code: {this.props.DeckOfCardsHelper.ErrorFetchDeckCardsMsg} </p>
                : null}             
                {this.props.DeckOfCardsHelper.loader &&  !this.props.DeckOfCardsHelper.ErrorFetchDeckCardsStatus ? <div>Loading...</div> : null}
                {this.props.DeckOfCardsHelper.loader ? null : gameContent }                
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    //console.log(state, 'STATE FROM GAME.JS');    
    return {
        GameSettingHelper : state.GameSettingReducer,
        DeckOfCardsHelper: state.DeckOfCardsReducer
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        startGameHelper : () => {dispatch(StartGameActionCreator())},
        stopGameHelper : () => {dispatch(StopGameActionCreator())},
        //FetchDeckOfCardsHelper : () => {FetchDeckOfCardsActionCreators(dispatch)}
        FetchDeckOfCardsHelper : () => {dispatch(FetchDeckOfCardsActionCreators())},
        ResetScoreHelper : () => {dispatch(ResetScoreActionCreator())}
    }    
}

const connectorComponent = connect(mapStateToProps, mapDisptachToProps);


export default connectorComponent(Game); 