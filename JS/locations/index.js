document.getElementById('getLocationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        console.log(navigator.geolocation,"hehe");
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

function showPosition(position) {
    console.log(position,"locationsss");
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    document.getElementById('latitude').textContent = latitude;
    document.getElementById('longitude').textContent = longitude;
    document.getElementById('locationInfo').style.display = 'block';

    // Initialize and display the map
    const mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
    };
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // Add a marker at the user's location
    new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "You are here!",
    });
}

function showError(error) {
    console.log(error,"errrr");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
