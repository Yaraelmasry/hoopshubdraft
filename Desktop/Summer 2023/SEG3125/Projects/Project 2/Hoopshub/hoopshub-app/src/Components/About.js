import React from "react";
import Ball from "../assets/ball.jpg";
import Ball2 from "../assets/ball2.jpg";
import Ball3 from "../assets/ball3.jpg";
import Ball4 from "../assets/ball4.jpg";
import AboutData from "./AboutData";



const About = () => {
    return (
      <>
        <div className="about">
          <h1>About Us</h1>
          <AboutData
            className="first-des"
            heading="Our History"
            text="We are a Basketball club founded in 2018. We serve both male and female athletes ages 18+.Nunc ut ornare id congue at
            Nunc ut ornare id congue at magna sagittis mi placerat. ltrices himenaeos facilisis feugiat curabitur? Tristique gravida at dictum, feugiat dignissim."
            
            img1={Ball}
            img2={Ball3}
          />
  
          <AboutData
            className="first-des-reverse"
            heading="What we Offer!"
            text="HoopsHub offers a wide range of programs for basketball athletes looking to join a league. We also offer recreational drop-ins and programs for our athletes!
            Nunc ut ornare id congue at magna sagittis mi placerat. ltrices himenaeos facilisis feugiat curabitur? Tristique gravida at dictum, feugiat dignissim."
            img1={Ball2}
            img2={Ball4}
          />
        </div>
      </>
    );
  };
  
  export default About;