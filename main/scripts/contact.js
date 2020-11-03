var map = new Mazemap.Map({
// container id specified in the HTML
container: 'map',

campuses: 1,

// initial position in lngLat format
center: {lng: 10.402075, lat: 63.419149},

// initial zoom
zoom: 18,

zLevel: 1
});

map.addControl(new Mazemap.mapboxgl.NavigationControl());

var lngLat = map.getCenter();

var marker = new Mazemap.MazeMarker( {
    zLevel: 1
} )
.setLngLat( lngLat )
.addTo(map);
