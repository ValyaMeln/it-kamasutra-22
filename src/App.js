
import React from 'react';  // React з папки node_modules
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';

import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />

        <Navbar />


        <div className='app-wrapper-content'>
          <Routes>

            <Route path='/dialogs/*' element={<Dialogs data={props.appState.dialogsPage} />} />

            <Route path='/profile' element={<Profile
              profilePage={props.appState.profilePage}
              addPost={props.addPost}
              updateNewPostText={props.updateNewPostText}
            />}
            />


            <Route path='/news' element={<News />} />

          </Routes>

        </div>
        <Footer />

      </div>
    </BrowserRouter>
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

