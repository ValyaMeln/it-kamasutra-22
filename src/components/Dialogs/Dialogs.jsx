import React from "react";
import s from './Dialogs.module.css';

import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import { Navigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { type } from "@testing-library/user-event/dist/type";



const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElement = state.dialogsData.map(
    (dialogElement) => <DialogItem name={dialogElement.name} key={dialogElement.id} id={dialogElement.id} avatar={dialogElement.avatar} />
  );

  let messageElement = state.messageData.map(
    (messageEl => <Message message={messageEl.message} key={messageEl.id} />)
  )

  let newMessageBody = state.newMessageBody;

  // let onSendMessageClick = () => {
  //   props.sendMessage();
  //   // console.log(props.sendMessage);
  //   // () => {
  //   //   props.store.dispatch((0,_redux_dialogs_reducer__WEBPACK_IMPORTED_MODULE_4__.sendMessageCreator)());
  //   // }

  // }
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

  // if (!props.isAuth) return <Navigate to={"/login"} />; //для того щоб якщо ми не залогінились нас перекидало на сторінку Залогінитись

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
          {/* <div>
            <textarea value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter you message">
            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send - Надіслати </button>
          </div> */}
          {/* <AddMessageForm onSubmit={addNewMessage} /> */}
          <AddMassageForm sendMessage={props.sendMessage} />
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

const messagesFormValidate = (values) => {
  const errors = {};
  return errors;
}

// type UserFormObjectType = {
//   newMessageBody: String
// }
// console.log(props.values.newMessageBody);
const AddMessageForm = (props) => {
  // const submit = (values: UserFormObjectType, { setSubmitting }: {setSubmitting : (isSubmitting: Boolean) => void }) => {

  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 2));
  //     setSubmitting(false);

  //   }, 400);
  // }
  const addNewMessage = (values) => {
    // alert(values.newMessageBody);
    console.log(values);
    props.sendMessage(values.newMessageBody);

  }

  return (
    <Formik
      initialValues={{ newMessageBody: '' }}
      validate={messagesFormValidate}
      // onSubmit={submit}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values.newMessageBody);
        setSubmitting(false);
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="newMessageBody" />
          {/* <ErrorMessage name="email" component="div" /> */}

          <button type="submit" disabled={isSubmitting}>
            222Send - Надіслати
          </button>
        </Form>
      )}

    </Formik>

  )
}

const AddMassageForm = (props) => {

  let addNewMessage = (values) => {

    props.sendMessage(values);

  }

  return (
    <Formik
      initialValues={{
        newMessageBody: ""
      }}
      onSubmit={(values, { resetForm }) => {
        addNewMessage(values.newMessageBody);
        resetForm({ values: '' });
      }
      }
    >
      {() => (
        <Form>
          <div>
            <Field
              name={'newMessageBody'}
              as={'textarea'}
              placeholder={'Введіть повідомлення'}
            />
          </div>

          <button type={'submit'}>Send - Надіслати</button>
        </Form>
      )}
    </Formik>
  )
}

export default Dialogs;
