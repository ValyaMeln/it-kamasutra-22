import React from "react";
import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


// let dialogsData = [
//   { id: 1, name: "Robert" },
//   { id: 2, name: "Patricia" },
//   { id: 3, name: "Elizabetht" },
//   { id: 4, name: "Thomas" },
//   { id: 5, name: "Anthony" },
//   { id: 6, name: "Kevin" },
//   { id: 7, name: "Amanda" },
// ];


// let messageData = [
//   { id: 1, message: "Ті, що сплять, не роблять помилок." },
//   { id: 2, message: "Дія не завжди приведе до щастя, але до щастя привести може лише дія." },
//   { id: 3, message: "Вершина ідеальності – в простоті." },
//   { id: 4, message: "А життя – як лампочка: може перегоріти в будь-який момент." },
//   { id: 5, message: "Є багато речей, на які розумна людина не хотіла б звертати уваги." },
// ];


const Dialogs = (props) => {

  let dialogsElement = props.data.dialogsData.map(
    (dialogElement) => <DialogItem name={dialogElement.name} id={dialogElement.id} />
  );

  let messageElement = props.data.messageData.map(
    (messageEl => <Message message={messageEl.message} />)
  )

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
