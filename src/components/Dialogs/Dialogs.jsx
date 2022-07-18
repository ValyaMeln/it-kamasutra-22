import React from "react";
import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = (props) => {

  let state = props.dialogsPage;
  //  console.log(props.dialogsPage);
  // props.dialogsPage = {
  // dialogsData: Array(7), 
  // newName: '', 
  // messageData: Array(5), 
  // newMessageBody: ''
  // }


  let dialogsElement = state.dialogsData.map(
    (dialogElement) => <DialogItem name={dialogElement.name} key={dialogElement.id} id={dialogElement.id} avatar={dialogElement.avatar} />
  );

  let messageElement = state.messageData.map(
    (messageEl => <Message message={messageEl.message} key={messageEl.id} />)
  )

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
    // console.log(props.sendMessage);
    // () => {
    //   props.store.dispatch((0,_redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_4__.sendMessageCreator)());
    // }
   
  }

  let onNewMessageChange = (event) => {

    let body = event.target.value;
    props.updateNewMessageBody(body);
    // console.log(props.updateNewMessageBody);
    // body => {
    //   props.store.dispatch((0,_redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_4__.updateNewMessageBodyCreator)(body));
    // }
    
  }
  // ====================================================
  let newName = state.newName;

  let onSendNameClick = () => {
    // debugger;
    props.sendNameCreator();

  }
  let onNewNameChange = (event) => {
    let name = event.target.value;
    props.updateNewNameCreator(name);
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
        <textarea
          value={newName}
          onChange={onNewNameChange}
          placeholder="Ведіть ім'я"
          className={s.textarea}>

        </textarea>
        <button onClick={onSendNameClick} className={s.button}>Додати Ім'я Користувача </button>
      </div>
    </div>
  )
}

export default Dialogs;
