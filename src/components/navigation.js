import React from 'react';

const Navigation = (props) => {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="navbar-brand">
                <div className="navbar-item">
                Weather
                </div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label id="F" onClick={props.handleToggle} className="btn btn-primary active">
                        <input type="radio" name="options" id="option1" />°F
                    </label>
                    <label id="C" onClick={props.handleToggle} className="btn btn-primary">
                        <input type="radio" name="options" id="option2" />°C
                    </label>
                    </div>
                </div>
            </div>
       </nav>
    )
}

export default Navigation