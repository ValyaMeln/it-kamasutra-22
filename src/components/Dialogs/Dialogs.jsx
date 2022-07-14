import React from "react";
import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/state";



const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElement = state.dialogsData.map(
    (dialogElement) => <DialogItem name={dialogElement.name} id={dialogElement.id} avatar={dialogElement.avatar} />
  );

  let messageElement = state.messageData.map(
    (messageEl => <Message message={messageEl.message} />)
  )

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());

  }
  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  }

  return (
    <div className={s.dialogs}>
      <ul className={s.dialogs_items}>
        {
          dialogsElement
        }
      </ul>

      <ul className={s.dialogs_messages}>
        <div>
          {messageElement}
        </div>
        <div>
          <div>
            <textarea value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter you message">

            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send - Надіслати </button>
          </div>
        </div>

      </ul>
      <div className={s.wrapper_textarea}>
        <textarea className={s.textarea}></textarea>
        <button className={s.button}>Додати Повідомлення</button>
      </div>
    </div>
  )
}

export default Dialogs;
