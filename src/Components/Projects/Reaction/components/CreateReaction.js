import React from 'react';
import {PubSubContext} from '../pubsub';

import {REACTION_OBJECTS} from '../Action/ActionType';
import ReactionObjectActionCreator from '../Action/ReactionObjectActionCreator';
import {connect} from 'react-redux';

class CreateReaction extends React.Component {    
    publishReaction = ({type, emoji }) => {
        const {username} = this.props.UserNameReducer
        const {messageId} = this.props
        this.context.pubsub.publish(ReactionObjectActionCreator({type, emoji, username, messageId }));
    }
    render(){
        return (
            <div>
                {REACTION_OBJECTS.map((reaction)=>{
                    const {type, emoji} = reaction
                    return <span 
                                style={{marginLeft:'6px', cursor : 'pointer'}} 
                                key={type}
                                onClick={()=>{this.publishReaction({type, emoji})}}
                            > {emoji} </span>
                })}
            </div>
        );
    }

    static contextType = PubSubContext
}
const mapStateToProps = (state) => {
    return {
        UserNameReducer : state.UserNameReducer
    }
}

const connectorComponent = connect(mapStateToProps)

export default connectorComponent(CreateReaction);