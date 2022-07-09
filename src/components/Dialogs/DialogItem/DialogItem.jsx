import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return (
    <li className={s.item}>
      <div>
        <img className={s.img_avatar} src={`props.image`}alt="" />
      </div>

      <NavLink className={({ isActive }) => (isActive ? s.active : s.item)} to={path}>
        <img className={s.img_avatar} src={props.avatar} alt="" />
        {props.name}
      </NavLink>
    </li>
  )
}

export default DialogItem;
