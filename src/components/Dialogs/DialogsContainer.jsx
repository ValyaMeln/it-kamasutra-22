import React from "react";
import { sendMessageCreator, sendNameCreator, updateNewMessageBodyCreator, updateNewNameCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { Navigate } from "react-router-dom";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    // isAuth: state.login.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },

    updateNewNameCreator: (name) => {
      dispatch(updateNewNameCreator(name));
    },
    sendNameCreator: () => {
      dispatch(sendNameCreator());
    }
  }
};
// compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   withAuthRedirect)
//   (Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
// let AuthRedirectComponent = (props) => {
//   if (!props.isAuth) return <Navigate to={"/login"} />;
//   return <Dialogs {...props} />
// }

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect)
  (Dialogs);
