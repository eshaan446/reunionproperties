import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <>
    <Header/>
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText heading">Easy to contact us:</span>
          <span className="secondaryText">
          We are always ready to assist you by providing the best services. We believe that a good place to live can significantly improve your quality of life.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaGithub size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Github</span>
                   <span className="secondaryText">eshaan446</span>
                  </div>
                </div>
                <a href="https://github.com/eshaan446" target="_blank"><div className="flexCenter button">Visit Now</div></a>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaFilePdf size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Resume</span>
                    <span className="secondaryText">Eshaan's Resume</span>
                  </div>
                </div>
                <a href="https://drive.google.com/drive/folders/1zcKuzazeDkH4rjrlGYaJkb5DMsAsN4Rh" target="_blank"><div className="flexCenter button">View Once</div></a>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 145 14</span>
                  </div>
                </div>
                <div className="flexCenter button">Message now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;