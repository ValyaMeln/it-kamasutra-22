import React from 'react';  // React з папки node_modules
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import Users from './components/Users/Users';
import UsersContainer from './components/Users/UsersContainer';


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

          <Route path='/profile/*' element={<Profile
          // store={props.store}

          />} />


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

