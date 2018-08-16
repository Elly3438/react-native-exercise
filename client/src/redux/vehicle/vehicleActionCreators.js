import {
  VEHICLE_REQUESTED,
  VEHICLE_REQUEST_SUCCESS,
  VEHICLE_REQUEST_ERROR
} from './vehicleActionTypes';
import { fetchVehicle } from '../../api/vehicles';

export const fetchVehicleAction = id => dispatch => {
  dispatch({
    type: VEHICLE_REQUESTED
  });

  fetchVehicle(id).then(data => {
    dispatch({
      payload: data,
      type: VEHICLE_REQUEST_SUCCESS
    });
  })
  .catch(error => {
    dispatch({
      error,
      isError: true,
      type: VEHICLE_REQUEST_ERROR
    })
  });
};
