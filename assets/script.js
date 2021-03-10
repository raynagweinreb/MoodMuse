<<<<<<< HEAD
var getHotTracks = function(){
    var topAPI= 'https://openwhyd.org/search?q=happy&format=json';
    
    fetch(topAPI)
    .then(function (response){
        return response.json();
=======
//When they click mood, we check for token, if good, send them to next page
//else redirect to get token


//this gets the user mood 
buttonVal = $('#button-container')

buttonVal.on('click', 'button', function (event) {
    event.preventDefault();
    var mood = $(this).text();
    console.log(mood);
>>>>>>> c3d2ab729903003cceb0b284d8763cefa6179853
})
    .then(function(data){
        console.log(data)
    })

};
getHotTracks();