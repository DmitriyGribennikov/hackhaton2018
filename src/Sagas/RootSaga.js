import { takeLatest } from 'redux-saga';

import {
    USER_FETCH_REQUESTED
} from '../Constants/Constants';
import {
    fetchParkings
} from './ParkingSagas'

export function* RootSaga(action) {
    yield takeLatest(USER_FETCH_REQUESTED, fetchParkings);
}
