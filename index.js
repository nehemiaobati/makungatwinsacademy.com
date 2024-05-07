// Initialize and add the map
let map;

async function initMap() {
  // The location of Makunga Twins Academy 
  const position = { lat: 0.311019, lng: 34.630671 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  //map  details

  // The map, centered at Makunga Twins Academy 
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Makunga Twins Academy 
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Makunga Twins Academy",
  });
}

initMap();