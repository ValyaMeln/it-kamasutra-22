import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'post 1', likesCount: 15 },
        { id: 2, message: 'post 2', likesCount: 25 },
        { id: 3, message: 'post 3', likesCount: 8 },
        { id: 4, message: 'post 4', likesCount: 10 },
        { id: 5, message: 'post 5', likesCount: 17 },
      ],
      newPostText: 'it kamasutra.com'
    },
    dialogsPage: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State 1233333');
  },
  getState() {
    // debugger;
    return this._state;
  },
  subscribe(observer) {      //спостерігач патрн
    this._callSubscriber = observer
  },

  addPost() {
    // debugger;
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likesCount: 15
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },


  dispatch(action) {  // описує дію яку потрібно виконати
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }

}


// addPost Додає новий пост який ми ввели в текст арії

// updateNewPostText оновлює дані, а точніше відображаєтекст що вводиться в браузері


export default store;
window.store = store;
//store - OOP