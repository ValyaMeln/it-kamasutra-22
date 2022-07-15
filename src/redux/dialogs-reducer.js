const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const UPDATE_NEW_NAME = 'UPDATE-NEW-NAME';
const SEND_NAME = 'SEND-NAME';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messageData.push({ id: 6, message: body },);
      return state;

    case UPDATE_NEW_NAME:
      state.newName = action.name;
      return state;

    case SEND_NAME:
      let name = state.newName;
      state.newName = '';
      state.dialogsData.push({ id: 8, name: name, avatar: 'https://n1s2.hsmedia.ru/41/03/97/410397009a945f036b79cd0491208f34/728x485_1_4acce6d5a8c1860d79dbd764b6f0f028@5000x3333_0xac120003_8406445731619721756.jpg' },)
      return state;

    default:
      return state;
  }

}

//!          Action Creator

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
}

export const sendNameCreator = () => ({ type: SEND_NAME })
export const updateNewNameCreator = (name) => {
  return {
    type: UPDATE_NEW_NAME,
    name: name
  }
}


export default dialogsReducer;