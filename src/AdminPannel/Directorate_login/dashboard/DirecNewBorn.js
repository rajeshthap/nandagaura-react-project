import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";

// import UKLogon from "../../assets/images/UKLogo.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col} from "react-bootstrap";
import { GrRestroomWomen } from "react-icons/gr";
import GirlIcon from "../../../assets/images/girl_icon.svg"
import dashICon from "../../../assets/images/girls-dash-icon.png"
import BornICon from "../../../assets/images/Born-Girl-icon.png"
import TechLeftnav from "../../technicalcomponents/leftnavbar/TechLeftnav"
import NandaTech from "../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../technicalcomponents/footer/TechFooter";
import DirectorateLeftnav from "../leftnavigation/DirectorateLeftnav";

const DirecNewBorn = () => {
 
  return (
    <>
      <div>
       
      

        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateLeftnav />

          {/* Main Content */}

          <div className="main">
            <NandaTech/>

            <div className="box-container">
             <div className="nd-tech-heading">
              <h1>Dashboard-Directorate Department Login login</h1>
             </div>
             New Born Application
             
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

export default DirecNewBorn;
