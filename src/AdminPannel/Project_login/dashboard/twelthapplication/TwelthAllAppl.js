import React from "react";
import "../../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import NandaTech from "../../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../../technicalcomponents/footer/TechFooter";
import "../../../Project_login/pro_assests/ProjectLeftnav.css";

import ProjectLeftNav from "../../project_leftnav/ProjectLeftNav";

const TwelthAllAppl = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <ProjectLeftNav />
          {/* Main Content */} 
          <div className="main">
            <NandaTech />
            <div className="box-container">
              <div className="nd-tech-heading">
                <h1>AWC Informmation</h1>
              </div>
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

export default TwelthAllAppl;
