import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './Reducers/index';
import createSagaMiddleware from 'redux-saga';
import { RootSaga } from './Sagas/RootSaga';



export const history = createHistory();
const sagaMiddleware = createSagaMiddleware()

const initialState = {};
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers
);

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
);

sagaMiddleware.run(RootSaga);

export default store;
