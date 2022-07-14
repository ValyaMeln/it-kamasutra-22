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
            {/* //Route слідкують за урлом url */}
            <Route path='/dialogs/*' element={<Dialogs store={props.store} />} />

            <Route path='/profile/*' element={<Profile
              profilePage={props.appState.profilePage}
              dispatch={props.dispatch}
            />} />


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

