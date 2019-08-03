import {NEW_MSG} from '../Action/ActionType';

const initState = {
    init : 'INIT',
    //items : [{username: 'Shaktish',id: "superman01", text: "Testing World", timestamp: 1563118261211}]
    items : []

    
}

const MessageReducer = (state = initState, action) => {
    //console.log(action, 'action from msg red')
    switch(action.type) {
        case NEW_MSG : 
        
        return {
            ...state,
            items : [...state.items, action.item]
        }
        default : return state
    }
}

export default MessageReducer;
