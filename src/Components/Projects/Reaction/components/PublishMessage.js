import React from 'react';
import {PubSubContext} from '../pubsub';
import MessageActionCreator from '../Action/MessaegActionCreater';
import {connect} from 'react-redux';


class PublishMessage extends React.Component {
    state= {
        text: ''
    }

    textHandler = (e) => {
        this.setState({
            text : e.target.value
        })
    }

    enterKeyHandler = (e) => {
        if(e.key === 'Enter') {           
            this.context.pubsub.publish(MessageActionCreator({text : this.state.text, username : this.props.username}))
        }
    }

    validation = () => {
        if (this.state.text === "") {
            alert('Please enter your message')
            return false 
        } else {
            return true
        }

        
    }

    submitHandler=() => {
        let validate = this.validation()
        if(validate) {
            this.context.pubsub.publish(MessageActionCreator({text : this.state.text, username :  this.props.username === null || "" ? 'Anonymous' :  this.props.username }))
        }
        //



        
    }
    
    render () {
        // console.log(this.props, 'this.props from publish message');
        return (
            <div style={{marginTop:'30px'}}>
                <h3 className="mb-0">Got something to say?</h3>
                <input 
                    type="text"
                    className="input"
                    onChange={this.textHandler}
                    value={this.state.text}
                    placeholder="Type your text"
                    onKeyPress={this.enterKeyHandler}
                    />
                <input type="button" className="button gray mt-10" onClick={this.submitHandler} value="Publish" />
            </div>
        )
    }

    static contextType = PubSubContext;
}

const mapStateToProps = (state) => {
    const {UserNameReducer} = state
    return UserNameReducer
}

const connectorComponent = connect(mapStateToProps);

export default connectorComponent(PublishMessage);