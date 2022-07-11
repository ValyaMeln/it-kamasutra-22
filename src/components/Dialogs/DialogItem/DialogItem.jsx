import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;
  // console.log(props.avatar);
  // console.log(props.id);
  // console.log(props.name);

  return (
    <li className={s.item}>
      <NavLink className={({ isActive }) => (isActive ? s.active : s.item)} to={path}>
        <img className={s.img_avatar} src={props.avatar} alt="avatar" />
        {props.name}
      </NavLink>
    </li>
  )
}

export default DialogItem;
