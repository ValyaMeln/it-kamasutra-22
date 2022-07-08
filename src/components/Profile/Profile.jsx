import React from 'react';  // React з папки node_modules
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';


const Profile = () => {
  return (

    <div>

      <ProfileInfo />
      
      <MyPosts />

    </div>


  );
}

export default Profile;