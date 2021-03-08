var moodButtons = document.querySelector("#button-container")



var userMood = function(event) {
var mood = event.target.getAttribute("data-mood")
localStorage.setItem("mood",mood)
location.href='playlistpage.html'
}

 


moodButtons.addEventListener("click",userMood,)
