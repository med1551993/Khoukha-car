import React, { useState } from "react";

const CarBox = ({ data, id }) => {
  const [carLoad, setCarLoad] = useState(true);
  const car = data[id];
  return (
    <>
      <div className="box-cars">
        <div className="pick-car">
          {carLoad && <span className="loader"></span>}
          <img
            src={car.img}
            alt="car-img"
            style={{ display: carLoad ? "none" : "block" }}
            onLoad={() => setCarLoad(false)}
          />
        </div>
        <div className="pick-description">
          <div className="pick-description-price">
            <span>$45</span>/ rent per day
          </div>
          <div className="pick-description-table">
            <div className="pick-description-table-row">
              <span>Model</span>
              <span>{car.model}</span>
            </div>
            <div className="pick-description-table-row">
              <span>Mark</span>
              <span>{car.mark}</span>
            </div>
            <div className="pick-description-table-row">
              <span>Year</span>
              <span>{car.year}</span>
            </div>
            <div className="pick-description-table-row">
              <span>Doors</span>
              <span>{car.doors}</span>
            </div>
            <div className="pick-description-table-row">
              <span>AC</span>
              <span>{car.air}</span>
            </div>
            <div className="pick-description-table-row">
              <span>Transmission</span>
              <span>{car.transmission}</span>
            </div>
            <div className="pick-description-table-row">
              <span>Fuel</span>
              <span>{car.fuel}</span>
            </div>
          </div>
          <a className="cta-btn" href="">
            Reserve Now
          </a>
        </div>
      </div>
    </>
  );
};

export default CarBox;
