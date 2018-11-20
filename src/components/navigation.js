import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../redux/actions'

const Navigation = (props) => {
    const handleToggle = (e) => {
        props.toggleMode(e.target.id)
    }

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
                    <label id="F" onClick={handleToggle} className="btn btn-primary active">
                        <input type="radio" name="options" id="option1" />°F
                    </label>
                    <label id="C" onClick={handleToggle} className="btn btn-primary">
                        <input type="radio" name="options" id="option2" />°C
                    </label>
                    </div>
                </div>
            </div>
       </nav>
    )
}

const mapDispatchToProps = (dispatch) => ({
    toggleMode: (unit) => dispatch(actions.toggleMode(unit))
})

export default connect(null, mapDispatchToProps)(Navigation)
