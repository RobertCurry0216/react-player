import React from 'react';
import LibrarySong from './LibrarySong';

function Library({songs, setCurrentSong, isPlaying, audioRef, libraryStatus, setLibraryStatus}){
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map(s => 
          <LibrarySong 
            song={s}
            songs={songs}
            isPlaying={isPlaying}
            setCurrentSong={setCurrentSong}
            key={s.id}
            audioRef={audioRef}/>
        )}
      </div>
    </div>
  )
}

export default Library;