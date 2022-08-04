import { authAPI } from "../api/api";
import { setStatus } from "./profile-reducer";

const SET_USER_DATA = 'SET-USER-DATA';   //встановити дані користувача
// const UNFOLLOW = 'UN-FOLLOW';





let initialState = {

  userId: null,
  email: null,
  login: null,

  isAuth: false,   //для того щоб вивело повідомлення залогінились ми чи ні

  // isFetching: false


}


const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      // debugger;
      return {
        ...state,
        ...action.payload,
        // isAuth: true

      };
    }
    default:
      return state;
  }

}

//!          Action Creator(AC)

export const setLoginUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA, payload:
    { userId, email, login, isAuth }
})

export const getLoginUserDataThunk = () => (dispatch) => {
 return authAPI.getLoginMe()
    .then(response => {
      if (response.data.resultCode === 0) {
        // this.props.setLoginUserData(response.data.data.login); //!Скорочуєм код
        let { id, email, login } = response.data.data;
        dispatch(setLoginUserData(id, email, login, true));
      }
    });

}

export const loginThunk = (email, password, rememberMe, setStatus) => (dispatch) => {
  // debugger;
  authAPI.login(email, password, rememberMe)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getLoginUserDataThunk())
      }
      else {
        setStatus(response.data.messages) //сюди приходе повідомлення яке відповідає помилці
        // setStatus(response.data.messages.length > 0 ? response.data.messages[0] : "Some error")
      }
    })
}


export const logoutThunk = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setLoginUserData(null, null, null, false));

      }
    })
}

export default loginReducer;

