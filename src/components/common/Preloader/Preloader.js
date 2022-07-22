import React from 'react'; 
import preloader from '../../../assets/images/loading.svg';

const Preloader = (props) => {
  return (
    // <div style={{ backgroundColor: "blue" }}>
    <div>
      <img src={preloader} alt={preloader} />
    </div>
  )
}

export default Preloader;