import {
    StartGame, 
    StopGame, 
    instructionsExpanded, 
    instructionsCollapsed,

    } from '../ActionType/ActionType';

const initState = {
    gameIsOn : false,
    instructionsCollapsed : true,
}

const GameSettingsReducer = (state = initState, action) => {

    switch(action.type) {
        case StartGame : 
            return {
                ...state,
                gameIsOn : true
            }
        case StopGame :
            return {
                ...state,
                gameIsOn : false
            }
        case instructionsExpanded :
            return {
                ...state,
                instructionsCollapsed : false
            }
        case instructionsCollapsed :
            return {
                ...state,
                instructionsCollapsed : true
            }
              
        default : return state      
    }
}

export default GameSettingsReducer;