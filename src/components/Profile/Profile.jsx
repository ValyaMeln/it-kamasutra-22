import React from 'react';  // React з папки node_modules
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = (props) => {
// debugger;

  return (

    <div>

      <ProfileInfo profile={props.profile} />

      <MyPostsContainer  />

    </div>


  );
}

export default Profile;