import React from 'react';

const Search = (props) => {
    return (
        <div className="input-container">
            <form className="my-3 w-100" onSubmit={props.handleSubmit}>
                <div className="input-group">
                    <input
                        className="form-control  border-primary"
                        onChange={props.handleChange}
                        value={props.input}
                        placeholder="Enter a location"
                        required />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">Search</button>
                    </div>
                </div>
            </form>
            <div>
                <button className="btn btn-success ml-3" type="text" onClick={props.handleGeolocator}><i className="fas fa-location-arrow"></i></button>
            </div>
        </div>
    )
}

export default Search