import { combineReducers } from 'redux';
import vehicles from './vehicles/vehiclesReducer';

const rootReducer = combineReducers({
  vehicles
});

export default rootReducer;
