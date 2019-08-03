import React from 'react';
import {connect} from 'react-redux';
import CreateReaction from '../components/CreateReaction';

const MessagesReaction = ({messageReaction}) => {    
    
    if(!messageReaction) return null;

    return (    
        messageReaction.map((reaction, i) => {
            const {username, id, emoji} = reaction;
            //console.log(messageReaction.length - 1)
            return (
                <div key={id}>
                    <span>{username}</span>
                    <span> {emoji}</span>                    
                    {i === messageReaction.length - 1 ? null : <span>, &nbsp;</span>}
                </div>                                
            )
        })
    )
}

const MessageBoard = (props) => {
    // console.log(props, 'props from messageboards.js')
    console.log(props.MessageReducer, 'messageReducer')
    return (
        <div style={{marginTop:'20px'}}>
            {props.MessageReducer.items.length > 0 ? <h2>Messages</h2> : null }
            {props.MessageReducer.items.reverse().map(( item )=>{
                
                const {text, id, timestamp, username} = item;
                return (
                    <div key={id} style={{marginBottom:'30px'}}>
                        <p>{text}</p>                     
                        <div>   
                            <p className="mb-0">- {username}</p>                        
                        </div>
                        <p className="small" style={{marginLeft:'10px'}}>{new Date(timestamp).toLocaleString()}</p>
                        <hr className="mb-10" />
                        <CreateReaction messageId = {id}/>
                        <div style={{display:'flex', justifyContent: 'center', marginTop:10, flexWrap:'wrap'}}>
                            <MessagesReaction messageReaction={props.ReactionReducer[id]} />                            
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
const mapStateToProps = (state) => {
    const {MessageReducer,ReactionReducer} = state;
    // console.log(state, 'mesasgeboard state');
    return {
        MessageReducer,
        ReactionReducer
    }
}

// const mapDispatchToProps = (dispatch) => {

// }

const connectorComponent = connect(mapStateToProps);

export default connectorComponent(MessageBoard);