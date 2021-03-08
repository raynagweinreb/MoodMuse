var getHotTracks = function(){
    var topAPI= 'https://openwhyd.org/search?q=happy&format=json';
    
    fetch(topAPI)
    .then(function (response){
        return response.json();
})
    .then(function(data){
        console.log(data)
    })

};
getHotTracks();