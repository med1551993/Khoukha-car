import React from "react";
import HeroPage from "../components/HeroPage";
import AboutMain1 from "../images/about/about-main1.jpeg";
import AboutMain2 from "../images/about/about-main2.jpg";
import AboutMain3 from "../images/about/about-main3.jpeg";

const About = () => {
  return (
    <>
      <section className="about-page">
        <HeroPage name={"About"} />
        <div className="container">
          <div className="about-content">
            <div className="about-main-1">
              <div className="about-main-text">
                <h2>Our Story</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  delectus excepturi placeat natus consectetur sint ducimus,
                  quas impedit similique tenetur doloremque provident non id
                  nihil itaque nam maiores, obcaecati autem? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Illo delectus excepturi
                  placeat natus consectetur sint ducimus, quas impedit similique
                  tenetur doloremque provident non id nihil itaque nam maiores,
                  obcaecati autem?
                </p>
              </div>
              <img src={AboutMain3} alt="car-renting" />
            </div>

            <div className="about-main-1 about-main-2">
              <img src={AboutMain2} alt="car-renting" />

              <div className="about-main-text">
                <h2>Our Approach</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  delectus excepturi placeat natus consectetur sint ducimus,
                  quas impedit similique tenetur doloremque provident non id
                  nihil itaque nam maiores, obcaecati autem? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Illo delectus excepturi
                  placeat natus consectetur sint ducimus, quas impedit similique
                  tenetur doloremque provident non id nihil itaque nam maiores,
                  obcaecati autem?
                </p>
              </div>
            </div>

            <div className="about-main-1">
              <div className="about-main-text">
                <h2>Our Mission</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                  delectus excepturi placeat natus consectetur sint ducimus,
                  quas impedit similique tenetur doloremque provident non id
                  nihil itaque nam maiores, obcaecati autem? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Illo delectus excepturi
                  placeat natus consectetur sint ducimus, quas impedit similique
                  tenetur doloremque provident non id nihil itaque nam maiores,
                  obcaecati autem?
                </p>
              </div>

              <img src={AboutMain1} alt="car-renting" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
