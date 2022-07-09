import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  
  return (
    <li className={s.item}>
      <NavLink className={({ isActive }) => (isActive ? s.active : s.item)} to={path}>
        {props.name}
      </NavLink>
    </li>
  )
}

export default DialogItem;
