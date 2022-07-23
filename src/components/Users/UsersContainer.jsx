import React from "react";
import * as axios from "axios"
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, toggleIsFetchingAC, unfollowAC } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { getUsers } from "../../api/api";




class UsersAPIComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.toggleIsFetching(true);

    getUsers(this.props.currentPage,this.props.pageSize).then(response => {
      // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
      //   withCredentials: true
      // })

      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
      withCredentials: true
    })
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
      });
  }
  render() {

    return <>
      {/* {this.props.isFetching ? <img src={preloader} alt={preloader} /> : null} */}
      {this.props.isFetching ? <Preloader /> : null
      }
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}  //компонента викликає колбек функцію(follow), а не екшн кріейтор
        isFetching={this.props.isFetching}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}


export default connect(mapStateToProps, {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setUsersTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC

})(UsersAPIComponent);


// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {        //відображення користувачів при першому відображені сторінки
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))  //ми діспатчими виклик акшн кріейтора
//     }
//   }
// }