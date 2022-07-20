import * as axios from "axios";
import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user_logo.png"

let Users = (props) => {
 
  // debugger;
  let getUsers = () => {
   
    if (props.users.length === 0) {
      
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          props.setUsers(response.data.items)
        });

    }
  }
  
  // debugger;
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {
        props.users.map(u => <div key={u.id} className={s.wrapper} >
          <div className={s.wrapper_avatar}>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo} alt="user photo" />
            </div>
            <div>
              {u.followed
                ? <button onClick={() => { props.unfollow(u.id) }} className={s.follow}>UnFollow</button>
                : <button onClick={() => { props.follow(u.id) }} className={s.follow}>Follow</button> //передаємо через пропси діспач функцію follow
              }
            </div>
          </div>
          <div className={s.wrapper_userInfo}>
            <div className={s.wrapper_user}>
              <div className={s.fullName}>{u.name}</div>
              <div className={s.status}>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>)
      }
    </div>)
}
export default Users;