import {
    FETCH_COMPLETED_FAILURE,
    FETCH_COMPLETED_LOADING,
    FETCH_COMPLETED_SUCCESS,
    CREATE_COMPLETED_FAILURE,
    CREATE_COMPLETED_START,
    CREATE_COMPLETED_SUCCESS
} from '../actions/index.js';

const initalState ={
    completedData : {},
    newCompleted:{},
    error: null,
    isFetching: false
};


function CompletedReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_COMPLETED_LOADING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_COMPLETED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                completedData: action.payload
            }
        case FETCH_COMPLETED_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case CREATE_COMPLETED_START:
            return {
                ...state,
                isFetching: true,
            }
        case CREATE_COMPLETED_SUCCESS:
            return {
                ...state,
                isFetching: false,
                newCompleted: action.payload
            }
        case CREATE_COMPLETED_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
                }
        default:
            return state
    }
};

export default CompletedReducer;