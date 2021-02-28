import React, {useState, useRef} from 'react';

import './styles/app.scss';

import Player from './componants/Player';
import Song from './componants/Song';
import chillHop from './data';
import Library from './componants/Library';
import Nav from './componants/Nav';

function App() {

  //states
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })

  //states
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  //Ref
  const audioRef = useRef(null);

  //event handlers
  function timeUpdateHandler(e){
    const duration = e.target.duration;
    const currentTime = e.target.currentTime;
    const percentage = Math.round((currentTime * 100) / duration);
    setSongInfo({...songInfo, currentTime, duration, percentage});
  }

  function songEndHandler(e){
    let idx = songs.findIndex(s => s.active);
    setCurrentSong(songs[(idx + 1) % songs.length]); 
  }

  //componant
  return (
    <div className={`app ${libraryStatus ? 'library-active' : ''}`}>
      <Nav 
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player 
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong} 
        songs={songs}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}/>
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying} 
        audioRef={audioRef}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}/>

      <audio 
        ref={audioRef} 
        src={currentSong.audio} 
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
