import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  // const root = ReactDOM(document.getElementById('root'));

  root.render(

    <React.StrictMode>
      <App appState={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>
  );
}


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
