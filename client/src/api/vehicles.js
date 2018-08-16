const BASE_URL = 'http://192.168.1.78:3000/'

export const fetchVehicles = () => {
  return fetch(`${BASE_URL}vehicles`)
    .then(response => response.json());
};

export const fetchVehicle = id => {
  return fetch(`${BASE_URL}vehicles/${id}`)
    .then(response => response.json());
};
