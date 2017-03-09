// function library.printTracks();

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// var keys = [];
// for (var k in this) keys.push(k);
// console.log("total " + keys.length + keys)

  var printPlaylists = function() {
  // var playlist = {};
  // var dispay = Object.keys(musicDisplay)
    for (var display in this.playlists){
    // print Playlists(info);
      var playlist = this.playlists[display];
    // console.log(playlist);
      console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
      // if (display === display.keys) {
     //   playlist[display] = playlist[display].keys;
    // for (var track of this.playlists[display].tracks){
    //   console.log(track);
    //   var name = this.playlists
    //   }
    }

  },

  // printPlaylists();
  // printPlaylists();
//   return playlist;
// }
// console.log(this.playlists);
// var music = printPlaylists(this);
// console.log(printPlaylists(this));

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function () {

   for (var display in this.tracks){
    // print tracks(info);
    var tracks = this.tracks[display];
    console.log(tracks.id + ": " + tracks.name + " by " + tracks.artist +  " (" + tracks.album + ")");
  // for (var display in this.tracks){
  //   var playlist = this.tracks[display];
  //   // console.log(playlist);
  //   console.log(playlist.id + ": " + playlist.name + " by " + playlist.artist + " (" + playlist.album + ")");
    // if (playlist.id === undefined){

    }

  },
// console.log(printTracks());

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist : function (playlistId) {

    this.printsingleplaylist(playlistId);

    for (var track of this.playlists[playlistId].tracks) {
    this.printSingleTrackList(track);
    }


  },

  printSingleTrackList : function (trackId) {
  // for (var display in this.playlists){
    var track = this.tracks[trackId];
    console.log(track.id + ": " + track.name + " by " + track.artist +  " (" + track.album + ")");
    // console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");

  },


  printsingleplaylist : function (playlistId) {

  // for (var track in this.playlists) {
    var playlist = this.playlists[playlistId];
    console.log(playlist.id + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");

    // console.log(tracks.id + ": " + tracks.name + " by " + tracks.artist +  " (" + tracks.album + ")");
  },


// printPlaylist('p01');

// adds an existing track to an existing playlist

  addTrackToPlaylist : function (trackId, playlistId) {
    var tracks = this.playlists[playlistId].tracks;

    if (!tracks.includes[trackId]){
    tracks.push(tracksId);
    }
// console.log ()
  },
// addTrackToPlaylist('p01', '"p02"');

// generates a unique id
// (use this for addTrack and addPlaylist)

  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


// adds a track to the this

  addTrack : function (name, artist, album) {
    var addId = this.uid()
    var newTrack = {}

    newTrack.id = addId;
    newTrack.name =  name;
    newTrack.artist = artist;
    newTrack.album = album;

    this.tracks[addId] = newTrack;

  },


// adds a playlist to the this

  addPlaylist : function (name) {
    var addId = this.uid() ;
    var newPlaylist = {};

    newPlaylist.id = addId;
    newPlaylist.name =  name;

    this.playlists[addId] = newPlaylist;

  }

}
// library.printPlaylists();