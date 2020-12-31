import {
    CREATE_ARCHIVED_FAILURE,
    CREATE_CANCELED_START,
    CREATE_ARCHIVED_SUCCESS,
    FETCH_ARCHIVED_FAILURE,
    FETCH_ARCHIVED_LOADING,
    FETCH_ARCHIVED_SUCCESS,
    CREATE_ARCHIVED_START
} from '../actions/index.js';

const initialState = {
    archiveData: {},
    newArchive: {},
    isFetching: false,
    error: null
};

function ArchiveReducer(state = initialState, action){
    switch(action.type){
        case FETCH_ARCHIVED_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_ARCHIVED_SUCCESS:
            return {
                ...state,
                isFetching:false,
                archiveData: action.payload
            }
        case FETCH_ARCHIVED_FAILURE:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }
        case CREATE_ARCHIVED_START:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_ARCHIVED_SUCCESS:
            return {
                ...state,
                isFetching:false,
                archiveData: action.payload
            }
        case CREATE_ARCHIVED_FAILURE:
            return {
                ...state,
                isFetching:false,
                error: action.payload
            }
        default:
            return state
    }
}

export default ArchiveReducer;