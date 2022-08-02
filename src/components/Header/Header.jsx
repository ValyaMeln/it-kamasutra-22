import React from 'react';  // React з папки node_modules
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';


const Header = (props) => {



  return (

    <header className={s.header}>
      <img src='https://seeklogo.com/images/D/dollar-logo-0683682259-seeklogo.com.jpg'></img>

      <div className={s.loginBlock}>
        {
          props.isAuth
            ? <div>
              {props.login}

              <button onClick={props.logoutThunk}>Log Out</button>
            </div>

            : <NavLink to={'/login'}>Login</NavLink>
        }

      </div>
    </header>


  );
}

export default Header;