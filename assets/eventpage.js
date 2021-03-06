//developClientId = '8500729d9a47478fb0bd212d4e8e309e'


var getUserId = function () {
    //replacing # in url to ? so we can use .search
    var urlLocation = new URL(window.location.href.replace(/#/g,'?'))

   
    var urlParams = new URLSearchParams(urlLocation.search);

    
   // user Token is stored in LS
  
    if (urlParams.has('access_token')) {
        var userToken = urlParams.get('access_token');
        var spotifyTokenLabel = 'spotifyToken';
        localStorage.setItem(spotifyTokenLabel, userToken);
      document.location.replace('./index.html');
  }}
  getUserId()