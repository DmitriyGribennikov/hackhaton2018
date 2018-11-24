import {
    getParkings
} from "../Api";
import { put, call } from 'redux-saga/effects';

import {
    PARKING_FETCH_SUCCEEDED,
    PARKING_FETCH_FAILED
} from '../Constants/Constants';

export function* fetchParkings(action) {
    try {
        const parkings = yield call(getParkings, 'parkings');
        yield put({type: PARKING_FETCH_SUCCEEDED, payload: parkings});
    } catch (e) {
        yield put({type: PARKING_FETCH_FAILED, message: e.message});
    }
}
