import React from 'react';  // React з папки node_modules
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';




const Profile = (props) => {
// debugger;

  return (

    <div>

      <ProfileInfo />

      <MyPosts
        posts={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
      
      />

    </div>


  );
}

export default Profile;