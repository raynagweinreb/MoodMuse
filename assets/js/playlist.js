var playlistheader = document.getElementById("playlistHeader")
mood = localStorage.getItem("mood")
console.log(mood)
playlistHeader.append(mood)
var html=[]



function getPlaylists(event){
    fetch("https://openwhyd.org/search?q="+mood+"&format=json")
    .then(function (playlist) {
      if (playlist.ok) {
        playlist.json().then(function (playlist) {
           console.log(playlist);
         
           for ( var i = 0; i <=10; i++ ) {
          var playlistTitle= playlist.results.playlists[i].name
         
          var playlistImg=playlist.results.playlists[i].img
          img= "https://openwhyd.org"+playlistImg
          console.log(playlistUrl)
          var playlistUrl=playlist.results.playlists[i].url
          var url="https://openwhyd.org"+playlistUrl
           
   


          html.push(' <div class="media">')
          html.push('<div id="playlistImg" class="media-left">')
          html.push(' <figure class="image is-96x96">')
          html.push('<img src='+img+'alt="Placeholder image">')
          html.push("</figure>")
          html.push("</div>")
          html.push('<div class="media-content">')
          html.push('<p id= "playlistTitle" class="title is-4">'+playlistTitle+'</p>')
          html.push('<footer class="card-footer">')
          html.push('<a class="card-footer-item" href='+url+'>View Playlist</a>')
          html.push('<a href="eventpage.html" class="card-footer-item" id="events">See Events</a>')
          html.push('</div>')
          html.push('</div>')
        $("#list").html(html.join(''));
          } 
    





           
        })}})}
       

    
    

   
      window.addEventListener("load",getPlaylists)