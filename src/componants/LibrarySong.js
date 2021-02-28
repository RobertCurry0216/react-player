import React from 'react';
import {playAudio} from '../util';

function LibrarySong({song, songs, setCurrentSong, isPlaying, audioRef}){

    function selectSongHandler(e){
        songs.map(s => s.active = false);

        setCurrentSong(song);

        song.active = true;

        playAudio(isPlaying, audioRef);
    }

    return(
        <div onClick={selectSongHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;