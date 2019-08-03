import uuid from 'uuid';

const ReactionObjectActionCreator = ({type, emoji, username, messageId} ) => {
    return {
        type,
        item : {id : uuid(), timestamp : Date.now(), emoji, username, messageId}
    }
}


export default ReactionObjectActionCreator;