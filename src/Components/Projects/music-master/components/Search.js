import React from 'react';

class Search extends React.Component {
    state = {
        ArtistQuery : 'Sriram',
    }

    componentDidMount () {
        this.props.searchArtist(this.state.ArtistQuery);
        this.setState({
            isMounted : true
        })
    }

    keyupHandler = (e) => {
        this.setState({
            ArtistQuery: e.target.value
        });
    }
    searchArtistHandler = (e) => {
        e.preventDefault();
        this.props.searchArtist(this.state.ArtistQuery);
    }

    render() {
        return (
        <form className='form-inline justify-content-center' onSubmit={this.searchArtistHandler}>
            <div className="form-group">
                <input 
                    spellCheck="false"
                    type="text"
                    placeholder="Search for an Artist"
                    className="form-control input search"
                    onChange={this.keyupHandler}
                    value={this.state.ArtistQuery}
                    style={{borderTopLeftRadius:0,borderTopRightRadius:0}}
                />
                <button type="submit" className="button gray">Search</button>
            </div>
        </form>
        )
    }
}

export default Search;