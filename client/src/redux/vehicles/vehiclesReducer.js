import {
  VEHICLES_REQUESTED,
  VEHICLES_REQUEST_SUCCESS,
  VEHICLES_REQUEST_ERROR
} from './vehiclesActionTypes';

const initialState = {
  isError: false,
  isFetching: false,
  vehicles: []
};

export default function vehiclesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case VEHICLES_REQUESTED:
      return { ...state, isFetching: true };
    case VEHICLES_REQUEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        vehicles: action.payload.vehicles
      };
    case VEHICLES_REQUEST_ERROR:
      return {
        ...state,
        isError: true,
        isFetching: false
      };
    default:
      return state;
  }
};
