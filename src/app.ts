/// <reference path="./typings/tsd.d.ts" />
import L = require('leaflet');

// 普段は leaflet.js を指定している script タグから
// 画像の場所を自動的に探してくれるのだけど，
// 今回は leaflet.js という名前のファイルがないので明示的に指定する
L.Icon.Default.imagePath = './bower_components/leaflet/dist/images'

let map = L.map('map').setView([43.068654, 141.35081059999993], 14);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.068654, 141.35081059999993]).addTo(map)
    .bindPopup('ここに札幌駅がございます．')
    .openPopup();
