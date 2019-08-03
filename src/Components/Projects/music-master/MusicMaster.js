import React, {Component} from 'react';
import Artist from './components/Artist';
import Tracks from './containers/Tracks';
import Loader from './components/UI/Loader';
import Search from './components/Search';

const API_REQ = 'https://spotify-api-wrapper.appspot.com/';
class MusicMaster extends Component {
    
    constructor(props) {
        super(props)
        this.mounted = false;
        this.state = {
            loaderOfTracks : false,
            loaderOfArtist : false,
            artist : null,
            track : null,
            searchIsOn: false,
            cantFindArtist : false,
            searchQuery : null
        }
    }


    searchArtist = (searchQuery) => {
        
        this.setState({
            loaderOfArtist : true,
            searchIsOn : true,
            cantFindArtist : false,
            searchQuery
        })    

        const fetchReq = fetch(API_REQ+'artist/' + searchQuery);        
        fetchReq.then(res=>{
            return res.json()
        })
        .then(json=> {
            if(json.artists.total > 0) {
                if(this.mounted) {
                    this.setState({
                        artist : json.artists.items[0],
                        loaderOfArtist : false,
                        loaderOfTracks : true,
                        searchIsOn : false
                    });    
    
                    fetch(API_REQ+'/artist/'+this.state.artist.id+'/top-tracks')
                        .then(res=> res.json())
                        .then(json=> this.setState({
                            track: json,
                            loaderOfTracks : false
                        }))
                        .catch(error=> alert(error));
                }
        
            } else {
                this.setState({
                    cantFindArtist : true
                })
                //alert('0 Artist')
            }           
        })
        .catch(error=>console.log(error))
        
    }

    componentDidMount () {
        this.mounted = true;
    }

    componentWillUnmount () {
        this.mounted = false;
    }

    render () {
        console.log(this.state.artist, 'artist')
        let SearchArtistRender = this.state.loaderOfArtist ? <div style={{marginTop:'15px'}}><Loader /></div> : <Artist artist={this.state.artist}/>;
        let SearchTracksRender = this.state.loaderOfTracks ? <div style={{marginTop:'20px'}}><Loader /></div> :  <Tracks searchIsOn= {this.state.searchIsOn}tracksList={this.state.track}/>;
        return (
            <div className="container">                        
                <h1>Music Mastero</h1>
                <Search searchArtist={this.searchArtist} /> 
                {this.state.cantFindArtist ? 
                <div> 
                    <p style={{marginTop:'15px'}}>  No results found for "<b>{this.state.searchQuery}"</b> </p>
                    <p>Please check your spelling or try with a different keyword</p>
                </div> : 
                <>
                    {SearchArtistRender}
                    {this.state.searchIsOn ? null : SearchTracksRender }
                    
                </>      
                }
                
            </div>            
        );
    }
}

export default MusicMaster;