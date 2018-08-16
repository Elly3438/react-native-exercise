import {
  VEHICLE_REQUESTED,
  VEHICLE_REQUEST_SUCCESS,
  VEHICLE_REQUEST_ERROR,
  VEHICLE_RESERVING,
  VEHICLE_RESERVE_SUCCESS,
  VEHICLE_RESERVE_ERROR
} from './vehicleActionTypes';

const initialState = {
  isError: false,
  isFetching: false,
  isReserving: false,
  isReservingError: false,
  orderPlacedAt: null,
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
    case VEHICLE_RESERVING:
      return { ...state, isReserving: true };
    case VEHICLE_RESERVE_SUCCESS:
      return {
        ...state,
        isReserving: false,
        orderPlacedAt: action.payload.orderPlacedAt
      };
    case VEHICLE_RESERVE_ERROR:
      return {
        ...state,
        error: action.error,
        isReservingError: true,
        isReserving: false
      };
    default:
      return state;
  }
};
