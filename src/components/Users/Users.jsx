import * as axios from "axios";
import React from "react";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/user_logo.png"
class Users extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      });
  }



  render() {
    // let pagesCount = this.props.totalUsersCount / this.props.pageSize;
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        <ul className={s.selectedPage_wrapper}>
          {pages.map(p => {
            return <li className={this.props.currentPage === p ? s.selectedPage : s.page}
              onClick={(e) => { this.onPageChanged(p); }}> {p}</li>
          })}

        </ul>
        <div className={s.user_box}>
          {
            this.props.users.map(u => <div key={u.id} className={s.wrapper} >
              <div className={s.wrapper_avatar}>
                <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.user_photo} alt="user photo" />
                </div>
                <div>
                  {u.followed
                    ? <button onClick={() => { this.props.unfollow(u.id) }} className={s.follow}>UnFollow</button>
                    : <button onClick={() => { this.props.follow(u.id) }} className={s.follow}>Follow</button> //передаємо через пропси діспач функцію follow
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

}



export default Users;