let titel = document.getElementsByTagName('title')[0].innerHTML;
let coordinaten = [
    [51.555973, -0.279672],
[48.218967, 11.623746],
[41.380898, 2.122820],
[40.453053, -3.688344],
[53.430759, -2.961425],
[45.478489, 9.122150]];

let coordinaat =[];
if(titel=="Alpha Kamara voeding"){
    coordinaat=coordinaten[0];
}else if(titel=="u-trip | Allianz Arena"){
    coordinaat=coordinaten[1];
}else if(titel=="u-trip | Camp Nou"){
    coordinaat=coordinaten[2];
}else if(titel=="u-trip | Santiago Bernabeu"){
    coordinaat=coordinaten[3];
}else if(titel=="u-trip | Anfield"){
    coordinaat=coordinaten[4];
}else{
    coordinaat=coordinaten[5];
}

let myMap = L.map('map').setView(coordinaat, 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

/*
 * "Duimspijker" toevoegen
 * locatie precies bepalen
 */
myMap.locate({
    setView: false,
  });
  
  function onLocationFound(e) {
      let radius = e.accuracy;
  
      L.marker(e.latlng).addTo(myMap)
          .bindPopup("Je bevindt zich binnen " + radius + " meters van dit punt");
  
      L.circle(e.latlng, radius).addTo(myMap);
  }
  
myMap.on('locationfound', onLocationFound);
let stadium = L.marker(coordinaat);
stadium.bindPopup(titel.substring(9));
stadium.addTo(myMap);

/*
 * Huidige locatie tonen
 */


