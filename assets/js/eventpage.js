var userInputEl = document.getElementById('user-input');
var searchBtn = document.getElementById('button-addon2');
var eventList = document.getElementById('event-list');
var picList = document.getElementById('picture-container');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var picLink = document.getElementById('picture-link');
var eventContain = document.getElementById('event-container');
var modal = document.querySelector('.modal');
var modalBtn = document.querySelector('.modal-close');
var homeBtn = document.getElementById('home-btn');


modalBtn.addEventListener('click',function(){
    modal.classList.remove('is-active')
    document.getElementsByTagName('html').classList.remove('is-clipped')
})
var inputSubmitCity = function (event) {
    event.preventDefault();
    //extracts user input into variable city
    var city = userInputEl.value.trim();

    //checking that the user has an input 
    if (city) {
        localStorage.setItem('city', JSON.stringify(city));
        getCityEvents(city);
    } else {
        modal.classList.add('is-active')
        document.getElementsByTagName('html').classList.add('is-clipped')
        }

    }
;
var sendMeHome = function(){
    location.href='index.html';
}
var getCityEvents = function (city) {
    //api for ticketmaster, searching for music events by city
    var apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&city=' + city + '&apikey=aPKIA6CVjGW2yNrfkm1UthZ7kYcsq7Ph'
    fetch(apiUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            //clearing the eventList and picList containers
            eventList.textContent = '';
            picList.textContent = '';
            //this for loop will create 6 hyperlinks to events found by city. 
            for (var i = 0; i < 6; i++) {
                var eventLinkEl = document.createElement('a');
                //this link will send the user to Ticketmaster's page about the event
                eventLinkEl.setAttribute('href', data._embedded.events[i].url);
                eventLinkEl.setAttribute('target', '_blank');
                var titleEl = document.createElement('span');
                //The name of the event taken from the api data
                titleEl.textContent = data._embedded.events[i].name;
                //appending a line break
                var br = document.createElement('br');
                //appending the api data to the container 
                eventLinkEl.appendChild(titleEl);
                eventLinkEl.appendChild(br);
                eventList.appendChild(eventLinkEl);
                //creating a link from the picture to send the user to the event page.
                picLink = document.createElement('div');
                picLink.setAttribute('id', 'picture-links');
                picLink.setAttribute('class', "image is-128x128");
                var pictureLinkEl = document.createElement('a');
                pictureLinkEl.setAttribute('href', data._embedded.events[i].url);
                //linking the image to the page 
                var img = document.createElement('img');
                img.setAttribute('class', "is-rounded image is-128x128");
                img.src = data._embedded.events[i].images[i].url;
                pictureLinkEl.setAttribute('target', '_blank');
                //appening the image to the image container
                pictureLinkEl.appendChild(br);
                pictureLinkEl.appendChild(img);
                picLink.appendChild(pictureLinkEl);
                picList.appendChild(picLink);


            }
            //TESTING FUNCTION
            console.log(data)
        })

}



searchBtn.addEventListener('click', inputSubmitCity);
homeBtn.addEventListener('click',sendMeHome);
