import * as axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user_logo.png";
import { NavLink } from 'react-router-dom'
import { usersAPI } from "../../api/api";
import Paginator from "../common/Paginator/Paginator";


let Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <div>
      {/* <ul className={s.selectedPage_wrapper}>
        {pages.map(p => {
          return <li className={props.currentPage === p ? s.selectedPage : s.page}
            onClick={(e) => { props.onPageChanged(p); }}> {p}</li>
        })}

      </ul> */}
      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalUsersCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />

      <div className={s.user_box}>
        {
          props.users.map(u => <div key={u.id} className={s.wrapper} >
            <div className={s.wrapper_avatar}>
              <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo} alt="user photo" />
                </NavLink>
              </div>
              <div>
                {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                    onClick={() => {
                      props.unfollow(u.id);

                      // debugger;
                      // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      //   withCredentials: true,
                      //   headers: { "API-KEY": "ea2b68a0-62d3-4ad3-a991-50d084b8bd82" }
                      // })
                      // props.toggleFollowingProgres(true, u.id);
                      // usersAPI.unfollow(u.id)
                      //   .then(response => {
                      //     if (response.data.resultCode === 0) {
                      //       props.unfollow(u.id);
                      //     }
                      //     props.toggleFollowingProgres(false, u.id);
                      //   });

                      // props.toggleFollowingProgres(true, u.id);
                      // usersAPI.unfollow(u.id)
                      //   .then(data => {
                      //     if (data.resultCode === 0) {
                      //       props.unfollow(u.id);
                      //     }
                      //     props.toggleFollowingProgres(false, u.id);
                      //   });

                    }} className={s.follow}>
                    UnFollow</button>

                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    // debugger;
                    props.follow(u.id);
                    // debugger;

                    // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                    //   withCredentials: true,
                    //   headers: { "API-KEY": "ea2b68a0-62d3-4ad3-a991-50d084b8bd82" }
                    // })
                    //   .then(response => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //   });
                    // props.toggleFollowingProgres(true, u.id);
                    // usersAPI.follow(u.id)
                    //   .then(response => {
                    //     if (response.data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //     props.toggleFollowingProgres(false, u.id);
                    //   });
                    // props.toggleFollowingProgres(true, u.id);
                    // usersAPI.follow(u.id)
                    //   .then(data => {
                    //     if (data.resultCode === 0) {
                    //       props.follow(u.id);
                    //     }
                    //     props.toggleFollowingProgres(false, u.id);
                    //   });
                  }} className={s.follow}>Follow</button> //передаємо через пропси діспач функцію follow
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
      </div>
    </div>
  )

}

// constructor(props) {
//   super(props);
// }

// componentDidMount() {
//   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//     .then(response => {
//       this.props.setUsers(response.data.items);
//       this.props.setTotalUsersCount(response.data.totalCount);
//     });
// }
// onPageChanged = (pageNumber) => {
//   this.props.setCurrentPage(pageNumber);
//   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//     .then(response => {
//       this.props.setUsers(response.data.items)
//     });
// }




// // let pagesCount = this.props.totalUsersCount / this.props.pageSize;
// let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
// let pages = [];
// for (let i = 1; i <= pagesCount; i++) {
//   pages.push(i);
// }
// return (
//   <div>

//     <ul className={s.selectedPage_wrapper}>
//       {pages.map(p => {
//         return <li className={this.props.currentPage === p ? s.selectedPage : s.page}
//           onClick={(e) => { this.onPageChanged(p); }}> {p}</li>
//       })}

//     </ul>
//     <div className={s.user_box}>
//       {
//         this.props.users.map(u => <div key={u.id} className={s.wrapper} >
//           <div className={s.wrapper_avatar}>
//             <div>
//               <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo} alt="user photo" />
//             </div>
//             <div>
//               {u.followed
//                 ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.follow}>UnFollow</button>
//                 : <button onClick={() => { this.props.follow(u.id) }} className={s.follow}>Follow</button> //передаємо через пропси діспач функцію follow
//               }
//             </div>
//           </div>
//           <div className={s.wrapper_userInfo}>
//             <div className={s.wrapper_user}>
//               <div className={s.fullName}>{u.name}</div>
//               <div className={s.status}>{u.status}</div>
//             </div>
//             <div>
//               <div>{"u.location.country"}</div>
//               <div>{"u.location.city"}</div>
//             </div>
//           </div>
//         </div>)
//       }
//     </div>
//   </div>
// )






export default Users;