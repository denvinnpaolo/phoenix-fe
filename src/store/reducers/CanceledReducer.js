import {
    FETCH_CANCELED_FAILURE,
    FETCH_CANCELED_LOADING,
    FETCH_CANCELED_SUCCESS
} from '../actions/index.js';

const initalState ={
    canceledData : [],
    error: null,
    isFetching: false
};


function CanceledReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_CANCELED_LOADING:
            return {
                isFetching: true,
            }
        case FETCH_CANCELED_SUCCESS:
            return {
                isFetching: false,
                canceledData: action.payload
            }
        case FETCH_CANCELED_FAILURE:
            return {
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default CanceledReducer;