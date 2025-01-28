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

const DirectorateDashboard = () => {
 
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
              <h1>Dashboard-Technical Department Login login</h1>
             </div>
             
              <Row className="">
              <Col lg={6} md={6} sm={12} className="mb-2">
              <div className="card texh-nd-dashdata">
                
                <div className="card-body card-body tech-nd-data">
                    <div className="d-flex flex-shrink-0 me-3 tech-nd-title mb-2">
                  <div className="avatar ">
                    <div className="avatar-title  "> <img src={dashICon} alt="search-icon" /><i className="bx bxs-pie-chart-alt text-white"></i></div>
                   
                    </div> <div className="tech-nd-sub">Total Submitted Form(12 girls)</div>
                    </div>
                <div className="d-flex align-items-center">
              
                    <div class="flex-grow-1">
                      <p class="mb-1 tech-nd-card-title">Step</p>
                      <h4 className="mb-0">Total Submitted</h4>
                      <h4 className="mb-0">Feedback by Supervisor</h4>
                      <h4 className="mb-0">Feedback by CDPO</h4>
                      
                      </div>
                      <div class="flex-grow-1">
                      <p class="mb-1 tech-nd-card-title">Total Forms</p>
                      <h4 className="mb-0">31490</h4>
                      <h4 className="mb-0">31491</h4>
                      <h4 className="mb-0">31462</h4>
                      
                      </div>
                      
                        </div>


                </div>
              </div>
              
              
              
              </Col>
              <Col lg={6} md={6} sm={12} className="mb-2">
              <div className="card texh-nd-dashdata1">
                
                <div className="card-body card-body tech-nd-data">
                    <div className="d-flex flex-shrink-0 me-3 tech-nd-title mb-3">
                  <div className="avatar-title1 ">
                    <div className="avatar-title  "> <img src={BornICon} alt="search-icon" /><i className="bx bxs-pie-chart-alt text-white"></i></div>
                   
                    </div> <div className="tech-nd-sub">Total Submitted Form(New Born Girl)</div>
                    </div>
                <div className="d-flex align-items-center">
              
                    <div class="flex-grow-1">
                      <p class=" mb-1 tech-nd-card-title">Step</p>
                      <h4 className="mb-0">Total Submitted</h4>
                      <h4 className="mb-0">Feedback by Supervisor</h4>
                      <h4 className="mb-0">Feedback by CDPO</h4>
                      
                      </div>
                      <div class="flex-grow-1">
                      <p class=" mb-1 tech-nd-card-title">Total Forms</p>
                      <h4 className="mb-0">8578</h4>
                      <h4 className="mb-0">8081</h4>
                      <h4 className="mb-0">7466</h4>
                      
                      </div>
                      
                        </div>


                </div>
              </div>
              
              
              
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

export default DirectorateDashboard;
