import * as actionType from "../actions/actionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  comfirmPassword: "",
  age: "",
  weight: "",
  foodSupplement: false,
  sarms: false,
  steroids: false
};

export default function(state = initialState, action: any) {
  switch (action.type) {
    case actionType.USER_INFO_REGISTER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        comfirmPassword: action.payload.comfirmPassword
      };

    case actionType.USER_INFO_PROGRAM_INFO:
      return {
        ...state,
        age: action.payload.age,
        weight: action.payload.weight,
        foodSupplement: action.payload.foodSupplement,
        sarms: action.payload.sarms,
        steroids: action.payload.steroids
      };
    default:
      return state;
  }
}
