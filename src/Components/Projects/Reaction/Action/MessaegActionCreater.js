import {NEW_MSG} from '../Action/ActionType';
import uuid from 'uuid';

const MessageActionCreator = ({text, username}) => {
    return {
        type : NEW_MSG,
        item : {
                timestamp: Date.now(),
                id : uuid(),
                username : username, 
                text  
               }
    }
}


export default MessageActionCreator;