import { useState } from 'react'

export const useCoordinate = (address) => {

    const [coords, setCoords] = useState({})

    const getCoordinates = async (address) => {
        const apiKey = 'YOUR_API_KEY';
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    
        try {
            const response = await fetch(url);
            const data = await response.json();
    
            if (data.status === 'OK') {
                const { lat, lng } = data.results[0].geometry.location;
                setCoords({lat, lng})
                // return { latitude: lat, longitude: lng };
            } else {
                throw new Error(data.status);
            }
        } catch (error) {
            console.error('Error fetching coordinates:', error);
        }
    };
    
    getCoordinates(address);

  return { coords }
}

