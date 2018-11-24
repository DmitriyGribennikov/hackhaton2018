import { takeEvery } from 'redux-saga/effects';

import {
    PARKING_FETCH_REQUESTED
} from '../Constants/Constants';
import {
    fetchParkings
} from './ParkingSagas'

export function* RootSaga(action) {
    yield takeEvery(PARKING_FETCH_REQUESTED, fetchParkings);
}
