import React from 'react';  // React з папки node_modules
import * as axios from "axios"
import { connect } from "react-redux";

import Profile from './Profile';
import {setUserProfile} from "../../redux/profile-reducer"




class ProfileContainer extends React.Component {

  componentDidMount() {
    // this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setUserProfile(response.data);

      });
  }
  // debugger;
  render() {
    // debugger;
    return (
      <Profile {...this.props} profile={this.props.profile}/>
      //  ...this.props - так ми прокинули всі пропси з контейнерної компоненти в функціональну

    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});


export default connect(mapStateToProps, {
  setUserProfile,
  // unfollow: unfollowAC,


})(ProfileContainer);