import React from 'react';  // React з папки node_modules
import s from './Header.module.css';


const Header = () => {
  return (

    <header className={s.header}>
      <img src='https://seeklogo.com/images/D/dollar-logo-0683682259-seeklogo.com.jpg'></img>
    </header>


  );
}

export default Header;