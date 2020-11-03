var map = new map.Map({
    // container id specified in the HTML
    container: 'map',

    campuses: 121,

    // initial position in lngLat format
    center: {lng: 13.270286316716465, lat: 52.502217640505705},

    // initial zoom
    zoom: 18,

    zLevel: 3
});

// Add zoom and rotation controls to the map.
map.addControl(new mazemap.mapboxgl.NavigationControl());
