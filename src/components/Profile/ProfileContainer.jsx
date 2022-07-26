import React from 'react';  // React з папки node_modules
import * as axios from "axios"
import { connect } from "react-redux";

import Profile from './Profile';
import { getUserProfileThunk } from "../../redux/profile-reducer"
import { useParams } from 'react-router-dom';
// import { usersAPI } from '../../api/api';

const WithRouterComponent = (props) => {
  const params = useParams();
  return (
    <ProfileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : '2'} // Если такого userId нету, то отобразить 2
    />
  );
}


class ProfileContainer extends React.Component {

  componentDidMount() {
    // debugger
    // this.props.toggleIsFetching(true);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);

    //   });

    //! this.props.userId - наша переданная id из url :)
    this.props.getUserProfileThunk(this.props.userId);
    // usersAPI.getProfile(this.props.userId)
    // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.userId}`)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);
    //     // console.log(this.props.params);
    //   }
    //   )
    

  }
  // debugger;
  render() {
    // debugger;
    return (
      <Profile {...this.props} profile={this.props.profile} />
      //  ...this.props - так ми прокинули всі пропси з контейнерної компоненти в функціональну

    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {getUserProfileThunk,
  // unfollow: unfollowAC,
})(WithRouterComponent);