


function showTop10Songs(){
document.getElementById("showSongsBtn").style.display = 'none';
let songs = document.createElement("div");
songs.setAttribute("id","songs");
let i = 1;
songsList.forEach(song => {
    songs.append(buildSongItem(i, song));
    i++;
});
  document.getElementById("songsContainer").append(songs);
 document.getElementById('songsContainer').append(buildHideSongsList());
}
function buildSongItem(rank, song){
   let songItem = document.createElement("div");
   songItem.setAttribute("class", "songItem");

   let songRank = document.createElement("div");
   songRank.setAttribute("class", "songRank");
    songRank.innerHTML = `#${rank}`

   let songName = document.createElement("div");
   songName.setAttribute("class", "songName")
    songName.innerHTML = song.name;

   songItem.appendChild(songRank);
   songItem.appendChild(songName);

   return songItem
}

function buildHideSongsList(){
    let hideButton = document.createElement("div");
    hideButton.setAttribute("class", "generalMainButton");
    hideButton.setAttribute("id", "hideButton");
    hideButton.setAttribute("onclick", "hideSongsList()");
    hideButton.innerHTML = "Hide";
    return hideButton;
}

function hideSongsList(){
   location.reload();
}

const songsList =[
    {
        name:"Time to Pretend",
        src:""
    },
    {
        name:"O-o-oh Child",
        src:""
    },
    
    {
        name:"Wish You Were Here",
        src:""
    },
    
    {
        name:"Heroes",
        src:""
    },
    
    {
        name:"I Put a Spell on You",
        src:""
    },
    {
        name:"Call Me",
        src:""
    },
    {
        name:"Paper Planes",
        src:""
    },
    {
        name:"Jolene",
        src:""
    },
    {
        name:"You Don't Own Me",
        src:""
    },
    {
        name:"Fast Car",
        src:""
    },
    {
        name:"Run the World (Girls)",
        src:""
    },
    {
        name:"Superstition",
        src:""
    }, 
];