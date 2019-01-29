const initState = {
  auth: false,
  authError: null,
  user: "velizweb",
  password: "123456"
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth:
          state.user === action.credentials.user &&
          state.password === action.credentials.password
            ? true
            : false,
        authError:
          state.user === action.credentials.user &&
          state.password === action.credentials.password
            ? ""
            : "Error de login"
      };
    case "SINGOUT_SUCCESS":
      return state;
    default:
      return state;
  }
};

export default authReducer;
