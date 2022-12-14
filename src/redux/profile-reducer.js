import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

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
  // newPostText: 'it kamasutra.com',
  profile: null,
  status: '',
};

const profileReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: action.newPostName,
        likesCount: 15
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        // newPostText: ''
      };
    }
    // case UPDATE_NEW_POST_TEXT: {
    //   return {
    //     ...state,
    //     newPostText: action.newText
    //   };
    // }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id != action.postId)
      };
    }
    default:
      return state;
  }


}

//!          Action Creator
export const addPostActionCreator = (newPostName) => ({ type: ADD_POST, newPostName })
// export const updateNewPostTextActionCreator = (text) => {
//   return {
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
//   }
// }
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })

export const getUserProfileThunk = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId)
  // .then(response => {
  dispatch(setUserProfile(response.data));
  // })
}

export const getStatusThunk = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  // .then(response => {
  // debugger;
  dispatch(setStatus(response.data));

  // })
}
export const updateStatusThunk = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status) 
  // .then(response => {
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
  // });
}

export default profileReducer;