import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, message: "post 1", likesCount: 15 },
  { id: 2, message: "post 2", likesCount: 25 },
  { id: 3, message: "post 3", likesCount: 8 },
  { id: 4, message: "post 4", likesCount: 10 },
  { id: 5, message: "post 5", likesCount: 17 },
];

let dialogsData = [
  { id: 1, name: "Robert" },
  { id: 2, name: "Patricia" },
  { id: 3, name: "Elizabetht" },
  { id: 4, name: "Thomas" },
  { id: 5, name: "Anthony" },
  { id: 6, name: "Kevin" },
  { id: 7, name: "Amanda" },
];

let messageData = [
  { id: 1, message: "Ті, що сплять, не роблять помилок." },
  { id: 2, message: "Дія не завжди приведе до щастя, але до щастя привести може лише дія." },
  { id: 3, message: "Вершина ідеальності – в простоті." },
  { id: 4, message: "А життя – як лампочка: може перегоріти в будь-який момент." },
  { id: 5, message: "Є багато речей, на які розумна людина не хотіла б звертати уваги." },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} dialogsData={dialogsData} messageData={messageData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
