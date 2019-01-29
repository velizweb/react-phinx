import axios from "axios";

const apiUrl = "http://localhost/api";

export const fetch = () => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/vehiculos.php`)
      .then(result => {
        dispatch({ type: "FETCH_CARS", result });
      })
      .catch(error => console.log(error));
    //dispatch({ type: "CREATE_CAR", car });
  };
};

export const createCar = car => {
  return dispatch => {
    return axios
      .post(`${apiUrl}/addVehiculo.php`, car)
      .then(result => {
        dispatch({ type: "CREATE_CAR", result });
      })
      .catch(error => console.log(error));
  };
};

export const activateCar = car => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/desactivar.php?id=${car.id}&opt=1`)
      .then(result => {
        dispatch({ type: "ACTIVATE_CAR", result });
      })
      .catch(error => console.log(error));
  };
};

export const deactivateCar = car => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/desactivar.php?id=${car.id}&opt=0`)
      .then(result => {
        dispatch({ type: "DEACTIVATE_CAR", result });
      })
      .catch(error => console.log(error));
  };
};

export const deleteCar = car => {
  return dispatch => {
    return axios
      .get(`${apiUrl}/delete.php?id=${car.id}`)
      .then(result => {
        dispatch({ type: "DELETE_CAR", result });
      })
      .catch(error => console.log(error));
  };
};
