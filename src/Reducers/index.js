import { combineReducers } from 'redux';
import ParkingsReducer from './ParkingsReducer';
import SessionsReducer from './SessionsReducer';
export default combineReducers({
    sessionsReducer: SessionsReducer,
    parkingsReducer: ParkingsReducer
})
