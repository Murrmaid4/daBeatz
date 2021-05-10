let songBtn = document.getElementById("submitSong");
let artistBtn = document.getElementById("submitArtist")

console.log("dashboard js front end routes ready");

artistBtn.onclick = function () {
  let searchInput = document.getElementById("songSearchBox").value;
  console.log(searchInput);
  getRouteArtist(searchInput); 
};


songBtn.onclick = function () {
  let searchInput = document.getElementById("songSearchBox").value;
  console.log(searchInput);
  getRouteSong(searchInput);
  
};

const getRouteArtist = function (searchInput) {
  console.log("get route reached");
  window.location.href = "/api/data/artist/" + searchInput;
};

const getRouteSong = function (searchInput) {
  console.log("get route reached");
  window.location.href = "/api/data/song/" + searchInput;
};
