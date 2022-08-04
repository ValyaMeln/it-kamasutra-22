import React from 'react';  // React з папки node_modules
// import * as axios from "axios"
import { connect } from "react-redux";

import Profile from './Profile';
import { getUserProfileThunk, getStatusThunk, updateStatusThunk } from "../../redux/profile-reducer"
import { unstable_HistoryRouter, useParams } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
// import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { Navigate } from "react-router-dom";




const WithRouterComponent = (props) => {
  const params = useParams();
  // debugger;
  return (
    <ProfileContainer
      {...props} // Пропсы из mapStateToProps, {setUserProfile}
      userId={params.userId ? params.userId : props.loginUserId} // Если такого userId нету, то отобразить 2
      // userId={params}
    />
  );
}


class ProfileContainer extends React.Component {

  componentDidMount() {
    // debugger;
    // this.props.toggleIsFetching(true);
    // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);

    //   });

    // if(!this.props.userId){
    //   // this.props.history.push("/login")
    // }

    //! this.props.userId - наша переданная id из url :)
    this.props.getUserProfileThunk(this.props.userId);

    this.props.getStatusThunk(this.props.userId);

  }
  // debugger;
  render() {
    // debugger;
    // if (!this.props.isAuth) return <Navigate to={"/login"} />;
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusThunk} />
      //  ...this.props - так ми прокинули всі пропси з контейнерної компоненти в функціональну

    );
  }
}


// let AuthRedirectComponent = withAuthRedirect(WithRouterComponent);
// let AuthRedirectComponent = (props)=>{
//   // alert(props.isAuth);
//   if (!props.isAuth) return <Navigate to={"/login"} />;
//   return <WithRouterComponent {...props}/>
// }

// let mapStateToPropsFoRedirect = (state) => ({
//   // profile: state.profilePage.profile,
//   isAuth: state.login.isAuth
// }); 

// AuthRedirectComponent = connect(mapStateToPropsFoRedirect)(AuthRedirectComponent);

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  loginUserId: state.login.userId,

  isAuth: state.login.isAuth
});

// let WithUrlDataContainerComponent = withRouter(ProfileContainer);
// export default connect(mapStateToProps, {
//   getUserProfileThunk,
//   // unfollow: unfollowAC,
// })(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, { getUserProfileThunk, getStatusThunk, updateStatusThunk }),
  // withAuthRedirect
)
  (WithRouterComponent)

