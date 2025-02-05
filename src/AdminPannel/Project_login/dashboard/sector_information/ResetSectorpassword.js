import React from "react";
import "../../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col } from "react-bootstrap";
import dashICon from "../../../../assets/images/girls-dash-icon.png";

import NandaTech from "../../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../../technicalcomponents/footer/TechFooter";
import "../../../Project_login/pro_assests/ProjectLeftnav.css";

import ProjectLeftNav from "../../project_leftnav/ProjectLeftNav";

const ResetSectorpassword = () => {
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
                <h1>Reset Informmation</h1>
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

export default ResetSectorpassword;
