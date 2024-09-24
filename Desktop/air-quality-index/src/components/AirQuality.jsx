import React from 'react'
import { aqiCondition, aqiDescription, aqiStyle } from '../utils/utils';
import { useLocation } from '../hooks/useLocation';

const AirQuality = ({ data }) => {

   const aqi = data.data.list[0].main.aqi;
   const latitude = data.data.coord.lat;
   const longitude = data.data.coord.lon;

const { location } = useLocation(latitude, longitude);
const address = location && `${location.address_components[1].short_name}, ${location.address_components[2].short_name}, ${location.address_components[5].long_name}`

   
  return (
    <div className='air-quality'>
    <div className='top'>
        <h2>Today's Air Quality</h2>
        <p>{location ? address : `Latitude: ${latitude} Longitude: ${longitude}`}</p>
    </div>
    <div className='bottom'>
        <div>
            <p style={aqiStyle(aqi)}>{ aqi }</p>
        </div>
        <div>
            <h3>Air Quality Index (AQI)</h3>
            { aqiCondition(aqi) }
            { aqiDescription(aqi) }
        </div>
    </div>
    </div>
  )
}

export default AirQuality