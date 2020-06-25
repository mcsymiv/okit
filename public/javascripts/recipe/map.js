mapboxgl.accessToken = 'pk.eyJ1IjoibWNzeW1pdiIsImEiOiJja2J0MzlxM3MwNjFxMzRxeGY0ZjFpemI0In0.kqH67-WIChHHgjsQanX8Zw';
if(recipe.coordinates){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: recipe.coordinates,
        zoom: 9
    });

    // add markers to map

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for location and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(recipe.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + recipe.title + '</h3><p>' + recipe.location + '</p>'))
    .addTo(map);
}