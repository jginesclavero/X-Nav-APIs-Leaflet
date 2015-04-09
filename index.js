var map = L.map('map');
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {  // http://{s}.tile.osm.org/{z}/{x}/{y}.png
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var popup = L.popup();
function onMapClick(e){
	popup
    .setLatLng(e.latlng)
    .setContent("Has hecho click en:" + e.latlng.toString())
    .openOn(map);

}
map.on('click',onMapClick);
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Tu estas a  " + radius + " metros alrededor de este punto").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);