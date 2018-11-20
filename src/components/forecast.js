import React from 'react';
import Skycons from 'react-skycons'

const Forecast = (props) => {
    const convert = (F) => {
        return Math.round((F -32) * 5/9)
    }

    const forecastlist = props.data.daily.data.map((obj, index) => {
        if(index < 7) {
            let day = new Date(obj.time * 1000).getUTCDay()
            let week = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"]
            let icon = obj.icon.replace(/-/g, "_").toUpperCase()
            
            return (
                <div key={index} className="col-lg-1">
                    <section>
                        {week[day]} <br/>
                        <Skycons width="128" height="128"style={{width: '100%', height: 'auto', maxWidth: '150px'}} color='black' icon={icon} autoplay={true} />
                        {props.mode === "F" ? obj.temperatureMax + " °F": convert(obj.temperatureMax) + " °C"}
                    </section>
                </div>
            ) 
        }
        
        return null
    })

    return (
        <div className="forecast card border my-3">
            <div className="card-header"><h4>7 Day Forecast</h4></div>
                <div class="card-body text-secondary">
                    <div className="row seven-cols">
                    {forecastlist}
                    </div>
                {props.data.daily.summary}
            </div>
        </div>
    );
  }

export default Forecast;