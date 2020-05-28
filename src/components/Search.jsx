import React, { useState } from 'react';

function Search(props){
    let [searchText, setSearchText] = useState('');

    function HandleKeyPress(event){
        if(event.key == 'Enter'){
            SearchArtist(searchText);
        }
    }
    
    function UpdateArtistLibrary(event){
        setSearchText(event.target.value);
    }

    function SearchArtist(){
        setTimeout(() => {
            setSearchText('');
        }, 2000);
        
        props.searchArtist(searchText);
    }

    return (
        <div>
            <input 
                placeholder="Search for an artist" 
                onChange={UpdateArtistLibrary}
                onKeyPress={HandleKeyPress}
                className='search-box'
                value={searchText}
                autoFocus
            />
            <button onClick={() => SearchArtist(searchText)}>Search</button>
        </div>
    );
}

export default Search;