import { CommentAction } from 'semantic-ui-react';
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

export const FETCH_MULTIAVAIL_FAILURE = 'FETCH_MULTIAVAIL_FAILURE';
export const FETCH_MULTIAVAIL_LOADING = 'FETCH_MULTIAVAIL_LOADING';
export const FETCH_MULTIAVAIL_SUCCESS = 'FETCH_MULTIAVAIL_SUCCESS';

export const FETCH_COMPLETED_FAILURE = 'FETCH_COMPLETED_FAILURE';
export const FETCH_COMPLETED_LOADING = 'FETCH_COMPLETED_LOADING';
export const FETCH_COMPLETED_SUCCESS = 'FETCH_COMPLETED_SUCCESS';

export const FETCH_CANCELED_FAILURE = 'FETCH_CANCELED_FAILURE';
export const FETCH_CANCELED_LOADING = 'FETCH_CANCELED_LOADING';
export const FETCH_CANCELED_SUCCESS = 'FETCH_CANCELED_SUCCESS';

export const FETCH_AVAILBYID_FAILURE = 'FETCH_AVAILBYID_FAILURE';
export const FETCH_AVAILBYID_LOADING = 'FETCH_AVAILBYID_LOADING';
export const FETCH_AVAILBYID_SUCCESS = 'FETCH_AVAILBYID_SUCCESS';

export const FETCH_PICKUPBYID_FAILURE = 'FETCH_PICKUPBYID_FAILURE';
export const FETCH_PICKUPBYID_LOADING = 'FETCH_PICKUPBYID_LOADING';
export const FETCH_PICKUPBYID_SUCCESS = 'FETCH_PICKUPBYID_SUCCESS';

export const CREATE_NEWWASTE_START = 'CREATE_NEWWASTE_START';
export const CREATE_NEWWASTE_SUCCESS = 'CREATE_NEWWASTE_SUCCESS';
export const CREATE_NEWWASTE_FAILURE = 'CREATE_NEWWASTE_FAILURE';

export const CREATE_PICKUP_START = 'CREATE_PICKUP_START';
export const CREATE_PICKUP_SUCCESS = 'CREATE_PICKUP_SUCCESS';
export const CREATE_PICKUP_FAILURE = 'CREATE_PICKUP_FAILURE';

export const CREATE_MULTIPICKUP_START = 'CREATE_MULTIPICKUP_START';
export const CREATE_MULTIPICKUP_SUCCESS = 'CREATE_MULTIPICKUP_SUCCESS';
export const CREATE_MULTIPICKUP_FAILURE = 'CREATE_MULTIPICKUP_FAILURE';


export const CREATE_COMPLETED_START = 'CREATE_COMPLETED_START';
export const CREATE_COMPLETED_SUCCESS = 'CREATE_COMPLETED_SUCCESS';
export const CREATE_COMPLETED_FAILURE = 'CREATE_COMPLETED_FAILURE';

export const CREATE_CANCELED_START = 'CREATE_CANCELED_START';
export const CREATE_CANCELED_SUCCESS = 'CREATE_CANCELED_SUCCESS';
export const CREATE_CANCELED_FAILURE = 'CREATE_CANCELED_FAILURE';

export const FETCH_VIEWBYID_FAILURE = 'FETCH_VIEWBYID_FAILURE';
export const FETCH_VIEWBYID_LOADING = 'FETCH_VIEWBYID_LOADING';
export const FETCH_VIEWBYID_SUCCESS = 'FETCH_VIEWBYID_SUCCESS';

export const UPDATE_POST_START = 'UPDATE_POST_START';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';


const host = 'http://localhost:25060';

export const fetchUser = user => dispatch => {
    dispatch({ type: FETCH_USER_LOADING });
    return(
        axiosWithAuth()
            .post(`${host}/login`, user)
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
            .get(`${host}`)
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
            .catch(err => dispatch({ type: UPDATE_USER_FAILURE, payload: err }))
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
            .catch(err => dispatch({ type: FETCH_PICKUP_FAILURE, payload: err }))
    ) 
};

export const fetchPickupByTI = id => dispatch => {
    dispatch({ type: FETCH_PICKUP_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/search-by/pick-up/`, id)
            .then(response => {
                dispatch({
                    type: FETCH_PICKUP_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_PICKUP_FAILURE, payload: err }))
    )
};

export const fetchCompletedByTI = id => dispatch => {
    dispatch({ type: FETCH_COMPLETED_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/search-by/completed`, id)
            .then(response => {
                dispatch({
                    type: FETCH_COMPLETED_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_COMPLETED_FAILURE, payload: err }))
    )
};

export const fetchCanceledByTI = id => dispatch => {
    dispatch({ type: FETCH_CANCELED_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/search-by/canceled`, id)
            .then(response => {
                dispatch({
                    type: FETCH_CANCELED_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_CANCELED_FAILURE, payload: err }))
    )
};

export const fetchAvailById = id => dispatch => {
    dispatch({ type: FETCH_AVAILBYID_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/search-by/available`, id)
            .then(response => {
                dispatch({
                    type: FETCH_AVAILBYID_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_AVAILBYID_FAILURE, payload: err }))
    )
};

export const fetchPickUpById = id => dispatch => {
    dispatch({ type: FETCH_PICKUPBYID_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/search-by/pick-up`, id)
            .then(response => {
                dispatch({
                    type: FETCH_PICKUPBYID_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_PICKUPBYID_FAILURE, payload: err }))
    )
};


export const fetchMultiAvail = list => dispatch => {
    dispatch({ type: FETCH_MULTIAVAIL_LOADING })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/available/multi`, list)
            .then( response => {
                dispatch({
                    type: FETCH_MULTIAVAIL_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: FETCH_MULTIAVAIL_FAILURE, payload: err }))
    )
};

export const createNewWaste = waste => dispatch => {
    dispatch({ type: CREATE_NEWWASTE_START })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/add-waste`, waste)
            .then(response => {
                dispatch({
                    type: CREATE_NEWWASTE_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: CREATE_NEWWASTE_FAILURE, payload: err }))
    )
};

export const createPickup = waste => dispatch => {
    dispatch({ type: CREATE_PICKUP_START })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/to-pick-up`, waste)
            .then(response => {
                dispatch({
                    type: CREATE_PICKUP_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: CREATE_PICKUP_FAILURE, payload: err }))
    )
};

export const createMultiPickup = (wastes, TI) => dispatch => {
    dispatch({ type: CREATE_MULTIPICKUP_START })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/to-pick-up/multi`, {wastes,TI})
            .then(response => {
                dispatch({
                    type: CREATE_MULTIPICKUP_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: CREATE_MULTIPICKUP_FAILURE, payload: err }))
    )
};

export const createCompleted = waste => dispatch => {
    dispatch({ type: CREATE_COMPLETED_START })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/to-complete`, waste)
            .then(response => {
                dispatch({
                    type: CREATE_COMPLETED_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: CREATE_COMPLETED_FAILURE, payload: err }))
    )
};

export const createCanceled = waste => dispatch => {
    dispatch({ type: CREATE_CANCELED_START })
    return(
        axiosWithAuth()
            .post(`${host}/organic-waste/to-cancel`, waste)
            .then(response => {
                dispatch({
                    type: CREATE_CANCELED_SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => dispatch({ type: CREATE_CANCELED_FAILURE, payload: err }))
    )
};

// WASTE PRODUCER 
export const viewPostedById = id => dispatch => {
    dispatch({ type: FETCH_VIEWBYID_LOADING })
    return(
        axiosWithAuth()
        .post(`${host}/organic-waste/search-by/id`,id)
        .then(response => {
            dispatch({
                type: FETCH_VIEWBYID_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => dispatch({ type: FETCH_VIEWBYID_FAILURE, payload: err }))
    )
};

export const updatePost = changeObject => dispatch => {
    dispatch({ type: UPDATE_POST_START })
    return(
        axiosWithAuth()
        .put(`${host}/organic-waste/post/edit`, changeObject)
        .then(response => {
            dispatch({
                type: UPDATE_POST_SUCCESS,
                payload: response.data
            })
        })
        .catch(err => dispatch({ type: UPDATE_POST_FAILURE, payload: err }))
    )
}