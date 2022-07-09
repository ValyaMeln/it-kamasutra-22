import React from "react";
import s from './Dialogs.module.css';
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

const Message = (props) => {

  return (
    <li className={s.message}>{props.message}</li>
  )
}


let dialogsData = [
  { id: 1, name: "Robert" },
  { id: 2, name: "Patricia" },
  { id: 3, name: "Elizabetht" },
  { id: 4, name: "Thomas" },
  { id: 5, name: "Anthony" },
  { id: 6, name: "Kevin" },
  { id: 7, name: "Amanda" },
];

let dialogsElement = dialogsData.map(
  (dialogElement) => <DialogItem name={dialogElement.name} id={dialogElement.id} />
);
let messageData = [
  { id: 1, message: "Ті, що сплять, не роблять помилок." },
  { id: 2, message: "Дія не завжди приведе до щастя, але до щастя привести може лише дія." },
  { id: 3, message: "Вершина ідеальності – в простоті." },
  { id: 4, message: "А життя – як лампочка: може перегоріти в будь-який момент." },
  { id: 5, message: "Є багато речей, на які розумна людина не хотіла б звертати уваги." },
];
let messageElement = messageData.map(
  (messageEl => <Message message={messageEl.message} />)
)

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogs_items}>
        {
          dialogsElement
        }
      </ul>

      <ul className={s.dialogs_messages}>
        {
          messageElement
        }
      </ul>
    </div>
  )
}

export default Dialogs;
