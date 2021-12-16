function initMap() {
    // The location of Uluru
    const sheargenius = { lat: 33.905724, lng: -118.352737 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: sheargenius,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: sheargenius,
      map: map,
    });
  }; 


