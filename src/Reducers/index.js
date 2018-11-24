import { combineReducers } from 'redux';
import ParkingsReducer from './ParkingsReducer';
export default combineReducers({
    parkingsReducer: ParkingsReducer
})
