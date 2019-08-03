import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css';

class Navbar extends React.Component {
    state = {        
        toggle : false,
        mobileView : false
    }
    NavtoggleHandler = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }

    updateDimensions = () => {
        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
            // height = w.innerHeight|| documentElement.clientHeight|| body.clientHeight;

            if(width < 768) {
                this.setState({
                    toggle:false,
                    mobileView : true
                })
            } else {
                this.setState({
                    toggle:true,
                    mobileView : false
                })
            }
    }    
    componentWillMount = () => {
        this.updateDimensions();
    }

    componentDidMount = () =>{
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateDimensions);
    }

    turnOffToggle = () => {
        this.setState({
            toggle : false
        })
    }

    NavbarView = () => {
        return (
                this.state.toggle ? <div className="Navbar">
                    <li>
                        {this.state.mobileView ? 
                            <NavLink exact={true} to="/" onClick={this.turnOffToggle}  >Home</NavLink> :
                            <NavLink exact={true} to="/"  >Home</NavLink> 
                        }                        
                    </li>
                    <li>
                        {this.state.mobileView ? 
                            <NavLink to="/music-master" onClick={this.turnOffToggle}>Music Mastero</NavLink> : 
                            <NavLink to="/music-master">Music Mastero</NavLink>
                        }                        
                    </li>
                    <li>
                        {this.state.mobileView ? 
                            <NavLink to="/evens-or-odds"  onClick={this.turnOffToggle}>Evens Or Odds</NavLink> : 
                            <NavLink to="/evens-or-odds">Evens Or Odds</NavLink>
                        }                           
                    </li>
                    <li>     
                        {this.state.mobileView ? 
                            <NavLink to="/reaction" onClick={this.turnOffToggle}>Reaction</NavLink> :
                            <NavLink to="/reaction">Reaction</NavLink>
                        }                    
                        
                    </li>
                </div>  : null 
        )
    }

    render () {        
        return (
            <div className="Navbar-block">
                {this.state.toggle ? <div onClick={this.NavtoggleHandler} className="CloseWrap"> <div className="close" ></div> </div>  : <div className="burger-wrap" onClick={this.NavtoggleHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> }
                
                
                {this.NavbarView()}                             
            </div>
        );
    }
}


export default Navbar;