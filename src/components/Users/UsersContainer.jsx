import React from "react";
import { connect } from "react-redux";
import { followSuccessAC, setCurrentPageAC, unfollowSuccessAC, toggleFollowingProgres, getUsersThunk } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers, getUsersSelector, getUsersSuper, getUsersSuperSelector } from "../../redux/users-selectors";
// import { usersAPI } from "../../api/api";




class UsersAPIComponent extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let { currentPage, pageSize } = this.props;
    this.props.getUsers(currentPage, pageSize);
    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //   // debugger;
    //   // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    //   //   withCredentials: true
    //   // })
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  }
  onPageChanged = (pageNumber) => {
    let { pageSize } = this.props;

    this.props.getUsers(pageNumber, pageSize);
    this.props.setCurrentPage(pageNumber);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items)
    //   });
  }
  render() {
    console.log("RENDER USER")

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
        follow={this.props.follow}  //???????????????????? ???????????????? ???????????? ??????????????(follow), ?? ???? ???????? ????????????????
        isFetching={this.props.isFetching}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgres={this.props.toggleFollowingProgres}
      />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress
//   }
// }

let mapStateToProps = (state) => {
  console.log("map State To Props");
  return {
    // users: getUsersSelector(state),
    users: getUsersSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}



export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { follow: followSuccessAC, unfollow: unfollowSuccessAC, setCurrentPage: setCurrentPageAC, toggleFollowingProgres, getUsers: getUsersThunk })
)(UsersAPIComponent)
// let withRedirectComponent = withAuthRedirect(UsersAPIComponent)

// withAuthRedirect(connect(mapStateToProps,
//   {
//     follow: followSuccessAC,
//     unfollow: unfollowSuccessAC,
//     // setUsers: setUsersAC,
//     setCurrentPage: setCurrentPageAC,
//     // setTotalUsersCount: setUsersTotalCountAC,
//     // toggleIsFetching: toggleIsFetchingAC,
//     toggleFollowingProgres,
//     getUsers: getUsersThunk

//   })(UsersAPIComponent));

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {        //???????????????????????? ???????????????????????? ?????? ?????????????? ?????????????????????? ????????????????
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setUsersTotalCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))  //???? ???????????????????? ???????????? ???????? ??????????????????
//     }
//   }
// }