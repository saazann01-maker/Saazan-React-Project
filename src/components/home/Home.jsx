import React from 'react'
import './Home.css'
import profileImg from "../../../src/assets/download.jpg";
import Navbar from '../Navbar/Navbar';
const Home = () => {
return (
    <div>
        <section className = "home">
            <div className= "home-content">
                <h1> Hi It's me Saazan Shrestha </h1>
                <h2> Frontend developer & React learner </h2>
                <p className='home-desc'>
                    Aaatma timi khushi timi mero artha timi bhayera. Aakashamai saachi rakhi
                    arko janma ni timrai banera. Juni juni yesai gari kataula. Manai bhitra maya lukai bachaula Timi ra ma
                    Maya ko sansara ma dubera. Piralai ekai china bhulera. Timi ra ma, timi ra ma
                </p>
                  <img src={profileImg} alt="Saazan Shrestha" width={200} />
            
                <button className="home-btn">Download CV</button>
            
            </div>
           
        </section>
    </div>
)
};

export default Home