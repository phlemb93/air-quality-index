import { 
    no2BorderColor, 
    no2Color, 
    no2Condition, 
    o3BorderColor, 
    o3Color, 
    o3Condition, 
    pm10BorderColor, 
    pm10Color, 
    pm10Condition, 
    pm2_5BorderColor, 
    pm2_5Color, 
    pm2_5Condition, 
    so2BorderColor, 
    so2Color, 
    so2Condition } from "../utils/utils";

 
const Pollutants = ({ data }) => {

    const pollutants = data.data.list[0].components;
    const lessThan = "<";

  return (
    <div className="pollutants">
        {/*  SO2 - Sulfur Dioxide */}
        <div className="pollutant">
            <div className="left">
                <p>SO<sub>2</sub><span> (Sulfur Dioxide)</span></p>
                <div className="mid">
                    { so2Condition(pollutants.so2)}
                    <div style={so2Color(pollutants.so2)}></div>
                </div>
                <span>{`${pollutants.so2}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right" style={so2BorderColor(pollutants.so2)}>
                <p>{pollutants.so2}</p>
            </div>
        </div>

        {/*  NO2 - Nitrogen Dioxide*/}
        <div className="pollutant">
            <div className="left">
                <p>NO<sub>2</sub><span> (Nitrogen Dioxide)</span></p>
                <div className="mid">
                    { no2Condition(pollutants.no2)}
                    <div style={no2Color(pollutants.no2)}></div>
                </div>
                <span>{`${pollutants.no2}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right" style={no2BorderColor(pollutants.no2)}>
                <p>{pollutants.no2}</p>
            </div>
        </div>

        {/*  PM2_5 */}
        <div className="pollutant">
            <div className="left">
                <p>PM<sub>2.5</sub><span> {`(Particles ${lessThan} 2.5µ/m)`}</span></p>
                <div className="mid">
                    { pm2_5Condition(pollutants.pm2_5)}
                    <div style={pm2_5Color(pollutants.pm2_5)}></div>
                </div>
                <span>{`${pollutants.pm2_5}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right" style={pm2_5BorderColor(pollutants.pm2_5)}>
                <p>{pollutants.pm2_5}</p>
            </div>
        </div>

        {/*  PM10 */}
        <div className="pollutant">
            <div className="left">
                <p>PM<sub>10</sub><span> {`(Particles ${lessThan} 10µ/m)`}</span></p>
                <div className="mid">
                    { pm10Condition(pollutants.pm10)}
                    <div style={pm10Color(pollutants.pm10)}></div>
                </div>
                <span>{`${pollutants.pm10}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right" style={pm10BorderColor(pollutants.pm10)}>
                <p>{pollutants.pm10}</p>
            </div>
        </div>

        {/*  O3 - Ozone */}
        <div className="pollutant">
            <div className="left">
                <p>O<sub>3</sub><span> (Ozone)</span></p>
                <div className="mid">
                    { o3Condition(pollutants.o3)}
                    <div style={o3Color(pollutants.o3)}></div>
                </div>
                <span>{`${pollutants.o3}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right" style={o3BorderColor(pollutants.o3)}>
                <p>{pollutants.o3}</p>
            </div>
        </div>

        {/*  CO - Carbon Monoxide */}
        <div className="pollutant">
            <div className="left">
                <p>CO<span> (Carbon Monoxide)</span></p>
                <div className="mid">
                    <h3>Ungraded</h3>
                    <div style={{backgroundColor:"rgb(104, 104, 104)"}}></div>
                </div>
                <span>{`${pollutants.co}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right">
                <p>{pollutants.co}</p>
            </div>
        </div>

        {/*  NH3 - Ammonia */}
        <div className="pollutant">
            <div className="left">
                <p>NH<sub>3</sub><span> (Ammonia)</span></p>
                <div className="mid">
                    <h3>Ungraded</h3>
                    <div style={{backgroundColor:"rgb(104, 104, 104)"}}></div>
                </div>
                <span>{`${pollutants.nh3}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right">
                <p>{pollutants.nh3}</p>
            </div>
        </div>

        {/*  NO - Nitrogen Monoxide  */}
        <div className="pollutant">
            <div className="left">
                <p>NO<span> (Nitrogen Monoxide)</span></p>
                <div className="mid">
                    <h3>Ungraded</h3>
                    <div style={{backgroundColor:"rgb(104, 104, 104)"}}></div>
                </div>
                <span>{`${pollutants.no}µ/m`}<sup>3</sup></span>
            </div>
            <div className="right">
                <p>{pollutants.no}</p>
            </div>
        </div>
    </div>
  )
}

export default Pollutants