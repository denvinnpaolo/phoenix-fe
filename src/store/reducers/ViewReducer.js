export {
    FETCH_VIEWBYID_FAILURE,
    FETCH_VIEWBYID_LOADING,
    FETCH_VIEWBYID_SUCCESS
} from '../actions/index.js'

const initialState = {
    postedById = [],
    error: null,
    isFetching: false
}