export {
    FETCH_VIEWBYID_FAILURE,
    FETCH_VIEWBYID_LOADING,
    FETCH_VIEWBYID_SUCCESS
} from '../actions/index.js'

const initialState = {
    postedById : [],
    error: null,
    isFetching: false
}

function ViewReducer(state = initialState, action){
    switch(action.type){
        case FETCH_VIEWBYID_LOADING:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_VIEWBYID_SUCCESS:
            return{
                ...state,
                postedById: action.payload,
                isFetching: false
            }
        case FETCH_VIEWBYID_FAILURE:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state
    }
}

export default ViewReducer;