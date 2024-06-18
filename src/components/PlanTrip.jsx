import React from "react";
import { MdWifiCalling3 } from "react-icons/md";
import { GiCarKey } from "react-icons/gi";
import { GrCheckboxSelected } from "react-icons/gr";

const PlanTrip = () => {
  return (
    <>
      <section className="plan-section">
        <div className="container">
          <div className="plan-container">
            <div className="plan-container-title">
              <h3>Plan your trip now</h3>
              <h2>Quick & easy car rental</h2>
            </div>
            <div className="plan-container-boxes">
              <div className="plan-container-boxes-box">
              <div className="plan-container-boxes-box-img shape1">
               <GrCheckboxSelected size={50} color='#ffc300'/>
                </div>
                <h3>Select Car</h3>
                <p>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div className="plan-container-boxes-box">
                <div className="plan-container-boxes-box-img shape2">
                <MdWifiCalling3 size={50} color='#ffc300'/>
                </div>
                <h3>Contact Operator</h3>
                <p>
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div className="plan-container-boxes-box">
                <div className="plan-container-boxes-box-img shape3">
                <GiCarKey size={50} color='#ffc300'/>
                </div>
                <h3>Let's Drive</h3>
                <p>
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
