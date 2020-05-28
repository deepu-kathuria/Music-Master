import React, { useState, useEffect } from 'react';
import Search from './Search';
import Artist from'./Artist';
import Tracks from './Tracks';

function App()
{
    const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com/';
    let [artist, setArtist] = useState(null);
    let [tracks, setTracks] = useState([]);
    useEffect(() => {
        SearchArtist('Ed sheeran');
    }, []);

    function SearchArtist(searchText){
        if(!searchText)
            return null;
        fetch(`${API_ADDRESS}/artist/${searchText}`)
        .then(response => response.json())
        .then(json => {
            if(json.artists.total > 0)
            {
                const fetchedArtist = json.artists.items[0];
                setArtist(fetchedArtist);

                fetch(`${API_ADDRESS}/artist/${fetchedArtist.id}/top-tracks`)
                .then(response => response.json())
                .then(json => setTracks(json.tracks))
                .catch(error => alert(error.message));
            }
            else
            {
                setArtist(null);
                setTracks([]);
            }
        })
        .catch(error => alert(error.message));        
    }
    
    return (
        <div>
            <h2>Music Master</h2>
            <Search searchArtist={SearchArtist}/>
            <Artist artist={artist} />
            <Tracks tracks={tracks}/>
        </div>
    );
}

export default App;