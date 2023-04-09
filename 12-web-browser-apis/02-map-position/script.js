// Initializing a map using Leaflets object template                               
const map = L.map('map').setView([0, 0], 2);
//      ^^Location^^     ^^ zoom level
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     .openPopup();

// Creating the marker
const marker = L.marker([0, 0]).addTo(map);

// Accessing current position with navigator
navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    marker.setLatLng([lat, long]).update();
    map.setView([lat, long], 11)


    marker.bindPopup('<h2 class="location">My Current Location</h2>')
        .openPopup();


});