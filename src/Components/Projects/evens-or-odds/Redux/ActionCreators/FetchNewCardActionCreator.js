import {drawNextCardApiWrapper} from '../../API/Api';
import {SuccessNextCardFetchDeckCards, DisableBtnIsTrue, DisableBtnIsFalse} from '../ActionType/ActionType';

const SuccessFetchNextCardActionCreator = (data) => {
    // console.log(data);
    return {
        type : SuccessNextCardFetchDeckCards,
        payload : data 
    }
}

const EnableDrawCardBtn = () => {
    return {
        type : DisableBtnIsTrue
    }
}

const DisableDrawCardBtn = () => {
    return {
        type : DisableBtnIsFalse
    }
}

export const FetchNextCardActionCreator = (id) =>  (dispatch) => {
    dispatch(EnableDrawCardBtn());
    return fetch(drawNextCardApiWrapper + id + '/draw/?count=1')
        .then((response)=>{
            if(response.status !== 200) {
                console.log('Error', response.status)
            } else {
                return response.json()
                .then((json)=>{
                    dispatch(SuccessFetchNextCardActionCreator(json));    
                    dispatch(DisableDrawCardBtn());                
                })
            }
            
        })
}