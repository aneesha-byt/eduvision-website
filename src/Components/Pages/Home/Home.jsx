import React from "react";
import meta from "../../../assets/img/meta.jpeg";
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Home.css";
import Courses from "../Courses/Courses";
import Community from "../Community/Community";
import Plans from "../Plans/Plans";


function Home() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.coursera.org/courses%3Fquery%3Dartificial%2520intelligence&ved=2ahUKEwi6767vuYOIAxU07TgGHbyuCIoQFnoECA4QAQ&usg=AOvVaw1vPsdRKRmBCZ74U5Ca_Dd_"
    );
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="home-container">
            <div className="home-content">
              <h2 className="section_title">Learn Everything For Free</h2>
              <p>
                Master Trading Technologies with Techvision AI,Invest your Time
                and skill
              </p>
              <div className="home-btns">
                <button className="register-btn" onClick={handleClick}>
                  Get Started
                </button>

                <button className="register-btn" onClick={handleClick}>
                  Watch Now!
                </button>
              </div>
            </div>
            <div className="home-img">
              <div className="home-img-wrapper">
                <div className="box-01">
                  <div className="box-img">
                    <img src={meta} alt="" />
                  </div>
                </div>
                <div className="whatspp-container">
                  <h5> 500 + students</h5>
                  <AiOutlineWhatsApp color="green" />
                </div>

                <div className="support">
                  <h5>Active Support</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <Community />
      <Plans />
    
    </>
  );
}

export default Home;
