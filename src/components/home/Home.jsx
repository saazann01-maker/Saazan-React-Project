import React from 'react';
import './home.css';
import profileImg from '../../../assets/download.jpg';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="home">
        <div className="home-content">
          <h1>Hi, It's me Saazan Shrestha</h1>
          <h2>Frontend developer & React learner</h2>
          <p className="home-desc">
            Aaatma timi khushi timi mero artha timi bhayera. Aakashamai saachi rakhi
            arko janma ni timrai banera. Juni juni yesai gari kataula. Manai bhitra maya lukai bachaula Timi ra ma
            Maya ko sansara ma dubera. Piralai ekai china bhulera. Timi ra ma, timi ra ma
          </p>
          <button className="home-btn">Download CV</button>
        </div>
        <div className="home-img">
          <img src={profileImg} alt="Saazan Shrestha" width={200} />
        </div>
      </section>
    </div>
  );
};

export default Home;