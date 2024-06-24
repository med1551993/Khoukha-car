import React from "react";
import HeroPage from "../components/HeroPage";
import { TbPhoneCall } from "react-icons/tb";
import { TbMail } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsSend } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <HeroPage name={"Contact"} />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div-text">
              <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <span>
                {" "}
                <TbPhoneCall size={25} /> &nbsp; (123)-456-789{" "}
              </span>
              <span>
                <TbMail size={25} /> &nbsp; carrental@gmail.com{" "}
              </span>
              <span>
                {" "}
                <MdOutlineLocationOn size={25} /> &nbsp; Tunis, Tunisia{" "}
              </span>
            </div>

            <div className="contact-div-form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>

                <input type="text" placeholder="E.g: Foulen Fouleni"></input>
                <label>
                  Email <b>*</b>
                </label>

                <input
                  type="email"
                  placeholder="foulenmail@example.com"
                ></input>
                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write here..."></textarea>

                <button type="submit">
                  <BsSend size={30} /> &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
