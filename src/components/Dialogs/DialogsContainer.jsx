import React from "react";
import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { sendMessageCreator, sendNameCreator, updateNewMessageBodyCreator, updateNewNameCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());

  }
  let onNewMessageChange = (body) => {

    props.store.dispatch(updateNewMessageBodyCreator(body));
  }
  // ====================================================

  let onSendNameClick = () => {
    props.store.dispatch(sendNameCreator());

  }
  let onNewNameChange = (name) => {
    props.store.dispatch(updateNewNameCreator(name));
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}
      updateNewNameCreator={onNewNameChange} sendNameCreator={onSendNameClick} />
  )
}

export default DialogsContainer;
