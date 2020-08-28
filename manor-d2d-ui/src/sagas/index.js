import { put, takeLatest, call, all } from 'redux-saga/effects';
import { GET_STREETS_API, POPULATE_API } from '../api-endpoints';
import axios from 'axios';
import { GET_STREETS_SUCCESS, GET_STREETS, POPULATE_DB, POPULATE_DB_SUCCESS, POPULATE_DB_ERROR, GET_STREETS_ERROR } from '../actions/action-types';

const apiRequest = (request) => axios.request({
    url: request.url,
    method: request.method
})

function* fetchStreets() {
    try {
        const streets = yield call(() => apiRequest(GET_STREETS_API));
        yield put({ type: GET_STREETS_SUCCESS, response: streets.data });
    } catch (error) {
        console.log(error.status)
        yield put({ type: GET_STREETS_ERROR, error: error })
    }
}
function* fetchDb() {
    try {
        const db = yield call(() => apiRequest(POPULATE_API));
        yield put({ type: POPULATE_DB_SUCCESS, response: db.data });

    } catch (error) {
        console.log(error)
        yield put({ type: POPULATE_DB_ERROR, error: error });
    }
}

function* streetsWatcher() {
    yield takeLatest(GET_STREETS, fetchStreets);
}

function* dbWatcher() {
    yield takeLatest(POPULATE_DB, fetchDb);
}

export default function* rootSaga() {
    yield all([
        streetsWatcher(),
        dbWatcher()
        // add other watchers to the array
      ]);
    

}