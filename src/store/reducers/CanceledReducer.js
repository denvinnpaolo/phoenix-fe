import {
    FETCH_CANCELED_FAILURE,
    FETCH_CANCELED_LOADING,
    FETCH_CANCELED_SUCCESS,
    CREATE_CANCELED_FAILURE,
    CREATE_CANCELED_START,
    CREATE_CANCELED_SUCCESS
} from '../actions/index.js';

const initalState ={
    canceledData : {},
    newCanceled:{},
    error: null,
    isFetching: false
};


function CanceledReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_CANCELED_LOADING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_CANCELED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                canceledData: action.payload
            }
        case FETCH_CANCELED_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CREATE_CANCELED_START:
            return {
                ...state,
                isFetching: true,
            }
        case CREATE_CANCELED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                newCanceled: action.payload
            }
        case CREATE_CANCELED_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
};

export default CanceledReducer;