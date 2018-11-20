import React, {Component} from 'react';
import {connect} from 'react-redux';
import Forecast from './components/forecast'
import Current from './components/current'
import Navigation from './components/navigation'
import Search from './components/search'

import * as actions from './redux/actions'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: undefined,
            prev: undefined,
            current: false,
            mode: "F"
        }
    }

    componentDidMount = () => {
        this.handleGeolocator()
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        if(this.state.input !== this.state.prev) {
            this.props.fetchWeather(this.state.input)
            this.setState({current: false, prev: this.state.input})
        }
    }

    handleToggle = (e) => {
        this.setState({mode: e.target.id})
    }

    handleGeolocator = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if(!this.state.current) {
                    this.props.fetchWeather(`${position.coords.latitude}, ${position.coords.longitude}`)
                    this.setState({current: true})
                }
            });
        }
    }

    render() {
        return (
            <div className="App">
                <Navigation handleToggle={this.handleToggle}/>
                <div className="container">
                    <Search 
                        handleGeolocator={this.handleGeolocator}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        input={this.state.input}
                    />

                    {this.props.isFetching && 
                        (<div className="alert alert-primary" role="alert">
                            Fetching data ...
                        </div>)
                    }

                    {this.props.location && 
                        (<div className="alert alert-success" role="alert">
                            {this.props.location}
                        </div>)
                    }

                    {this.props.error && 
                        (<div className="alert alert-danger" role="alert">
                        Unable to find location. Try Again.
                        </div>)
                    }

                    {this.props.isLoaded && (
                        <div>
                            <Current
                                data={this.props.data}
                                location={this.props.location}
                                mode={this.state.mode}/>
                            <Forecast data={this.props.data} mode={this.state.mode}/>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    data: state.data, 
    error: state.error, 
    isFetching: state.isFetching, 
    location: state.location, 
    isLoaded: state.isLoaded
});

const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (location) => dispatch(actions.fetchWeather(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
