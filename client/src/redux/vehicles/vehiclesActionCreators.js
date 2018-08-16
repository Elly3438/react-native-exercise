import {
  VEHICLES_REQUESTED,
  VEHICLES_REQUEST_SUCCESS,
  VEHICLES_REQUEST_ERROR
} from './vehiclesActionTypes';
import { fetchVehicles } from '../../api/vehicles';

export const fetchVehiclesAction = () => dispatch => {
  dispatch({
    type: VEHICLES_REQUESTED
  });

  fetchVehicles().then(data => {
    dispatch({
      payload: data,
      type: VEHICLES_REQUEST_SUCCESS
    });
  })
  .catch(error => {
    dispatch({
      error,
      isError: true,
      type: VEHICLES_REQUEST_ERROR
    })
  });
};
