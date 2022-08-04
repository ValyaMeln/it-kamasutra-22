import { authAPI } from "../api/api";
import { getLoginUserDataThunk } from "./login-reducer"

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';   //встановити дані користувача
// const UNFOLLOW = 'UN-FOLLOW';





let initialState = {

  initialized: false,

}


const appReducer = (state = initialState, action) => {

  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      // debugger;
      return {
        ...state,
        initialized: true,
        // isAuth: true
      };
    }
    default:
      return state;
  }

}

//!          Action Creator(AC)

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getLoginUserDataThunk());
  // debugger;
  Promise.all([promise])
    .then(() => {
      dispatch(initializedSuccess());

    });
}


export default appReducer;

