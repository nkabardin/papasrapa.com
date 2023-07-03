let map;
let markers = [
  {name: 'Groningen, Vera Zienema', location: {lat: 53.2194, lng: 6.5665}},
  {name: 'Beijing, 798 Art Zone', location: {lat: 39.9042, lng: 116.4074}},
  {name: 'Amsterdam, Filmhuis Cavia', location: {lat: 52.3676, lng: 4.9041}},
  {name: 'Bryansk, Can', location: {lat: 53.2436, lng: 34.3642}},
  {name: 'Moscow, Gallery Krasnokholmskaya', location: {lat: 55.7512, lng: 37.6184}},
  {name: 'Rostov On Don, Creative Space D30', location: {lat: 47.2357, lng: 39.7015}},
  {name: 'Vologda, Modern Art Festival', location: {lat: 59.2205, lng: 39.8915}},
  {name: 'Barnaul, Art Gallery “Republic IZO”', location: {lat: 53.3548, lng: 83.7696}},
  {name: 'Moscow, Cultural Center DOM', location: {lat: 55.7512, lng: 37.6184}},
  {name: 'Saint Petersburg, Gallery of Experimental Sound', location: {lat: 59.9311, lng: 30.3609}},
  {name: 'Murmansk, Regional Museum of Art', location: {lat: 68.9715, lng: 33.0816}},
  {name: 'Rostov Oblast, Art-Farm Margaritovo', location: {lat: 47.7516, lng: 39.8673}},
  {name: 'Innsbruck, Leokino / Diametrale Festival', location: {lat: 47.2692, lng: 11.4041}},
  {name: 'Vladimir, Center of Modern Art “Fligel”', location: {lat: 56.1290, lng: 40.4066}},
  {name: 'Tbilisi, F0RTH.SPACE', location: {lat: 41.7151, lng: 44.8271}},
  {name: 'Zelenograd, Kinematograf', location: {lat: 55.9825, lng: 37.1814}},
  {name: 'Novosibirsk, Gallery “POST”', location: {lat: 55.0084, lng: 82.9357}},
  {name: 'Warsaw, Kino Luna / Sputnik Festival', location: {lat: 52.2297, lng: 21.0122}},
  {name: 'Lausanne, Ecole de Jazz et de Musique / LUFF Festival', location: {lat: 46.5196, lng: 6.6323}},
  {name: 'Montenegro, Slovonovo Festival', location: {lat: 42.7087, lng: 19.3744}},
  {name: 'Yaroslavl, Art-Space “Teplo”', location: {lat: 57.6261, lng: 39.8845}},
  {name: 'Moscow, Uspeh Bar', location: {lat: 55.7512, lng: 37.6184}},
  {name: 'Saint Petersburg, “Research Institute of Noise”', location: {lat: 59.9311, lng: 30.3609}},
  {name: 'Kazan, S-M-E-N-A', location: {lat: 55.7961, lng: 49.1061}},
  {name: 'Samara, Victoria Underground', location: {lat: 53.2415, lng: 50.2212}},
  {name: 'Moscow, ArtDocFest / Kinoteatr Oktyabr', location: {lat: 55.7512, lng: 37.6184}},
];

function initMap() {
  let mapOptions = {
    zoom: 2,
    center: markers[0].location
  };

  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  for(let i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }
}

function addMarker(properties) {
  let marker = new google.maps.Marker({
    position: properties.location,
    map: map,
    title: properties.name
  });

  let infoWindow = new google.maps.InfoWindow({
    content: properties.name
  });

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
}
