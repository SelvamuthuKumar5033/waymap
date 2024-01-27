

let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: {lat: 11.127123, lng: 78.656891},
    zoom: 10,
  });
}
// const location = new map([
//   Ariyalur
  
// ])