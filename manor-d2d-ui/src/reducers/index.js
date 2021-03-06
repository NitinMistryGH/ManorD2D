import { GET_STREETS, GET_STREETS_SUCCESS, GET_STREETS_ERROR } from '../actions/action-types';
import { combineReducers } from 'redux';

const streets = (state = {}, action) => {
    switch (action.type) {
        case GET_STREETS:
            return { ...state, loading: true };
        case GET_STREETS_SUCCESS:
            return { ...state, data: action.response, loading: false }
        case GET_STREETS_ERROR:
            return { ...state, error: action.error, loading: false }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    streets
});

export default rootReducer;