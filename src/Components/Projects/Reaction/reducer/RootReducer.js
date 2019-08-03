import {combineReducers} from 'redux';
import MessageReducer from './MessageReducer';
import UserNameReducer from './UserNameReducer';
import ReactionReducer from './ReactionReducer';

const RootReducer =  combineReducers ({
    MessageReducer : MessageReducer,
    UserNameReducer : UserNameReducer,
    ReactionReducer : ReactionReducer
})

export default RootReducer;
