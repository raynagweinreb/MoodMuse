window.onSpotifyWebPlaybackSDKReady = () => {
   // const token = localStorage.getItem('spotifyToken');
   let token = 'BQAzPdf5fmFz-UaiGV5in3ER1CTGLRQ8bIwEftBHoMuKxZkv6EZbeRwgSB5CP8vox5eA1x7YotRwN7Gm2J6qsblH79BXODzVJQQQqu__sCAc4dy73cjPUpi057Q-y5tIUhfyERYwCw6Rnry6VuNGsOqu7Rs1XrK2aZM'
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