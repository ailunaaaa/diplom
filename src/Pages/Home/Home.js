import React from 'react';
import './Home.css';
import home from '../../img/home_img.webp'
import home1 from '../../img/home_img.webp'
import home2 from '../../img/home_img.webp'

const Home = () => {
  return (
    <div className="home">
      <div className="home_image">

        < div className="zoom_image" >
        <img src={home} alt=""  />
        <img src= {home1}alt="" />
        <img src={home2} alt=""  />
      </div>
      </div>

    
     
    </div>
  );
};

export default Home;
