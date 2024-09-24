export const aqiStyle = (aqi) => {
    if(aqi < 4){
        return {
            border: "6px solid #34A752"
        }
    } else if (aqi > 3 && aqi < 7){
        return {
            border: "6px solid #E0BA4A"
        }
    } else {
        return {
            border: "6px solid #FF5F53"
        }
    }
}

export const aqiCondition = (aqi) => {
if(aqi < 4){
    return <h2>Good</h2>
} else if (aqi > 6){
    return <h2>Unhealthy</h2>
} else {
    return <h2>Moderate</h2>
}
}

export const aqiDescription = (aqi) => {
if(aqi < 4){
    return <p>Air quality is excellent, with minimal to no risk to health. The air is clean and safe for all individuals, including those who are more sensitive to air pollution. Enjoy outdoor activities without any concerns.</p>
} else if (aqi > 6){
    return <p>Air quality is unhealthy, and everyone may begin to experience health effects. Sensitive individuals, such as those with preexisting respiratory conditions, are at a higher risk of experiencing more serious effects. It's advisable to limit prolonged outdoor activities, especially for sensitive groups.</p>
} else {
    return  <p>Air quality is generally acceptable. However, some pollutants may pose a moderate health concern for a very small number of sensitive individuals, such as those with respiratory issues. Most people can continue outdoor activities as normal.</p>
}
}


{/*  SO2 - Sulfur Dioxide */}
export const so2Condition = (value => {
    if(value <= 266){
        return <h4>Low</h4>
    } else if(value >= 533){
        return <h4>High</h4>
    } else {
        return <h4>Moderate</h4>
    }
 })
export const so2Color = (value => {
    if(value <= 266){
        return { backgroundColor: "#34A752" }
    } else if(value >= 533){
        return { backgroundColor: "#FF5F53"}
    } else {
        return { backgroundColor: "#E0BA4A"}
    }
 })
export const so2BorderColor = (value => {
    if(value <= 266){
        return { border: "3px solid #34A752" }
    } else if(value >= 533){
        return { border: "3px solid #FF5F53"}
    } else {
        return { border: "3px solid #E0BA4A"}
    }
 })

 {/*  NO2 - Nitrogen Dioxide*/}
export const no2Condition = (value => {
    if(value <= 200){
        return <h4>Low</h4>
    } else if(value >= 401){
        return <h4>High</h4>
    } else {
        return <h4>Moderate</h4>
    }
 })
export const no2Color = (value => {
    if(value <= 200){
        return { backgroundColor: "#34A752" }
    } else if(value >= 401){
        return { backgroundColor: "#FF5F53"}
    } else {
        return { backgroundColor: "#E0BA4A"}
    }
 })
export const no2BorderColor = (value => {
    if(value <= 200){
        return { border: "3px solid #34A752" }
    } else if(value >= 401){
        return { border: "3px solid #FF5F53"}
    } else {
        return { border: "3px solid #E0BA4A"}
    }
 })

{/*  PM2_5 */}
export const pm2_5Condition = (value => {
    if(value <= 35){
        return <h4>Low</h4>
    } else if(value >= 54){
        return <h4>High</h4>
    } else {
        return <h4>Moderate</h4>
    }
 })
export const pm2_5Color = (value => {
    if(value <= 35){
        return { backgroundColor: "#34A752" }
    } else if(value >= 54){
        return { backgroundColor: "#FF5F53"}
    } else {
        return { backgroundColor: "#E0BA4A"}
    }
 })
export const pm2_5BorderColor = (value => {
    if(value <= 35){
        return { border: "3px solid #34A752" }
    } else if(value >= 54){
        return { border: "3px solid #FF5F53"}
    } else {
        return { border: "3px solid #E0BA4A"}
    }
 })


{/*  PM10 */}
export const pm10Condition = (value => {
    if(value <= 50){
        return <h4>Low</h4>
    } else if(value >= 76){
        return <h4>High</h4>
    } else {
        return <h4>Moderate</h4>
    }
 })
export const pm10Color = (value => {
    if(value <= 50){
        return { backgroundColor: "#34A752" }
    } else if(value >= 76){
        return { backgroundColor: "#FF5F53"}
    } else {
        return { backgroundColor: "#E0BA4A"}
    }
 })
export const pm10BorderColor = (value => {
    if(value <= 50){
        return { border: "3px solid #34A752" }
    } else if(value >= 76){
        return { border: "3px solid #FF5F53"}
    } else {
        return { border: "3px solid #E0BA4A"}
    }
 })

 {/*  O3 - Ozone */}
export const o3Condition = (value => {
    if(value <= 100){
        return <h4>Low</h4>
    } else if(value >= 161){
        return <h4>High</h4>
    } else {
        return <h4>Moderate</h4>
    }
 })
export const o3Color = (value => {
    if(value <= 200){
        return { backgroundColor: "#34A752" }
    } else if(value >= 401){
        return { backgroundColor: "#FF5F53"}
    } else {
        return { backgroundColor: "#E0BA4A"}
    }
 })
export const o3BorderColor = (value => {
    if(value <= 200){
        return { border: "3px solid #34A752" }
    } else if(value >= 401){
        return { border: "3px solid #FF5F53"}
    } else {
        return { border: "3px solid #E0BA4A"}
    }
 })