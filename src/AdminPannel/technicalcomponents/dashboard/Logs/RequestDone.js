import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../../../techassets/techcss/TechLeft.css";
import "../../../techassets/techcss/TechDashboard.css";

// import UKLogon from "../../assets/images/UKLogo.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col} from "react-bootstrap";
import { GrRestroomWomen } from "react-icons/gr";
import GirlIcon from "../../../../assets/images/girl_icon.svg"
import dashICon from "../../../../assets/images/girls-dash-icon.png"
import BornICon from "../../../../assets/images/Born-Girl-icon.png"

// import "../../assets/css/HomePage.css";
// import Footer from "../footer/Footer";

// import BirthCheckbox from "./BirthCheckbox";


// import { PiDownloadSimpleBold } from "react-icons/pi";
import TechLeftnav from "../../leftnavbar/TechLeftnav";
import NandaTech from "../NandaTech";
import TechFooter from "../../footer/TechFooter"

const RequestDone = () => {
 
  return (
    <>
      <div>
       
      

        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <TechLeftnav />

          {/* Main Content */}

          <div className="main">
            <NandaTech />

            <div className="box-container">
             Request Done
            </div>
            <div>
              <TechFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDone;
