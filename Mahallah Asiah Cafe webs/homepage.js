/*function initMap() {
  const cafeLocation = { lat: 3.2583, lng: 101.7336 };
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

// Function to navigate to different pages
function navigateTo(section) {
  if (section === 'home' || section === 'stall' || section === 'about') {
    window.location.href = page + '.html';  // Navigate to the respective HTML page
  }

  // For showing and hiding sections in the current page
  else {
    // Hide all sections
    document.getElementById('homeSection').style.display = 'none';
    document.getElementById('stallSection').style.display = 'none';
    document.getElementById('aboutSection').style.display = 'none';
    
    // Show the appropriate section
    if (page === 'home') {
      document.getElementById('homeSection').style.display = 'block';
    } else if (page === 'stall') {
      document.getElementById('stallSection').style.display = 'block';
    } else if (page === 'about') {
      document.getElementById('aboutSection').style.display = 'flex';
      
      // Initialize the map if it's the first time loading the about section
      if (!document.getElementById("map").innerHTML) {
        initMap();  // Initialize map if it's not loaded yet
      }
    }
  }
}*/

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
  // Hide all sections
  document.getElementById('homeSection').style.display = 'none'; 
  document.getElementById('stallSection').style.display = 'none'; 
  document.getElementById('aboutSection').style.display = 'none'; 

  // Show the appropriate section
  if (section === 'home') { 
      document.getElementById('homeSection').style.display = 'block'; 
  } else if (section === 'stall') { 
      document.getElementById('stallSection').style.display = 'block'; 
  } else if (section === 'about') { 
      document.getElementById('aboutSection').style.display = 'flex';
      initMap(); 
  } 
}

