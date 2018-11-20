import React from 'react';
import Skycons from 'react-skycons'

const Current = (props) => {
    const convert = (F) => {
        return Math.round((F - 32) * 5 / 9)
    }

    let icon = props.data.currently.icon.replace(/-/g, "_").toUpperCase()

    return (
        <div className="current card border my-3">
            <div className="card-header">
                <h4>Current Forecast</h4>
            </div>
            <div className="card-body text-secondary">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">{props.data.timezone}</li>
                            <li className="list-group-item">{props.mode === "F"
                                    ? props.data.currently.temperature + " °F"
                                    : convert(props.data.currently.temperature) + " °C"}</li>
                            <li className="list-group-item">{props.data.currently.summary}</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <Skycons
                            width='128'
                            height='128'
                            style={{
                            width: '128px',
                            height: '128px'
                        }}
                            color='black'
                            icon={icon}
                            autoplay={true}/>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">Humidity: {props.data.currently.humidity + "%"}</li>
                            <li className="list-group-item">Percepitation: {props.data.currently.precipProbability + "%"}</li>
                            <li className="list-group-item">Wind: {props.data.currently.humidity + " mph"}</li>
                        </ul>
                    </div>
                </div>
                <div>{props.data.hourly.summary}</div>
            </div>
        </div>
    );
}

export default Current;