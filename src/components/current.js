import React from 'react';
import {connect} from 'react-redux';
import Skycons from 'react-skycons'
import Clock from 'react-live-clock';

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
                                    ?  Math.round(props.data.currently.apparentTemperature) + " °F"
                                    : convert(props.data.currently.apparentTemperature) + " °C"}</li>
                            <li className="list-group-item">{props.data.currently.summary}</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div className="current-weather">
                        <Clock format={'h:mm:ss A'} ticking={true} timezone={props.data.timezone} />
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
                    </div>
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item">Humidity: {Math.round(props.data.currently.humidity * 100) + "%"}</li>
                            <li className="list-group-item">Precipitation: {Math.round(props.data.currently.precipProbability * 100) + "%"}</li>
                            <li className="list-group-item">Wind: {props.data.currently.humidity + " mph"}</li>
                        </ul>
                    </div>
                </div>
                <div>{props.data.hourly.summary}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    data: state.data, 
    mode: state.mode,
});

export default connect(mapStateToProps, null)(Current)