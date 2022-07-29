// import L from './node_modules/leaflet/src/Leaflet'
let currentPos = {
  long: 0,
  lat: 0,
};

var southWest = L.latLng(-89.92732325125809, -205.4687500000001),
  northEast = L.latLng(89.9273232512581, 187.4687500000001),
  bounds = L.latLngBounds(southWest, northEast);

var map = new L.map("map", {
  center: [0, 0],
  zoom: 0,
  layers: [
    new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
      maxBounds: bounds,
      minZoom: 2,
      maxZoom: 18,
    }),
  ],
}).setView([43.5768, 45.685], 4);

console.log(map.getBounds());

map.setMaxBounds(bounds);

L.control
  .scale({ metric: true, imperial: false, position: "topright" })
  .addTo(map);

L.Control.Watermark = L.Control.extend({
  onAdd: function (map) {
    var img = L.DomUtil.create("img");
    img.src = "logo.png";
    img.style = "width:130px;";
    return img;
  },
  onRemove: function (map) {},
});

L.control.watermark = function (opts) {
  return new L.Control.Watermark(opts);
};

L.control.watermark().addTo(map);

let pointPlay = L.geoJSON(data).addTo(map);
map.removeLayer(data);
// console.log(pointPlay);

// setInterval(() => {
//   pointPlay = L.geoJSON(geoJson).addTo(map);

//   console.log(geoJson.features[0].geometry.coordinates);

//   movePointerFunction(100, generateNumber(1, 0), generateNumber(1, 0));

//   map.removeLayer(pointPlay);
// }, 3000);

function movePointerFunction(velocity, lat, long) {
  console.log(lat, long);

  if (lat && long) {
    geoJson.features[0].geometry.coordinates[0] += velocity;
    geoJson.features[0].geometry.coordinates[1] += velocity;
  }

  if (lat && !long) {
    geoJson.features[0].geometry.coordinates[0] += velocity;
  }

  if (!lat && long) {
    geoJson.features[0].geometry.coordinates[1] += velocity;
  }
}
