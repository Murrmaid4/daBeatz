let searchBtn = document.getElementById("submitSearch");
let playlistCreate = document.getElementById("createPlaylist");
let reload = document.getElementById("searchBox");
console.log("dashboard js front end routes ready");



searchBtn.onclick = function () {
  let searchInput = document.getElementById("songSearchBox").value;
  console.log(searchInput);
  getRouteArtist(searchInput);
 // getRouteSong(searchInput);
  
};

const getRouteArtist = function (searchInput) {
  console.log("get route reached");
  window.location.href = "/api/data/artist/" + searchInput;
};

// const getRouteSong = function (searchInput) {
//   console.log("get route reached");
//   let getSong = await fetch("/api/data/song/" + searchInput, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const track = await getSong.json();

//   if (track) {
//     console.log("search successful with" + JSON.stringify(track));
//   } else {
//     console.log("failure");
//   }
// };
