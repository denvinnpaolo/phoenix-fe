import {
    FETCH_COMPLETED_FAILURE,
    FETCH_COMPLETED_LOADING,
    FETCH_COMPLETED_SUCCESS
} from '../actions/index.js';

const initalState ={
    completedData : [],
    error: null,
    isFetching: false
};


function CompletedReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_COMPLETED_LOADING:
            return {
                isFetching: true,
            }
        case FETCH_COMPLETED_SUCCESS:
            return {
                isFetching: false,
                completedData: action.payload
            }
        case FETCH_COMPLETED_FAILURE:
            return {
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default CompletedReducer;