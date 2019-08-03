import {NEW_USER} from './ActionType';

const setUserNameActionCreator = (user) => {
    return {
        type : NEW_USER,      
        payload : user  
    }
}

export default setUserNameActionCreator;