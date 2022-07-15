import React from 'react';  // React з папки node_modules
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {
// debugger;
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {    //те що ми вводимо в textarea, але його не видно

    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);

  }


  return (<MyPosts updateNewPostText={onPostChange} 
    addPost={addPost} 
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText}
    />)
}

export default MyPostsContainer;