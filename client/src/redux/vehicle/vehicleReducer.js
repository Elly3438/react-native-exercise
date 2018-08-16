import {
  VEHICLE_REQUESTED,
  VEHICLE_REQUEST_SUCCESS,
  VEHICLE_REQUEST_ERROR
} from './vehicleActionTypes';

const initialState = {
  isError: false,
  isFetching: false,
  vehicle: null
};

export default function vehicleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case VEHICLE_REQUESTED:
      return { ...state, isFetching: true };
    case VEHICLE_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicle: action.payload.vehicle
      };
    case VEHICLE_REQUEST_ERROR:
      return {
        ...state,
        isError: true,
        isFetching: false
      };
    default:
      return state;
  }
};
