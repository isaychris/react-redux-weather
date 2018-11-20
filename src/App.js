import React, {Component} from 'react';
import {connect} from 'react-redux';
import Forecast from './components/forecast'
import Current from './components/current'
import Navigation from './components/navigation'
import Search from './components/search'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation/>

                <div className="container">
                    <Search/>
                    
                    {this.props.isFetching && 
                        (<div className="alert alert-primary" role="alert">
                        <i className="fa fa-spinner fa-spin"></i> 
                        </div>)
                    }

                    {this.props.location && 
                        (<div className="alert alert-success" role="alert">
                            {this.props.location}
                        </div>)
                    }

                    {this.props.isError && 
                        (<div className="alert alert-danger" role="alert">
                        Unable to find location. Try Again.
                        </div>)
                    }

                    {this.props.isLoaded && (
                        <div className="main-content">
                            <Current/>
                            <Forecast/>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    isError: state.isError, 
    isFetching: state.isFetching, 
    isLoaded: state.isLoaded,
    location: state.location
});

export default connect(mapStateToProps)(App)