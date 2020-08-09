import { combineReducers } from 'redux';
import locationReducer from './locationReducer';
import locationDetailsReducer from './locationDetailsReducer';

export default combineReducers({
    locations: locationReducer,
    locationDetails: locationDetailsReducer
});