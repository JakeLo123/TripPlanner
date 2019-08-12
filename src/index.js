const mapboxgl = require('mapbox-gl');
const makeMapMarker = require('./marker.js');

mapboxgl.accessToken = "pk.eyJ1Ijoiam9zaHVhaG9lZmxpY2g5NyIsImEiOiJjano4bWNjZzUwamFsM25yczQwNWVrOXVyIn0.OBr-xxj3v0UK5vCJONXJHg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});

const markerType = {
  activity: '//i.imgur.com/WbMOfMl.png',
  hotel: '//i.imgur.com/D9574Cu.png',
  restaurant: '//i.imgur.com/cqR6pUI.png'
}

makeMapMarker(markerType.restaurant, [-74.009151, 40.705086], map);

console.log('I am running');
