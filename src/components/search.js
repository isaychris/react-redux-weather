import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: "",
            prev: "",
            current: false,
        }
    }

    componentDidMount = () => {
        this.props.fetchWeather(`Los Angeles, CA, USA`)
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

    handleGeolocator = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if(!this.state.current) {
                    this.props.fetchWeather(`${position.coords.latitude}, ${position.coords.longitude}`)
                    this.setState({current: true, input: ""})
                }
            });
        }
    }

    render() {
        return (
            <div className="input-container">
                <form className="my-3 w-100" onSubmit={this.handleSubmit}>
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
                <div>
                    <button title="Current location" className="btn btn-success ml-3" type="text" onClick={this.handleGeolocator}><i className="fas fa-location-arrow"></i></button>
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({
    fetchWeather: (location) => dispatch(actions.fetchWeather(location))
})

export default connect(null, mapDispatchToProps)(Search)
