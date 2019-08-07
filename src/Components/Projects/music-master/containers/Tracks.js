import React from 'react';
import classes from '../containers/Tracks.module.css'

class Tracks extends React.Component {

    state = {             
        url : null,
        defaultAudio : null,
        MusicIsPlaying : false,
        MusicIsPaused : false,
        NewMusic : false        
    }


    audioHandler = (url) => {
        
                
        if(!url) {
            return null
        }

        if(this.state.MusicIsPlaying === false && this.state.MusicIsPaused === false) {       
            console.log('case 1')             
            this.setState({
                defaultAudio : new Audio(url)
            }, () => {
                this.state.defaultAudio.play();
                this.setState({
                    MusicIsPlaying : true,
                    url
                })
            });
        } else if(this.state.MusicIsPlaying === true && this.state.url === url) {
            console.log('case 2')             
            this.state.defaultAudio.pause();
            this.setState({
                MusicIsPlaying: false,
                MusicIsPaused : true
            })
        } else if (this.state.MusicIsPlaying === false && this.state.MusicIsPaused === true && this.state.url !== url) {
            console.log('case 3 ')
            this.setState({
                defaultAudio : new Audio(url)
            }, () => {
                this.state.defaultAudio.play();
                this.setState({
                    MusicIsPlaying : true,
                    url
                })
            });

            
            // this.state.defaultAudio.play();
            // this.setState({
            //     MusicIsPlaying: true,
            //     MusicIsPaused : true
            // })
        } else if (this.state.MusicIsPlaying === false && this.state.MusicIsPaused === true && this.state.url === url) {
            console.log('case 4 ')
            // this.setState({
            //     defaultAudio : new Audio(url)
            // }, () => {
            //     this.state.defaultAudio.play();
            //     this.setState({
            //         MusicIsPlaying : true,
            //         url
            //     })
            // });

            
            this.state.defaultAudio.play();
            this.setState({
                MusicIsPlaying: true,
                MusicIsPaused : true
            })
        } else if (this.state.url !== url ) {
            console.log('case 5')
            this.state.defaultAudio.pause();
                    
            this.setState({
                NewMusic : true,
                defaultAudio : new Audio(url),
                url
            }, () => {
                this.state.defaultAudio.play();
            });
        }                
    }

    TrackIcon = (track) => {    
        if(!track.preview_url) {
            return <span>NA</span>;
        }        

        if( (this.state.MusicIsPlaying === true) && this.state.url === track.preview_url) {
            return <span>| |</span>
        } else {
            return <span>&#9654;</span>            
        }
    }

    componentWillUnmount () {
        if(this.state.MusicIsPlaying) {
            this.state.defaultAudio.pause();
        }
    }
    
    render () {
        //console.log(this.props, '\n GETTING PROPS');

        // console.log(this.state, 'this.state')

        const {tracksList} = this.props;        
        let renderTracks = null

        //console.log(tracksList);
        if (tracksList !== null) {
            //console.log(this.state);
            renderTracks = tracksList.tracks.map(track=>{
                return (
                    <div className={classes.TrackItem} key={track.id} onClick={()=>{this.audioHandler(track['preview_url'])}}>                        
                        <img src={track.album.images[0].url}  alt={track.name}/>
                        <h5 className={classes.TrackItemTitle}>{track.name}</h5>
                        <p className={classes.TrackIcon}>{this.TrackIcon(track)}</p>
                    </div>
                )
            })
        }

        // console.log(this.state, '\n state ')
        //console.log(this.props, '\n props ')
        return (
            <div className={classes.RenderTracksWrapper}>
                {renderTracks}               
            </div>
        )
    }
}


export default Tracks;