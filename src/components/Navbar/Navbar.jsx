import React from 'react';  // React з папки node_modules
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
// console.log(classes);

const Navbar = () => {
  return (

    <nav className={s.nav}>
      <div>
        {/* //NavLink задача змінити урл в браузері без перезавантаження сторінки */}
        <NavLink to='/profile'  className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.active}`} >
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}> Message</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to='/settings' className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink>
      </div>
    </nav>


  );
}

export default Navbar;