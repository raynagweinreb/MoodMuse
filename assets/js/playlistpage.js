buttonVal = $('#button-container')

buttonVal.on('click', 'button', function (event) {
    event.preventDefault();
    var mood = $(this).text();
    console.log(mood);
    
    $.ajax({
      url: "https://api.spotify.com/v1/search?q=",
      data:{
         q: mood,
         type:"playlist",
         Authorization:"BQCPVwlf1RYcIuWHcXJ_G6fn3ogeV5Kz_R2kQPMW-nq5lCKAfRL0UgniC0OLOjw5R-AKeyC03MqaNlHWVONK8HmrPNR0FkP3lETAXn1pr4Jjh4w-YCdHOHdWLvJ3lABXTPdFRux9H9SwRe4"
      },
      method: "GET"
    })
    .then(function(playlist){
       console.log(playlist);
})


})
