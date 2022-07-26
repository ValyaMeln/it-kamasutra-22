import React from 'react';  // React з папки node_modules
import './App.css';
import Footer from './components/Footer/Footer';
import HeaderContainer from './components/Header/HeaderContainer';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';



const App = (props) => {
  // debugger;
  return (
    // <BrowserRouter>
    <div className='app-wrapper'>

      <HeaderContainer />

      <Navbar />


      <div className='app-wrapper-content'>
        <Routes>
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

        </Routes>

      </div>
      <Footer />

    </div>
    // </BrowserRouter>
  );
}


// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }

export default App;

