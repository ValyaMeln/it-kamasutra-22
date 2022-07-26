import React from "react";
import { sendMessageCreator, sendNameCreator, updateNewMessageBodyCreator, updateNewNameCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    // isAuth: state.login.isAuth
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);
// let AuthRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Navigate to={"/login"} />;
//   return <Dialogs {...props} />
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
