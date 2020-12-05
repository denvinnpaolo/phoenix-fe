import { axiosWithAuth } from '../../utils/axiosWithAuth.js';

export const FETCH_USER_LOADING = 'FETCH_USER_LOADING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const UNFETCH_USER_LOADING = 'UNFETCH_USER_LOADING';
export const UNFETCH_USER_SUCCESS = 'UNFETCH_USER_SUCCESS';
export const UNFETCH_USER_FAILURE = 'UNFETCH_USER_FAILURE';

export const CREATE_USER_START = 'CREATE_USER_START';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const DELETE_USER_START = 'DELETE_USER_START';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const UPDATE_USER_START = 'UPDATE_USER_START';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const FETCH_PICKUP_FAILURE = 'FETCH_PICKUP_FAILURE';
export const FETCH_PICKUP_LOADING = 'FETCH_PICKUP_LOADING';
export const FETCH_PICKUP_SUCCESS = 'FETCH_PICKUP_SUCCESS';

export const FETCH_AVAILABLE_FAILURE = 'FETCH_AVAILABLE_FAILURE';
export const FETCH_AVAILABLE_LOADING = 'FETCH_AVAILABLE_LOADING';
export const FETCH_AVAILABLE_SUCCESS = 'FETCH_AVAILABLE_SUCCESS';

const host = 'http://localhost:5432';

export const fetchUser = user => dispatch => {
    dispatch({ type: FETCH_USER_LOADING });
    return(
        axiosWithAuth()
            .post(`/login`, user)
            .then(response => {
                window.localStorage.setItem('token', response.data.token)
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_USER_FAILURE, payload: err}))
    )
};

export const unfetchUser = () => dispatch => {
    dispatch({ type: UNFETCH_USER_LOADING });
    return(
        axiosWithAuth()
            .get()
            .then(response => {
                window.localStorage.clear();
                dispatch({
                    type: UNFETCH_USER_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: UNFETCH_USER_FAILURE, payload: err}))
    )
};

export const createUser = newUser => dispatch => {
    dispatch({ type: CREATE_USER_START });
    return(
        axiosWithAuth()
            .post(`${host}/register`, newUser)
            .then(response => {
                window.localStorage.setItem('token', response.data.token);
                dispatch({ 
                    type: CREATE_USER_SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => dispatch({ type: CREATE_USER_FAILURE, payload: err}))
    )
};

export const updateUser = (updatedUser, id) => dispatch => {
    dispatch({ type: UPDATE_USER_START });
    return(
        axiosWithAuth()
            .put(`${host}`, updateUser)
            .then(response => {
                dispatch({
                    type: UPDATE_USER_SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err}))
    )
}


// ORGANIC WASTE ACTIONS
export const fetchAvailable = () => dispatch => {
    dispatch({ type: FETCH_AVAILABLE_LOADING });
    return(
        axiosWithAuth()
            .get(`${host}/organic-waste`)
            .then(response => {
                dispatch({
                    type: FETCH_AVAILABLE_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_PICKUP_FAILURE, payload: err}))
    ) 
};

export const fetchByTransformerId = id => dispatch => {
    dispatch({ type: FETCH_PICKUP_LOADING })
    return(
        axiosWithAuth()
            .get(`${host}/organic-waste/search-by/pick-up/`, id)
            .then(response => {
                dispatch({
                    type: FETCH_PICKUP_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_PICKUP_FAILURE, payload: err}))
    )
};