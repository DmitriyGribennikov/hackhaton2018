import {takeEvery} from 'redux-saga/effects';

import {
    PARKING_FETCH_REQUESTED,
    ANALYTICS_PAGE_FETCH_REQUESTED
} from '../Constants/Constants';
import {
    fetchParkings,
} from './ParkingSagas'
import {
    fetchSessions,
} from './SessionSagas';


export function* RootSaga(action) {
    yield takeEvery(PARKING_FETCH_REQUESTED, fetchParkings);
    yield takeEvery(ANALYTICS_PAGE_FETCH_REQUESTED, fetchParkings);
    yield takeEvery(ANALYTICS_PAGE_FETCH_REQUESTED, fetchSessions);
}
