const mapboxgl = require('mapbox-gl');

function makeMapMarker(type, coordinates, map){
  const mapMarker = document.createElement('div');
  mapMarker.style.width = "32px";
  mapMarker.style.height = "39px";
  mapMarker.style.backgroundImage = `url(http:${type})`;
  new mapboxgl.Marker(mapMarker).setLngLat(coordinates).addTo(map);
}

module.exports = makeMapMarker;
