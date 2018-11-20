const initialState = {
    isFetching: false,
    isLoaded: false,
    isError: false,
    data: undefined,
    location: undefined,
    mode: "F"
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_MODE":
            return Object.assign({}, state, {mode: action.mode})
        case "FETCH_BEGIN":
            return Object.assign({}, state, {isFetching: true, isLoaded: false, data: undefined, location: undefined})
        case "FETCH_SUCCESS":
            return Object.assign({}, state, {isFetching: false, isLoaded: true, data: action.payload, location: action.location, isError: false})
        case "FETCH_ERROR":
            return Object.assign({}, state, {isFetching: false, isError: true})
        default:
            return state;
    }
  };

  