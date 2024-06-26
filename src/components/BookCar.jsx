import React, { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbCar } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { TbMessageReport } from "react-icons/tb";
import CarAudi from "../images/cars-big/audia1.jpg";
import CarGolf from "../images/cars-big/golf6.jpg";
import CarToyota from "../images/cars-big/toyotacamry.jpg";
import CarBmw from "../images/cars-big/bmw320.jpg";
import CarMercedes from "../images/cars-big/benz.jpg";
import CarPassat from "../images/cars-big/passatcc.jpg";

const BookCar = () => {
  const [modal, setModal] = useState(false);

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [dropTime, setDropTime] = useState("");
  const [carImg, setCarImg] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // taking value of modal inputs
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZipCode(e.target.value);
  };

  // open modal when all inpiuts are fulfilled

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  //disable page scroll when modal is displayed

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  //confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e) => {
    setDropTime(e.target.value);
  };

  //based on value name show car img

  let imgUrl;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    default:
      imgUrl = "";
  }

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };
  return (
    <>
      <section id="booking-section" className="book-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>
        <div className="container">
          <div className="book-content">
            <div className="book-content-box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <IoCloseOutline size={25} />
              </p>

              <p className="booking-done">
                Check your email to confirm an order.
                <IoCloseOutline size={25} onClick={hideMessage} />
              </p>

              <form className="box-form">
                <div className="box-form-car-type">
                  <label>
                    <TbCar size={30} /> &nbsp; Select your car type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
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
                  <select value={pickUp} onChange={handlePick}>
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
                  <select value={dropOff} onChange={handleDrop}>
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
                  <input
                    type="date"
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                  ></input>
                </div>

                <div className="box-form-car-type">
                  <label>
                    <MdDateRange size={30} /> &nbsp; Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button type="submit" onClick={openModal}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/******************** Modal ******************/}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal-title">
          <h2>Complete Reservation</h2>
          <IoCloseOutline size={30} onClick={openModal} />
        </div>
        {/* message */}
        <div className="booking-modal-message">
          <h4>
            <TbMessageReport size={25} /> Upon completing this reservation
            enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal-car-info">
          <div className="dates-div">
            <div className="booking-modal-car-info-dates">
              <h5>Location & Date</h5>
              <span>
                <MdDateRange size={25} />
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <MdDateRange size={25} />
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <FaLocationDot size={25} />
                <div>
                  <h6>Pick-Up Location</h6>
                  <p> {pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal-car-info-dates">
              <span>
                <FaLocationDot size={25} />
                <div>
                  <h6>Drop-Off Location</h6>
                  <p> {dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal-car-info-model">
            <h5>
              <span>Car - </span>
              {carType}
            </h5>
            <img src={imgUrl} alt="cer-img" />
          </div>
        </div>
        {/*  personal info */}
        <div className="booking-modal-person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form-2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your first name"></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input type="text" placeholder="Enter your last name"></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input type="text" placeholder="18"></input>
                <p className="error-modal">This field is required.</p>
              </span>
            </div>
            <div className="info-form-1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <div className="info-form-2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input type="email" placeholder="Enter your city"></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input type="email" placeholder="Enter your zip code"></input>
                <p className="error-modal">This field is required.</p>
              </span>
            </div>

            <span className="info-form-checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookCar;
