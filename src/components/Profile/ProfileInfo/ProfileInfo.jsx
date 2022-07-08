import React from 'react';  // React з папки node_modules
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (

    <div>
      <div className={s.content_img}>
        <img src='https://img.freepik.com/free-photo/female-hands-counting-money-on-dollar_79075-11663.jpg'>
        </img>
      </div>
      <div className={s.descroption_block}>
        ava + description
      </div>

    </div>


  );
}

export default ProfileInfo;