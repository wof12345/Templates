// import L from './node_modules/leaflet/src/Leaflet'
let currentPos = {
  long: 0,
  lat: 0,
};

var geoJson = {
  type: "FeatureCollection",
  myTag: "geoJson",
  features: [
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Point",
        coordinates: [-989.6484375000001, 61.438767493682825],
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-989.6484375000001, 60.75915950226991],
          [-1130.9765625, -10.141931686131018],
          [-947.1093750000001, -25.48295117535531],
          [-976.9921875, 36.03133177633187],
        ],
      },
    },
  ],
};

var map = new L.Map("map", {
  center: [0, 0],
  zoom: 0,
  layers: [
    new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }),
  ],
});

let pointPlay = L.geoJSON(geoJson).addTo(map);
console.log(pointPlay);

setInterval(() => {
  pointPlay = L.geoJSON(geoJson).addTo(map);

  console.log(geoJson.features[0].geometry.coordinates);

  movePointerFunction(100, generateNumber(1, 0), generateNumber(1, 0));

  map.removeLayer(pointPlay);
}, 3000);

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

function generateNumber(upper, lower) {
  return Math.floor(Math.random() * (upper - lower + 1));
}
