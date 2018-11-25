import {
    SESSIONS_FETCH_REQUESTED,
    SESSIONS_FETCH_SUCCEEDED
} from '../Constants/Constants';

import { normalize, schema } from 'normalizr';

const cars = new schema.Entity('cars');

const session = new schema.Entity('sessions', {
    cars: [cars],
});

const resultSchema = {
    sessions: [session]
};



const setData = (state, data) => {
    return normalize({ sessions: data }, resultSchema);
};

const getInitialState = () => {
    return {
        entities: {
            sessions: []
        },
        result: {
            sessions: []
        },
    };
};

const sessionsReducer = (state = getInitialState(), {type, payload}) => {
    switch (type) {
        case SESSIONS_FETCH_REQUESTED:
            return {
                ...state,
                isLoading: true
            };
        case SESSIONS_FETCH_SUCCEEDED:
            return {
                ...state,
                ...setData(state, payload.data),
                isLoading: false
            };
        default:
            return state;
    }
}

export default sessionsReducer;
