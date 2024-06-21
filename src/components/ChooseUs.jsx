import React from "react";
import { PiPhoneFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { RiPriceTag3Fill } from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";

const ChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-content">
            <div className="choose-title">
              <h2>
                why <span>choose us</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit At
                facilis id sint aperiam natus optio voluptas necessitatibus
                recusandae voluptate.
              </p>
            </div>
            <div className="choose-details">
                <div className="choose-details-box">
                    <div className="choose-details-box-img">
                         <PiPhoneFill size={30} color='#ffc300'/>
                    </div>
                    <div className="choose-details-box-text">
                        <h2> Customer Support</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit maiores facere deleniti dolores.
                         </p>
                    </div>         
                </div>
                <div className="choose-details-box">
                    <div className="choose-details-box-img">
                    <FaLocationDot size={30} color='#ffc300'/>
                    </div>
                      <div className="choose-details-box-text">
                          <h2> Location</h2>
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit maiores facere deleniti dolores.
                          </p>
                      </div>   
                </div>
                <div className="choose-details-box">
                    <div className="choose-details-box-img">
                    <RiPriceTag3Fill size={30} color='#ffc300'/>
                    </div>
                      <div className="choose-details-box-text">
                          <h2> Best Price</h2>
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit maiores facere deleniti dolores.
                          </p>
                      </div>   
                </div>
                <div className="choose-details-box">
                    <div className="choose-details-box-img">
                      <MdOutlineCancelPresentation size={30} color='#ffc300'/>
                    </div>
                      <div className="choose-details-box-text">
                          <h2> Free Cancelation</h2>
                          <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit maiores facere deleniti dolores.
                          </p>
                      </div>   
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
