let searchBtn = document.getElementById("submitSearch");


console.log("dashboard js front end routes ready");



searchBtn.onclick = function () {
  let searchInput = document.getElementById("songSearchBox").value;
  console.log(searchInput);
  getRouteArtist(searchInput);
//  getRouteSong(searchInput);
  
};

const getRouteArtist = function (searchInput) {
  console.log("get route reached");
  window.location.href = "/api/data/artist/" + searchInput;
};

// const getRouteSong = function (searchInput) {
//   console.log("get route reached");
//   window.location.href = "/api/data/song/" + searchInput;
// };
