import {
  VEHICLE_REQUESTED,
  VEHICLE_REQUEST_SUCCESS,
  VEHICLE_REQUEST_ERROR,
  VEHICLE_RESERVING,
  VEHICLE_RESERVE_SUCCESS,
  VEHICLE_RESERVE_ERROR
} from './vehicleActionTypes';
import { fetchVehicle, reserveVehicle } from '../../api/vehicles';

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

export const reserveVehicleAction = id => dispatch => {
  dispatch({
    type: VEHICLE_RESERVING
  });

  reserveVehicle(id).then(response => {
    if (response.ok) {
      response.json().then(data => {
        dispatch({
          payload: data,
          type: VEHICLE_RESERVE_SUCCESS
        })
      })
      .catch(error => {
        dispatch({
          error,
          isError: true,
          type: VEHICLE_RESERVE_ERROR
        }); 
      });
    }
  })
  .catch(error => {
    dispatch({
      error,
      isError: true,
      type: VEHICLE_RESERVE_ERROR
    });
  });
};
