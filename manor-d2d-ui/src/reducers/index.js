import { GET_STREETS, GET_STREETS_SUCCESS, POPULATE_DB, POPULATE_DB_SUCCESS, POPULATE_DB_ERROR, GET_STREETS_ERROR } from '../actions/action-types';
import { combineReducers } from 'redux';

const streets = (state = {}, action) => {
    switch (action.type) {
        case GET_STREETS:
            return { ...state, loading: true };
        case GET_STREETS_SUCCESS:
            return { ...state, data: action.response, loading: false }
        case GET_STREETS_ERROR:
            return {...state, error: action.error, loading: false}
        default:
            return state;
    }
}

const db = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_DB:
            return { ...state, loading: true };
        case POPULATE_DB_SUCCESS:
            return { ...state, data: action.response, loading: false };
        case POPULATE_DB_ERROR:
            return {...state, error: action.error, loading: false}
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    streets,
    db
});

export default rootReducer;