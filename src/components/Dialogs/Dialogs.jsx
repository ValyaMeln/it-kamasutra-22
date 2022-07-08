import React from "react";
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <ul className={s.dialogs_items}>
        <li className={s.item}>
          <NavLink to='/dialogs/1'>Robert</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/2'>Patricia</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/3'>Elizabeth</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/4'>Thomas</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/5'>Anthony</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/6'>Kevin</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to='/dialogs/7'>Amanda</NavLink>
        </li>

      </ul>
      <ul className={s.dialogs_messages}>
        <li className={s.message}>Ті, що сплять, не роблять помилок.</li>
        <li className={s.message}>Дія не завжди приведе до щастя, але до щастя привести може лише дія.</li>
        <li className={s.message}>Вершина ідеальності – в простоті.</li>
        <li className={s.message}>А життя – як лампочка: може перегоріти в будь-який момент.</li>
        <li className={s.message}>Є багато речей, на які розумна людина не хотіла б звертати уваги.</li>
      </ul>
    </div>
  )
}

export default Dialogs;
