var userInputEl = document.getElementById('user-input');
var searchBtn = document.getElementById('button-addon2');
var eventList = document.getElementById('event-list')


var inputSubmitCity = function(event){
    event.preventDefault();
    //extracts user input into variable city
    var city = userInputEl.value.trim();
    
    //checking that the user has an input 
    if(city){
        localStorage.setItem('city', JSON.stringify(city));
        getCityEvents(city);
        //reset the container of information
    } else {
        alert('Please enter a City');
    }
};

var getCityEvents = function(city){
    var apiUrl ='https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city='+city+'&apikey=aPKIA6CVjGW2yNrfkm1UthZ7kYcsq7Ph'
    fetch(apiUrl)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        for (var i = 0; i < 6; i++ ){
            var eventLinkEl = document.createElement('a');
            eventLinkEl.setAttribute('href', data._embedded.events[i].url);
            eventLinkEl.setAttribute('target', '_blank');

            var titleEl = document.createElement('span');
            titleEl.textContent = data._embedded.events[i].name;
            var br = document.createElement('br');
            eventLinkEl.appendChild(titleEl);
            eventLinkEl.appendChild(br);
            eventList.appendChild(eventLinkEl);

        }
        console.log(data)
    })
    
}


searchBtn.addEventListener('click', inputSubmitCity);