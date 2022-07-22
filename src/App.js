import React from 'react';  // React з папки node_modules
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  // debugger;
  return (
    // <BrowserRouter>
    <div className='app-wrapper'>

      <Header />

      <Navbar />


      <div className='app-wrapper-content'>
        <Routes>
          {/* //Route слідкують за урлом url */}
          <Route path='/dialogs/*' element={<DialogsContainer
          // store={props.store} 
          />} />

          {/* <Route path='/profile/:userId' element={<ProfileContainer
          // store={props.store}
          />}
          /> */}
          <Route path="/profile/*" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>


          <Route path='/news/*' element={<News />} />

          <Route path='/users/*' element={<UsersContainer />} />

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

