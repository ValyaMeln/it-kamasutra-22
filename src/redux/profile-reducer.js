import { usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

// let sum = (a = -1, b = 0) => {
//   return a + b;
// }
// console.log(sum(5, 2));
let initialState = {
  posts: [
    { id: 1, message: 'post 1', likesCount: 15 },
    { id: 2, message: 'post 2', likesCount: 25 },
    { id: 3, message: 'post 3', likesCount: 8 },
    { id: 4, message: 'post 4', likesCount: 10 },
    { id: 5, message: 'post 5', likesCount: 17 },
  ],
  newPostText: 'it kamasutra.com',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 15
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    default:
      return state;
  }


}

//!          Action Creator
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfileThunk = (userId) => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));

    }
    )
}


export default profileReducer;