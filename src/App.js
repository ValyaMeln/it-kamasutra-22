
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
  return (
    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />

        <Navbar />


        <div className='app-wrapper-content'>
          <Routes>
        
            <Route path='/dialogs/*' element={<Dialogs dialogsData={props.dialogsData} messageData={props.messageData} />} />  
            <Route path='/profile' element={<Profile posts={props.posts} />} />
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

