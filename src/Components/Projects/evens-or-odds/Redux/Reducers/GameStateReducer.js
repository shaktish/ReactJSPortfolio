import {
    EvenActionType,
    OddActionType,
    SuccessNextCardFetchDeckCards,
    ResetScore

} from '../ActionType/ActionType';


const initState = {
    userChoice : null,
    score : 0,    
}
    
const GameStateReducer = (state = initState, action) => {

    switch(action.type) {
        case EvenActionType :
            return {
                ...state,
                userChoice : 'even'
            }      
        case OddActionType :
            return {
                ...state,
                userChoice : 'odd'
            }    

        case SuccessNextCardFetchDeckCards :                
            let cardValueType = window.parseInt(action.payload.cards[0].value, 10) % 2 === 0 ? 'even' : 'odd' ;
            if(state.userChoice === cardValueType) {                
                return {
                    ...state,
                    score : state.score + 1
                }
            } else {
                return state 
            }
        case  ResetScore : 
            return {
                ...state,
                score : 0
            }        
               
        default : return state      
    }
}

export default GameStateReducer;