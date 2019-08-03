import React from 'react';
import './Title.css';

const TITLES = ['a UI Developer', 'an Enthusiastic Learner', 'a Gamer'];

class Title extends React.Component {
    state = {
        titleIndex : 0,
        fadeIn : true
    }

    animateTiles = () => {
        this.titleInterval = setInterval(()=>{
            let newIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({
                titleIndex : newIndex,
                fadeIn : true
            });

            this.titleSetout  = setTimeout(()=>{
                this.setState({fadeIn: false});
            },2000);

        },4000)
    }

    componentDidMount () {
        this.titleSetout  = setTimeout(()=>{
            this.setState({fadeIn: false});
        },2000);
        this.animateTiles();
        
    }

    componentWillUnmount() {
        clearInterval(this.titleInterval);
        clearInterval(this.titleSetout);
    }
    render (){
        return (
            <div className="mt-60">
                <p className={this.state.fadeIn ? 'fade-in' : 'fade-out'}>I'm {TITLES[this.state.titleIndex]}</p>
            </div>
        )
    }
}

export default Title;