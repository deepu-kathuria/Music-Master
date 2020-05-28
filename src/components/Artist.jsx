
import React from 'react';

function Artist({artist}){
    if(!artist) return null;
    const {images, name, followers, genres} = artist;
    const style={display: 'inline-block', margin: '10px'};
    return (
        <div>
            <div style={style}>
             <img 
                src={images[0] && images[0].url}
                alt='artist profile'
                style={{
                    width:200,
                    height:200,
                    borderRadius: 100,
                    objectFit: 'cover'
                }}
            />
            </div>
            <div style={style}>
                <h3>{name}</h3>
                <p>{followers.total} followers</p>
                {/* <p>{genres.join(',')}</p> */}
            </div>
            
        </div>
    );
}

export default Artist;