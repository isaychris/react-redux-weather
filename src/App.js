import React, {Component} from 'react';
import {connect} from 'react-redux';
import Forecast from './components/forecast'
import Current from './components/current'
import Navigation from './components/navigation'
import * as actions from './redux/actions'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            mode: "F"
        }
    }

    componentDidMount = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.props.fetchWeather(`${position.coords.latitude}, ${position.coords.longitude}`)
            });
        }
    }

    handleChange = (e) => {
        this.setState({input: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchWeather(this.state.input)
    }

    handleToggle = (e) => {
        this.setState({mode: e.target.id})
    }

    render() {
        return (
            <div className="App">
                <Navigation handleToggle={this.handleToggle}/>
                <div className="container">
                    <form className="my-3" onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <input
                                className="form-control  border-primary"
                                onChange={this.handleChange}
                                value={this.state.input}
                                placeholder="Enter a location"
                                required />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="submit">Search</button>
                            </div>
                        </div>
                    </form>

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

                    <div className="error-message">
                        {this.props.error && <div className="alert alert-danger" role="alert">
                            Unable to find location. Try Again.
                            </div>}
                    </div>

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
