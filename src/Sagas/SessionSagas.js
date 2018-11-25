import {
    getSessions
} from "../Api";
import { put, call } from 'redux-saga/effects';

import {
    SESSIONS_FETCH_SUCCEEDED,
    SESSIONS_FETCH_FAILED
} from '../Constants/Constants';

export function* fetchSessions(action) {
    try {
        const sessions = yield call(getSessions, 'sessions');
        yield put({type: SESSIONS_FETCH_SUCCEEDED, payload: sessions});
    } catch (e) {
        yield put({type: SESSIONS_FETCH_FAILED, message: e.message});
    }
}
