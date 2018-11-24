import {
    PARKING_FETCH_SUCCEEDED
} from '../Constants/Constants';

import { normalize, schema } from 'normalizr';

const session = new schema.Entity('sessions');

const parking = new schema.Entity('parkings', {
    sessions: [session],
});

const resultSchema = {
    parkings: [parking]
};



const setData = (state, data) => {
    const foo = normalize({ parkings: data }, resultSchema);
    return foo;
};

const getInitialState = () => {
    return {
        entities: {},
        result: {}
    };
};

const parkingsReducer = (state = getInitialState(), {type, payload}) => {
    switch (type) {
        case PARKING_FETCH_SUCCEEDED:
            return {...state, ...setData(state, payload.data) };
        default:
            return state;
    }
}

export default parkingsReducer;
