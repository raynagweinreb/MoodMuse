//developClientId = '8500729d9a47478fb0bd212d4e8e309e'

getUserId()
var getUserId = function () {
    var urlParams = new URLSearchParams(document.location.search);
    
    console.log(userId)
  
    if (urlParams.has('access_token')) {
        var userToken = urlParams.get('access_token');
        var spotifyTokenLabel = 'spotifyToken';
        localStorage.setItem(spotifyTokenLabel, userToken);
      document.location.replace('./index.html');
  }}