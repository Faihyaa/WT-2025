function initMap() { 
  const cafeLocation = { lat: 3.2583, lng: 101.7336 }
  const map = new google.maps.Map(document.getElementById("map"), { 
      zoom: 15, 
      center: cafeLocation, 
  }); 
  new google.maps.Marker({ 
      position: cafeLocation, 
      map: map, 
      title: "Café Location", 
  }); 
}

function navigateTo(section) { 

  document.getElementById('homeSection').style.display = 'none'; 
  document.getElementById('stallSection').style.display = 'none'; 
  document.getElementById('aboutSection').style.display = 'none'; 

  if (section === 'home') { 
      document.getElementById('homeSection').style.display = 'block'; 
  } else if (section === 'stall') { 
      document.getElementById('stallSection').style.display = 'block'; 
  } else if (section === 'about') { 
      document.getElementById('aboutSection').style.display = 'flex';
      initMap(); 
  } 
}
