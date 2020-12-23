import jwt_decode from 'jwt-decode'

import {
    CREATE_USER_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_LOADING,
    FETCH_USER_SUCCESS,
    UNFETCH_USER_FAILURE,
    UNFETCH_USER_LOADING,
    UNFETCH_USER_SUCCESS
} from '../actions/index.js'

const token = localStorage.getItem('token');

const initialState = token ? 
    {
        userData: jwt_decode(token),
        loggedIn: true,
        error: null,
        isFetching: false
    }
    :
    {
        userData: {},
        loggedIn: false,
        error: null,
        isFetching: false
    }

function UserReducer(state = initialState, action){
    switch(action.type){
        case CREATE_USER_FAILURE:
            return {
                ...state,
                userData: [],
                error: action.payload
            };
        case CREATE_USER_START:
            return {
                ...state,
                isFetching: true,
                error: null
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                error: null,
                isFetching: false,
                userData: action.payload
            }
        case FETCH_USER_FAILURE:
            return {
                ...state, 
                error: action.payload,
                isFetching: false,
                loggedIn: false,
            }
        case FETCH_USER_LOADING:
            return {
                ...state,
                isFetching: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                isFetching: false,
                userData: action.payload
            }
        case UNFETCH_USER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loggedIn: true
            }
        case UNFETCH_USER_LOADING:
            return {
                ...state,
                loggedIn: true,
                isFetching: true,
                error: null
            }
        case UNFETCH_USER_SUCCESS:
            state = undefined
            return state
        default:
            return state
    }
}

export default UserReducer;