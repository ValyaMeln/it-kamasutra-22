import React from 'react';  // React з папки node_modules
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
  return (

    <div>
      <div className={s.content_img}>
        <img src='https://img.freepik.com/free-photo/female-hands-counting-money-on-dollar_79075-11663.jpg'>
        </img>
      </div>
      <div>
        ava + description
      </div>

      <MyPosts />

    </div>


  );
}

export default Profile;