import React from 'react';  // React з папки node_modules
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  // debugger;
  return (

    <div>
      {/* <div className={s.content_img}>
        <img src='https://img.freepik.com/free-photo/female-hands-counting-money-on-dollar_79075-11663.jpg'>
        </img>
      </div> */}
      <div className={s.descroption_block}>
        <img src={props.profile.photos.large} alt="" />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
      <div>

        <p>Шукаю робoту:<span className={s.content_text}>{props.profile.lookingForAJob ? "Yes" : "Not"}</span></p>
        <div>Моє ім'я:<span className={s.content_text}>{props.profile.fullName}</span></div>
        <div>Моє id:<span className={s.content_text}>{props.profile.userId}</span></div>

        <div>Iнформація про мене:<span className={s.content_text}>{props.profile.aboutMe}</span></div>
        <div><img src={props.profile.photos.small} alt="" /></div>
      </div>

    </div>


  );
}

export default ProfileInfo;