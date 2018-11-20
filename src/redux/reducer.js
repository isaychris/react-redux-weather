const initialState = {
    isFetching: false,
    isLoaded: false,
    data: undefined,
    location: undefined,
    error: false,
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_BEGIN":
            return Object.assign({}, state, {isFetching: true, isLoaded: false, data: undefined, location: undefined})
        case "FETCH_SUCCESS":
            return Object.assign({}, state, {isFetching: false, isLoaded: true, data: action.payload, location: action.location, error: false})
        case "FETCH_ERROR":
            return Object.assign({}, state, {isFetching: false, error: true})
        default:
            return state;
    }
  };

  