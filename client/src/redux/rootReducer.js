import { combineReducers } from 'redux';
import vehicle from './vehicle/vehicleReducer';
import vehicles from './vehicles/vehiclesReducer';

const rootReducer = combineReducers({
  vehicle,
  vehicles
});

export default rootReducer;
