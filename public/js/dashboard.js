let searchBtn = document.getElementById('submitSearch');
let playlistCreate = document.getElementById('createPlaylist');

console.log('dashboard js front end routes ready')

// playlistCreate.onclick = function() {
//   // code to dynamically create a card inside of the playlistCard div

// }




searchBtn.onclick = function() {
    let searchInput = document.getElementById('songSearchBox').value
    console.log(searchInput)
    getRouteArtist(searchInput);
    getRouteSong(searchInput);
  results.classList.remove("hide");
}

const getRouteArtist = async (searchInput) => {
    console.log('get route reached')
    let getArtist = await fetch('/api/data/artist/'+ searchInput, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const artists = getArtist.map((tracks) => tracks.get({ plain: true }));
      if (artists) {
      console.log("search successful with" + JSON.stringify(artists))
      } else {
          console.log('failure')
      }
    }

    const getRouteSong = async (searchInput) => {
        console.log('get route reached')
        let getSong = await fetch('/api/data/song/'+searchInput, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const track = await getSong.json()
    
          if (track) {
          console.log("search successful with" + JSON.stringify(track))
          } else {
              console.log('failure')
          }
        }



