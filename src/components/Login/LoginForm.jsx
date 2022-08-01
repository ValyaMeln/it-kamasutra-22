import React from 'react';  // React з папки node_modules
import { NavLink } from 'react-router-dom';
import s from './Login.module.css';


const LoginForm = (props) => {
  return (
    <div>
      <h1 className={s.header}>
        LOGIN PAGE
      </h1>
      <form action="">
        <div>
          <input placeholder={'Login'} type="login" />
        </div>
        <div>
          <input placeholder={'Password'} type="password" />
        </div>
        <div>
          <input type="checkbox" /> remember me Пам'ятай мене
        </div>
        <div>
          {/* <button type="submit">Login</button> */}
          <button>Login</button>
        </div>

      </form>

    </div>
  );
}

export default LoginForm;    