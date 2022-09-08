import React from "react";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import heroImg from "../assets/crypto-vector.json";

const HeroSection = () => {
   return (
      <>
         <div className="hero_container flex jc-sb">
            <Fade bottom>
               <div className="content">
                  <h1 className="main_headings title">CRYPTO FORENSICS</h1>
                  <p>
                     The most comprehensive Global Crypto Survey is here. Buy &
                     trade on the original crypto exchange. Crypto Forensics
                     makes trading easy, fast & reliable. With 24/7 support,
                     staking and bank-grade security & insurance.
                  </p>
                  <button className="btn btn_started">Get Started</button>
               </div>
            </Fade>
            <div className="hero_img_container">
               <Lottie animationData={heroImg} loop={true} />
            </div>
         </div>
      </>
   );
};

export default HeroSection;
