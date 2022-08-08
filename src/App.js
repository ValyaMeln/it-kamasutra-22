import React, { Component, Suspense } from 'react';  // React з папки node_modules
import './App.css';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
// import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
// const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    // debugger;

    return (
      // <BrowserRouter>
      <div className='app-wrapper'>

        <HeaderContainer />

        <Navbar />


        <div className='app-wrapper-content'>
          <Suspense fallback={<div>Завантаження...</div>}>
            <Routes>
              {/* <Suspense fallback={<Preloader />}> */}
              {/* //Route слідкують за урлом url */}
              <Route path='/dialogs/' element={<DialogsContainer
              // store={props.store} 
              />} />

              {/* <Route path='/profile/:userId' element={<ProfileContainer
          // store={props.store}
          />}
          /> */}
              <Route path="/profile/" element={<ProfileContainer />}>
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>
              {/* <Route path='/profile/:userId' element={<ProfileContainer />} />
          <Route path='/profile' element={<ProfileContainer />} /> */}

              <Route path='/news/' element={<News />} />

              <Route path='/users/' element={<UsersContainer />} />

              <Route path='/login/' element={<Login />} />
              {/* </Suspense> */}
            </Routes>
          </Suspense>
        </div>
        <Footer />

      </div>
      // </BrowserRouter>
    );
  }
}



let mapStateToProps = (state) => ({
  initialized: state.app.initialized,

  // profile: state.profilePage.profile
});
export default compose(
  connect(mapStateToProps, { initializeApp }))
  (App);

  // export default 
  //   connect(mapStateToProps, { initializeApp })
  //   ( App );
