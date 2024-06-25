import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbCar } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

const BookCar = () => {
  return (
    <>
      <section id="booking-section" className="book-section">
        <div className="container">
          <div className="book-content">
            <div className="book-content-box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <IoCloseOutline size={30} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <IoCloseOutline size={30} />
              </p>

              <form className="box-form">
                <div className="box-form-car-type">
                  <label>
                    <TbCar size={30} /> &nbsp; Select your car type <b>*</b>
                  </label>
                  <select>
                    <option> Select your car type</option>
                    <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                    <option value="VW Golf 6">VW Golf 6</option>
                    <option value="Toyota Camry">Toyota Camry</option>
                    <option value="BMW 320 ModernLine">
                      BMW 320 ModernLine
                    </option>
                    <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                    <option value="VW Passat CC">VW Passat CC</option>
                  </select>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <FaLocationDot size={30} /> &nbsp; Pick-up <b>*</b>
                  </label>
                  <select>
                    <option>Select pick up location</option>
                    <option>Belgrade</option>
                    <option>Novi Sad</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <FaLocationDot size={30} /> &nbsp; Drop-of <b>*</b>
                  </label>
                  <select>
                    <option>Select drop off location</option>
                    <option>Novi Sad</option>
                    <option>Belgrade</option>
                    <option>Nis</option>
                    <option>Kragujevac</option>
                    <option>Subotica</option>
                  </select>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <MdDateRange size={30} /> &nbsp; Pick-up <b>*</b>
                  </label>
                  <input type="date"></input>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <MdDateRange size={30} /> &nbsp; Drop-of <b>*</b>
                  </label>
                  <input type="date"></input>
                </div>

                <button type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookCar;
