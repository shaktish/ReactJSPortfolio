import {
    SuccessFetchDeckCards,
    ErrorFetchDeckCards,
    SuccessNextCardFetchDeckCards,
    EnableLoader, 
    DisableLoader,
    DisableBtnIsTrue,
    DisableBtnIsFalse} from '../ActionType/ActionType';

const initState = {
    deck_id : null,
    remaining : 0,
    loader : false,
    ErrorFetchDeckCardsStatus : false,    
    btnDisabled : false
}

const DeckOfCardsReducer = (state = initState, action) => {

    switch(action.type) {    
        case SuccessFetchDeckCards : 
        let {deck_id} = action.data;
            return {
                ...state,    
                remaining : action.data.remaining,
                deck_id
            }   
        case ErrorFetchDeckCards :          
            return {
                ...state,    
                ErrorFetchDeckCardsStatus : true,
                ErrorFetchDeckCardsMsg : action.data
            }  
        case SuccessNextCardFetchDeckCards : 
            let {cards} = action.payload                
            return {
                ...state,
                remaining : action.payload.remaining,
                cards,
            }
        case EnableLoader :             
            return {
                ...state,    
                loader : true
            } 
        case DisableLoader :             
            return {
                ...state,    
                loader : false
            } 
        case DisableBtnIsTrue  : 
            return {
                ...state,
                btnDisabled : true
            }
        case DisableBtnIsFalse  : 
            return {
                ...state,
                btnDisabled : false
            }
        default : return state      
    }
}

export default DeckOfCardsReducer;