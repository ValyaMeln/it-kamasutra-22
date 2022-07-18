const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const UPDATE_NEW_NAME = 'UPDATE-NEW-NAME';
const SEND_NAME = 'SEND-NAME';

let initialState = {
  dialogsData: [
    { id: 1, name: 'Robert', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0PdsNJ6yh0Vrk-4osZwCvKYrW3rjMaiAKQj2msDLmOIK9eUYSIJ69jzLCGVFqan1DN14&usqp=CAU' },
    { id: 2, name: 'Patricia', avatar: 'https://freedominspire.com.ua/wp-content/uploads/2019/09/630_360_1556296939-712.jpg' },
    { id: 3, name: 'Elizabetht', avatar: 'https://zafilizhankoyu.com/images/1410.jpg' },
    { id: 4, name: 'Thomas', avatar: 'https://cdn.ananasposter.ru/image/cache/catalog/poster/drugoe/83/10086-1000x830.jpg' },
    { id: 5, name: 'Anthony', avatar: 'https://stihi.ru/pics/2020/08/14/137.jpg' },
    { id: 6, name: 'Kevin', avatar: 'https://stihi.ru/pics/2021/01/05/7907.jpg' },
    { id: 7, name: 'Amanda', avatar: 'https://n1s2.hsmedia.ru/41/03/97/410397009a945f036b79cd0491208f34/728x485_1_4acce6d5a8c1860d79dbd764b6f0f028@5000x3333_0xac120003_8406445731619721756.jpg' },
  ],
  newName: '',
  messageData: [
    { id: 1, message: 'Ті, що сплять, не роблять помилок.' },
    { id: 2, message: 'Дія не завжди приведе до щастя, але до щастя привести може лише дія.' },
    { id: 3, message: 'Вершина ідеальності – в простоті.' },
    { id: 4, message: 'А життя – як лампочка: може перегоріти в будь-який момент.' },
    { id: 5, message: 'Є багато речей, на які розумна людина не хотіла б звертати уваги.' },
  ],
  newMessageBody: ''
}


const dialogsReducer = (state = initialState, action) => {

  let stateCopy = {
    ...state,
    // messageData: [...state.messageData],
    // dialogsData: [...state.dialogsData]
  };
  // stateCopy.messageData = [...state.messageData];
  // stateCopy.dialogsData = [...state.dialogsData];
 
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy.newMessageBody = action.body;
      return stateCopy;

    case SEND_MESSAGE:
      let body = stateCopy.newMessageBody;
      stateCopy.newMessageBody = '';
      stateCopy.messageData.push({ id: 6, message: body },);
      return stateCopy;

    case UPDATE_NEW_NAME:
      stateCopy.newName = action.name;
      return stateCopy;

    case SEND_NAME:
      let name = stateCopy.newName;
      stateCopy.newName = '';
      stateCopy.dialogsData.push({ id: 8, name: name, avatar: 'https://n1s2.hsmedia.ru/41/03/97/410397009a945f036b79cd0491208f34/728x485_1_4acce6d5a8c1860d79dbd764b6f0f028@5000x3333_0xac120003_8406445731619721756.jpg' },)
      return stateCopy;

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