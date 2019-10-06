import * as actionType from "./actionTypes";

export const userInfoRegister = (userData: any) => {
  console.log("userData ==>", userData);

  localStorage.setItem("name", userData.name);
  localStorage.setItem("email", userData.email);
  localStorage.setItem("password", userData.password);
  localStorage.setItem("comfirmPassword", userData.comfirmPassword);
  return {
    type: actionType.USER_INFO_REGISTER,
    payload: userData
  };
};

export const userInfoProgram = (userDataProgram: any) => {
  console.log("userDataProgram ==>", userDataProgram);
  localStorage.setItem("age", userDataProgram.age);
  localStorage.setItem("weight", userDataProgram.weight);
  localStorage.setItem("foodSupplement", userDataProgram.foodSupplement);
  localStorage.setItem("sarms", userDataProgram.sarms);
  localStorage.setItem("steroids", userDataProgram.steroids);
  return {
    type: actionType.USER_INFO_PROGRAM_INFO,
    payload: userDataProgram
  };
};
