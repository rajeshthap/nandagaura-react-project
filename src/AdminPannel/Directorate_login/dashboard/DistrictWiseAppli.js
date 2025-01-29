import React from "react";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import NandaTech from "../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../technicalcomponents/footer/TechFooter";
import DirectorateLeftnav from "../leftnavigation/DirectorateLeftnav";
const DistrictWiseAppli = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DirectorateLeftnav />
          {/* Main Content */}
          <div className="main">
            <NandaTech />
            <div className="box-container">
              <div className="nd-tech-heading">
                <h1>Dashboard-Directorate Department Login login</h1>
              </div>12th pass Application</div>
            <div>
              <TechFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DistrictWiseAppli;
