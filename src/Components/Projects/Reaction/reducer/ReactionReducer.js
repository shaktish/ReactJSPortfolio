import {REACTION_OBJECTS} from '../Action/ActionType';

const REACTION_TYPES = REACTION_OBJECTS.map(REACTION_OBJECT => REACTION_OBJECT.type);


const ReactionReducer = (state = {}, action) => {

    if(REACTION_TYPES.includes(action.type)) {
        
        const {messageId} = action.item;
        const messageReaction = state[messageId];
        
        // debugger;
        let UpdatedReaction = {...state};

        if(messageReaction) {
            // const checkIfEmojiIsAlreadyThere = state[messageId].every(el=>{
            //     return el.emoji !== action.item.emoji;                        
            // })
            // checkIfEmojiIsAlreadyThere ? UpdatedReaction[messageId] = [...state[messageId].concat(action.item)] : UpdatedReaction[messageId] = [...state[messageId]];
            UpdatedReaction[messageId] = [...state[messageId].concat(action.item)]
            return UpdatedReaction;   
        } else {
            return {...state, [messageId] : [action.item]}                                            
        }
        
    } else {
        return state;
    }
}

export default ReactionReducer;
