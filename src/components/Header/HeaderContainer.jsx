import React from 'react';  // React з папки node_modules
import Header from './Header';
import * as axios from "axios"
import { connect } from "react-redux";
import { getLoginUserDataThunk, logoutThunk } from "../../redux/login-reducer";
// import { authAPI } from '../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount() {

    // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //   withCredentials: true
    // })
    //   .then(response => {
    //     // debugger;
    //     if (response.data.resultCode === 0) {
    //       // this.props.setLoginUserData(response.data.data.login); //!Скорочуєм код
    //       let { id, email, login } = response.data.data;
    //       this.props.setLoginUserData(id, email, login)
    //     }
    //   }
    //   )
    // this.props.getLoginUserDataThunk();
    this.props.logoutThunk();
    // authAPI.getLoginMe()
    // .then(response =>{
    //   if (response.data.resultCode === 0) {
    //     // this.props.setLoginUserData(response.data.data.login); //!Скорочуєм код
    //     let { id, email, login } =response.data.data;
    //     this.props.setLoginUserData(id, email, login)
    //   }
    // })


  }

  render() {

    return (
      <Header {...this.props} />
    );
  }
}

let mapStateToProps = (state) => ({
  isAuth: state.login.isAuth,
  login: state.login.login
  // profile: state.profilePage.profile
});


export default connect(mapStateToProps, { logoutThunk })(HeaderContainer);
