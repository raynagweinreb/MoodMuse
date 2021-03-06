//When they click mood, we check for token, if good, send them to next page
//else redirect to get token


//this gets the user mood 
buttonVal = $('#button-container')

buttonVal.on('click', 'button', function (event) {
    event.preventDefault();
    var mood = $(this).text();
    console.log(mood)
})

var spotifyTokenLabel = 'spotifyToken'
var spotifyToken = localStorage.getItem(spotifyTokenLabel)
if (!spotifyToken) {
    //redirect to spotify login
    document.location = 'https://accounts.spotify.com/authorize?client_id=8500729d9a47478fb0bd212d4e8e309e&scope=streaming%20user-read-private%20user-read-email&response_type=token&redirect_uri=https://raynagweinreb.github.io/MoodMuse/test.html';
}
else {
    //move to second page
    $.ajax({
        url: 'https://api.spotify.com/v1/me',
        headers: {
            'Authorization': 'Bearer ' + spotifyToken
        },
        success: function (response) {
            //show welcome msg...
            alert('you have a new Spotify Token '+ response.display_name)
        },
        error: function (jqXHR, status, err) {
            var spotifyTokenLabel = 'spotifyToken';
            localStorage.removeItem(spotifyTokenLabel)
            document.location = 'https://accounts.spotify.com/authorize?client_id=8500729d9a47478fb0bd212d4e8e309e&scope=streaming%20user-read-private%20user-read-email&response_type=token&redirect_uri=https://raynagweinreb.github.io/MoodMuse/test.html';
        }
    })
}
var getUserId = function () {
    var queryString = document.location.search;
    var userId = queryString.split('=')[0];
    console.log(userId)

    if (userId) {
        userIdEl.textContent = userId;

        document.location.replace('./index.html');
    } else {
        document.location.replace('./index.html');
    }
};

window.onSpotifyWebPlaybackSDKReady = () => {
    const token = localStorage.getItem('spotifyToken');
//    let token = 'BQAzPdf5fmFz-UaiGV5in3ER1CTGLRQ8bIwEftBHoMuKxZkv6EZbeRwgSB5CP8vox5eA1x7YotRwN7Gm2J6qsblH79BXODzVJQQQqu__sCAc4dy73cjPUpi057Q-y5tIUhfyERYwCw6Rnry6VuNGsOqu7Rs1XrK2aZM'
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
};