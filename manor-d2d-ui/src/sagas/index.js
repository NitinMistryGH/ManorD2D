import { put, takeLatest, call, all } from 'redux-saga/effects';
import { GET_STREETS_API } from '../api/api-requests';
import axios from 'axios';
import { GET_STREETS_SUCCESS, GET_STREETS, GET_STREETS_ERROR } from '../actions/action-types';

const apiRequest = (request) => axios.request({
    url: request.url,
    method: request.method,
    baseURL: request.baseURL
})

function* fetchStreets() {
    try {
        const streets = yield call(() => apiRequest(GET_STREETS_API));
        yield put({ type: GET_STREETS_SUCCESS, response: streets.data });
    } catch (error) {
        yield put({ type: GET_STREETS_ERROR, error: error })
    }
}
function* streetsWatcher() {
    yield takeLatest(GET_STREETS, fetchStreets);
}


export default function* rootSaga() {
    yield all([
        streetsWatcher(),
        // add other watchers to the array
    ]);


}