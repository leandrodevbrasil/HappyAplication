const options = {
    dragging: false,
    touchZoom: false,
    doubleclickZoom: false,
    srollWheelZoom: false,
    zoomcontrol: false
}

// create map
const map = L.map('mapid', options).setView([-21.1771336,-47.8321188, 15], 13);


// create and add TileLayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// create icon

// create and add marker
const icon = L.icon({
    iconUrl:     "./public/images/map-marker.svg",
    iconsize:    [58, 68],
    iconanchor:  [29,68],
    popupanchor: [172,2]
})

// create popup overlay
const popup = L.popup({
    closeButton:    false,
    className:      'map-popup',
    minWidth:       240,
    minHeight:      240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg" > </a>')

L
.marker([-21.1771336,-47.8321188], { icon})
.addTo(map)
.bindPopup(popup)



/*    
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
-- como era o padrão inicial
    */