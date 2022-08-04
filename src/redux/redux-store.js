import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import loginReducer from "./login-reducer";
import thunkMiddleware from "redux-thunk";
import { Formik } from 'formik';
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  login: loginReducer,
  app: appReducer
  // form: Formik
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;