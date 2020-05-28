import React, { useState, useEffect } from 'react';

function Tracks({tracks}){
    // console.log(tracks);
    let [playing, setPlaying] = useState(false);
    let [audio1, setAudio1] = useState(null);
    let [playingPreviewUrl, setPlayingPreviewUrl] = useState(null);
    
    function playAudio(previewUrl){
        console.log(playing);
        
        if(!playing)
        {
            const audio2 = new Audio(previewUrl);
            setAudio1(audio2);
            audio2.play();
            setPlaying(true);
            setPlayingPreviewUrl(previewUrl);
        }
        else{
            audio1.pause();

            if(playingPreviewUrl === previewUrl)
            {
                setPlaying(false);
            }
            else{
                const audio3 = new Audio(previewUrl);
                setAudio1(audio3);
                audio3.play();
                setPlayingPreviewUrl(previewUrl);
            }
        }
        // console.log(audio);
    }
    const trackIcon = track => {
        if(!track.preview_url)
            return <span>N/A</span>
        if(playing && playingPreviewUrl == track.preview_url)
            return <span>| |</span>;
        return <span>&#9654;</span>;
    }

    return(
        <div>
            {
                tracks.map(track => {
                    const {id, name, album, preview_url} = track;
                    return (
                        <div 
                            key={id} 
                            onClick={() => playAudio(preview_url)} 
                            className='track'
                        >
                            <img 
                                src={album.images[0].url} 
                                alt='track-image' 
                                className='track-image'
                            />
                            <p className='track-text'>{name}</p>
                            <p className='track-icon'>{trackIcon(track)}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Tracks;