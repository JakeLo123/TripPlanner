const mapboxgl = require('mapbox-gl');

function makeMapMarker(coordinates, map){
  const mapMarker = document.createElement('div');
  mapMarker.style.width = "32px";
  mapMarker.style.height = "39px";
  mapMarker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  new mapboxgl.Marker(mapMarker).setLngLat(coordinates).addTo(map);
}

module.exports = makeMapMarker;
