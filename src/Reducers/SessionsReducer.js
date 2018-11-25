import {
    SESSIONS_FETCH_REQUESTED,
    SESSIONS_FETCH_SUCCEEDED
} from '../Constants/Constants';

import { normalize, schema } from 'normalizr';

const cars = new schema.Entity('actualCars');

const parking = new schema.Entity('parkings', {
    cars: [cars],
});

const resultSchema = {
    parkings: [parking]
};



const setData = (state, data) => {
    return normalize({ parkings: data }, resultSchema);
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

const parkingsReducer = (state = getInitialState(), {type, payload}) => {
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

export default parkingsReducer;
