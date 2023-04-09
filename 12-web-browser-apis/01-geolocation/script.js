// Takes in current location
function curSuccess(position) {
    const coords = position.coords;


    console.log(`Lat: ${coords.latitude}`);
    console.log(`Long: ${coords.longitude}`);
    console.log(`Within: ${coords.accuracy} meters`);
}


// Displays any errors if not authorized or other 
function curError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}


const curOptions = {
    enableHighAccuracy: true, // Will use GPS if available
    timeout: 5000, // Timeout for trying location
    maximumAge: 0, // Do not use a cached position
};


// getCurrentPosition()                 3 functions as arguments
navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);



// watchPosition()


const target = {
    latitude: 41.3874387,
    longitude: -71.394839
}


function watchSuccess(position) {
    const coords = position.coords;

    if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
        console.log('We have reached our destination')
    }
}


// Displays any errors if not authorized or other 
function watchError(err) {
    console.log(`Error: ${err.code} - ${err.message}`);
}


const watchOptions = {
    enableHighAccuracy: true, // Will use GPS if available
    timeout: 5000, // Timeout for trying location
    maximumAge: 0, // Do not use a cached position
};


navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
