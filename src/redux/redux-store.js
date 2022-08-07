import { applyMiddleware, combineReducers, compose, createStore } from "redux";
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


// const enhancer = compose(
//   // Middleware you want to use in development:
//   applyMiddleware(d1, d2, d3),
//   // Required! Enable Redux DevTools with the monitors you chose
//   DevTools.instrument()
// );

// export default function configureStore(initialState) {
//   // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
//   // See https://github.com/reactjs/redux/releases/tag/v3.1.0
//   const store = createStore(rootReducer, initialState, enhancer);

//   // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
//   if (module.hot) {
//     module.hot.accept('../reducers', () =>
//       store.replaceReducer(
//         require('../reducers') /*.default if you use Babel 6+ */
//       )
//     );
//   }

//   return store;
// }

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store__ = store;

export default store;