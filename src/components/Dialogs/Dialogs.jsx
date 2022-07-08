import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  
  let path = '/dialogs/' + props.id;
  
  return (
    <li className={s.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </li>
  )
}

const Message = (props) => {
  
  return (
    <li className={s.message}>{props.message}</li>
  )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogs_items}>

        <DialogItem name="Robert" id="1" />
        <DialogItem name="Patricia" id="2" />
        <DialogItem name="Elizabetht" id="3" />
        <DialogItem name="Thomas" id="4" />
        <DialogItem name="Anthony" id="5" />
        <DialogItem name="Kevin" id="6" />
        <DialogItem name="Amanda" id="7" />
       
      </ul>
      <ul className={s.dialogs_messages}>
        <Message message='Ті, що сплять, не роблять помилок.'/>
        <Message message='Дія не завжди приведе до щастя, але до щастя привести може лише дія.'/>
        <Message message='Вершина ідеальності – в простоті'/>
        <Message message='А життя – як лампочка: може перегоріти в будь-який момент.'/>
        <Message message='Є багато речей, на які розумна людина не хотіла б звертати уваги.'/>
      </ul>
    </div>
  )
}

export default Dialogs;
