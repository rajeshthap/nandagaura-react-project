import React from "react";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Card } from "react-bootstrap";

import TechFooter from "../../technicalcomponents/footer/TechFooter";
import "../../Project_login/pro_assests/ProjectLeftnav.css";
import "../../Directorate_login/direc_assets/css/DirectorateDashboard.css";
import DistrictLeftNav from "../dis_leftnav/DistrictLeftNav";
import DistrictNandaGoura from "./DistrictNandaGoura";
// import ProjectPraroopOne from "./ProjectBarChart/ProjectPraroopOne";

const DistrictDashboard = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <DistrictLeftNav />
          {/* Main Content */}
          <div className="main">
            <DistrictNandaGoura />
            <div className="box-container">
              <div className="nd-tech-heading">
                <h1>Dashboard CDPO </h1>
              </div>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="nd-tech-heading1">
                    <h2>Real Time Stats for Praroop 1</h2>
                  </div>
                  <Card className="project-card-box">
                    <Card.Body>
                      {/* <ProjectPraroopOne /> */}
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <div className="nd-tech-heading1">
                    <h2>Real Time Stats for Praroop 2 2024</h2>
                  </div>
                  <Card className="project-card-box">
                    <Card.Body>
                      {/* <ProjectPraroopOne /> */}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
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

export default DistrictDashboard;
