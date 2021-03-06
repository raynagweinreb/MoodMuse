var playlistheader = document.getElementById("playlistHeader")
mood = localStorage.getItem("mood")
playlistHeader.append(mood)


function getPlaylists(mood){
    fetch("https://openwhyd.org/search?q="+mood+"&format=json")
    .then(function (data) {
      if (data.ok) {
        data.json().then(function (data) {
           console.log(data)
 })
      }})}
      window.addEventListener("load",getPlaylists)