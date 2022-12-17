let titel = document.getElementsByTagName('title')[0].innerHTML;
let coordinaten = [
    [50.87294187200265, 4.348167455555822],
[51.30068646445091, 4.408566684409942],
[51.23010394243743, 4.416173344948381]];

let coordinaat =[];
if(titel=="Alpha Kamara voeding" || titel =="Alpha Kamara mentaleGezondheid"){
    coordinaat=coordinaten[0];
}else if(titel=="Alpha Kamara goals"){
    coordinaat=coordinaten[1];
}else{
    coordinaat=coordinaten[2];
}

let myMap = L.map('map').setView(coordinaat, 14);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


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
let locatie = L.marker(coordinaat);
locatie.bindPopup(titel.substring(9));
locatie.addTo(myMap);

