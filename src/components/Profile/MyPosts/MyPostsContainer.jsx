import React from 'react';  // React з папки node_modules
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
// import StoreContext from '../../../StoreContext_probnui';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    // updateNewPostText: (text) => {
    //   let action = updateNewPostTextActionCreator(text);
    //   dispatch(action);
    // },
    addPost: (newPostName) => {
      dispatch(addPostActionCreator(newPostName));
    }

  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;