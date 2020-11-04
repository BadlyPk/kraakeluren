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
    zLevel: 1,
    color: "navy",
    size: 40,
    glyphColor:'#FFF',
    glyph: 'Kr',
    innerCircle: false
} )


.setLngLat( lngLat )
.addTo(map);

var popup = new Mazemap.Popup({closeOnClick: true, offset: [0, -27]})
    .setHTML('Her ligger kontoret som Kråkeluren tilhører');

marker.setPopup(popup);
