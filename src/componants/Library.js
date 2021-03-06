import React from "react";
import { useSelector } from "react-redux";
import { selectSongs } from "./musicLibrarySlice";

import LibrarySong from "./LibrarySong";

function Library({ audioRef }) {
  const songs = useSelector(selectSongs);
  const libraryStatus = useSelector((state) => state.musicLibrary.show);

  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song, idx) => (
          <LibrarySong songIdx={idx} key={song.id} audioRef={audioRef} />
        ))}
      </div>
    </div>
  );
}

export default Library;
