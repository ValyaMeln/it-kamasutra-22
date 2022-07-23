const SET_USER_DATA = 'SET-USER-DATA';   //встановити дані користувача
// const UNFOLLOW = 'UN-FOLLOW';





let initialState = {

  id: null,
  email: null,
  login: null,

  isAuth: false,   //для того щоб вивело повідомлення залогінились ми чи ні

  isFetching: false


}


const loginReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      // debugger;
      return {
        ...state,
        ...action.data,
        isAuth: true

      };
    }
    default:
      return state;
  }

}

//!          Action Creator(AC)

export const setLoginUserData = (id, email, login) => ({ type: SET_USER_DATA, data: { id, email, login } })




export default loginReducer;

