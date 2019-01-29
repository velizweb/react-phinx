/*const initState = {
  cars: [
    {
      id: 1,
      brand: "ferrari",
      year: "1950",
      madein: "italia",
      maxspeed: "150",
      state: true,
      description: "Ferrari en buenas condiciones",
      colors: [" Rojo ", " Negro ", " Blanco "],
      quantity_doors: 2
    },
    {
      id: 2,
      brand: "porche",
      year: "1988",
      madein: "alemania",
      maxspeed: "154",
      state: false,
      description: "Porche de alto rendimiento",
      colors: ["Negro"],
      quantity_doors: 2
    },
    {
      id: 3,
      brand: "subaru",
      year: "1977",
      madein: "japon",
      maxspeed: "120",
      state: true,
      description: "Vehiculo con muy alta demanda por du caracteristicas",
      colors: ["Blanco"],
      quantity_doors: 4
    }
  ],
  message: null
};*/

const initState = {
  cars: [],
  message: null
};
const carReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CARS":
      return {
        cars: action.result.data.cars,
        message: null
      };
    case "CREATE_CAR":
      return {
        cars: action.result.data.cars,
        message: "El Vehiculo ha sido creado."
      };
    case "ACTIVATE_CAR":
      return {
        cars: action.result.data.cars,
        message: "El Vehiculo ha sido activado."
      };
    case "DEACTIVATE_CAR":
      return {
        cars: action.result.data.cars,
        message: "El Vehiculo ha sido desactivado."
      };
    case "DELETE_CAR":
      return {
        cars: action.result.data.cars,
        message: "El Vehiculo ha sido eliminado."
      };
    case "CREATE_CAR_ERROR":
      return {
        ...state,
        message: "El vehiculo no ha sido creado."
      };
    default:
      return state;
  }
};

export default carReducer;
