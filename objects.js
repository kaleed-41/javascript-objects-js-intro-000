var playlist = {JCole : "Fire Squad"};

function updatePlaylist(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist."Slowdive";
  return playlist;
}
