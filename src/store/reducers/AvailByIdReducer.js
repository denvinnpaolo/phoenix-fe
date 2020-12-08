import {
    FETCH_AVAILBYID_FAILURE,
    FETCH_AVAILBYID_LOADING,
    FETCH_AVAILBYID_SUCCESS
} from '../actions/index.js'

const initalState ={
    currentAvail : {},
    error: null,
    isFetching: false
};

function AvailByIdReducer(state = initalState, action) {
    switch(action.type) {
        case FETCH_AVAILBYID_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_AVAILBYID_SUCCESS:
            return {
                ...state,
                isFetching: false,
                currentAvail: action.payload
            }
        case FETCH_AVAILBYID_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default AvailByIdReducer;