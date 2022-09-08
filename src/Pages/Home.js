import React from "react";
import CoinTableContainer from "../Components/CoinTableContainer";
import Crousel from "../Components/Crousel";
import HeroSection from "../Components/HeroSection";


const Home = () => {
    

    return (
    
            <div className="container  ">
                <HeroSection />
                <Crousel />
                <CoinTableContainer />
            </div>
      
    );
};

export default Home;
