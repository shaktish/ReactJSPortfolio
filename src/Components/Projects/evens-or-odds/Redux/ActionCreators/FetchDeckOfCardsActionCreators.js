import {SuccessFetchDeckCards, ErrorFetchDeckCards} from '../ActionType/ActionType';
import {apiWrapper} from '../../API/Api';

import {EnableLoaderActionCreator, DisableLoaderActionCreator} from './LoaderActionCreator'

const SuccessFetchDeckOfCardsActionCreator = (data) => {
    return {
        type: SuccessFetchDeckCards,
        data : data
    }
}

const ErrorFetchDeckOfCardsActionCreator = (data) => {
    return {
        type: ErrorFetchDeckCards,
        data : data
    }
}


export const FetchDeckOfCardsActionCreators = () => (dispatch) => {
    // INITALIZE LOADER
    dispatch(EnableLoaderActionCreator());

    // FETCH DECKOFCARDS API
    return fetch(apiWrapper)
        .then(response=>{
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return dispatch(ErrorFetchDeckOfCardsActionCreator(response.status));
                
              } else {
                return response.json().then(data => { 
                    //console.log(data, '\n RESPONSE -> FETCH DECK OF CARDS');
                    dispatch(DisableLoaderActionCreator());
                    return dispatch(SuccessFetchDeckOfCardsActionCreator(data));                    
                }) 
              }
              
        }).catch(function(err) {
            console.log('Fetch Error :-S', err);
        });        
}