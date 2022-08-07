import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_logo.png";
import { NavLink } from 'react-router-dom'


let User = (props) => {
  let user = props.user;
  return (
    <div className={s.wrapper} >
      <div className={s.wrapper_avatar}>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.user_photo} alt="user photo" />
          </NavLink>
        </div>
        <div>
          {user.followed
            ? <button disabled={props.followingInProgress.some(id => id === user.id)}
              onClick={() => {
                props.unfollow(user.id);


              }} className={s.follow}>
              UnFollow</button>

            : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
              // debugger;
              props.follow(user.id);

            }} className={s.follow}>Follow</button> //передаємо через пропси діспач функцію follow
          }
        </div>
      </div>
      <div className={s.wrapper_userInfo}>
        <div className={s.wrapper_user}>
          <div className={s.fullName}>{user.name}</div>
          <div className={s.status}>{user.status}</div>
        </div>
        <div>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </div>
      </div>
    </div>)


}

export default User;