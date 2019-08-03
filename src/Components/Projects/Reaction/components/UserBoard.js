import React from 'react';
import setUserNameActionCreator from '../Action/SetUserNameActionCreator';
import {connect} from 'react-redux';

class UserBoard extends React.Component {

    render () {
        // console.log(this.props, 'this props from userboard')
        return(
            <div>
                <h3>Username</h3>
                <input type="text" className="input" placeholder="Enter your name" onChange={(e)=>{ this.props.setUserName(e.target.value)}} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUserName : (user) => {dispatch(setUserNameActionCreator(user))}
    }
}

const connectorComponent = connect(mapStateToProps, mapDispatchToProps)

export default connectorComponent(UserBoard);