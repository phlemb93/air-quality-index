import { useState } from "react";

export const useLocation = (latitude, longitude) => {
    const [location, setLocation] = useState(null);

    const reverseGeocode = (lat, lon) => {
        const geocoder = new window.google.maps.Geocoder();
        
        const latLng = { lat: lat, lng: lon };
        
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === "OK") {
                if (results[0]) {
                    setLocation(results[0]);
                } else {
                    console.log("No results found");
                }
            } else {
                console.log("Geocoder failed due to: " + status);
            }
        });
    };

    // Reverse geocoding for coordinates
    reverseGeocode(latitude, longitude);

    return { location };
};
