import React, { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

const PickCar = () => {
  const [btnId, setBtnId] = useState(0);

  const isColored = (id) => {
    return id === btnId ? "colored-btn" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container-title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container-car-content">
              <div className="pick-box">
                <button
                  onClick={() => {
                    setBtnId(0);
                  }}
                  className={`${isColored(0)}`}
                >
                  Audi A1 S-Line
                </button>
                <button
                  onClick={() => {
                    setBtnId(1);
                  }}
                  className={`${isColored(1)}`}
                >
                  VW Golf 6
                </button>
                <button
                  onClick={() => {
                    setBtnId(2);
                  }}
                  className={`${isColored(2)}`}
                >
                  Toyota Camry
                </button>
                <button
                  onClick={() => {
                    setBtnId(3);
                  }}
                  className={`${isColored(3)}`}
                >
                  BMW 320 ModernLine
                </button>
                <button
                  onClick={() => {
                    setBtnId(4);
                  }}
                  className={`${isColored(4)}`}
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  onClick={() => {
                    setBtnId(5);
                  }}
                  className={`${isColored(5)}`}
                >
                  VW Passat CC
                </button>
              </div>
              <CarBox data={CAR_DATA} id={btnId} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PickCar;
