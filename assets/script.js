//When they click mood, we check for token, if good, send them to next page
//else redirect to get token


//this gets the user mood 
buttonVal = $('#button-container')

buttonVal.on('click','button',function(event){
    event.preventDefault();
    var mood = $(this).text();
    console.log(mood)
})

var spotifyTokenLabel = 'spotifyToken'
var spotifyToken = localStorage.getItem(spotifyTokenLabel)
if(!spotifyToken){
    //redirect to spotify login
    document.location = 'https://accounts.spotify.com/authorize?client_id=8500729d9a47478fb0bd212d4e8e309e&response_type=token&redirect_uri=https://raynagweinreb.github.io/MoodMuse/test.html';
}
else{
    //move to second page
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