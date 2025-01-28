import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
// import { Link } from "react-router-dom";
import "../../../techassets/techcss/TechLeft.css";
import "../../../techassets/techcss/TechDashboard.css";
import Table from "react-bootstrap/Table";
// import UKLogon from "../../assets/images/UKLogo.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import "../../../techassets/techcss/CDPO.css";

import BornICon from "../../../../assets/images/Born-Girl-icon.png";

// import "../../assets/css/HomePage.css";
// import Footer from "../footer/Footer";

// import BirthCheckbox from "./BirthCheckbox";

// import { PiDownloadSimpleBold } from "react-icons/pi";
import TechLeftnav from "../../../technicalcomponents/leftnavbar/TechLeftnav";
import NandaTech from "../../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../../technicalcomponents/footer/TechFooter";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import DirectorateLeftnav from "../../leftnavigation/DirectorateLeftnav";

const DirecSupervisore = () => {
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
                <h1>Our CDPO Registered on this Portal</h1>
              </div>

              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div class="search-container">
                    <form>
                      <input
                        class="search"
                        id="searchleft"
                        type="search"
                        name="q"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <label class="button search-btn " for="searchleft">
                        <span class="mglass">&#9906;</span>
                      </label>
                    </form>
                  </div>
                </Col>
               
              </Row>
              <div className="table-responsive-lg">
              <Table className="nd-our-staff">
              <thead className="direc-thead">
                  <tr>
                    <th>S.no</th>
                    <th>District</th>
                    <th>Project</th>
                    <th>Sector</th>
                    <th>Supervisor</th>
                    <th>Mobile No.</th>
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>Dimple Verma</td>
                    <td>9876543210</td>
                   
                  </tr>
                  
                </tbody>
              </Table>
              </div>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <div className="tech-staff-perviose">
                    <div>Showing 1 to 10 of 105 entries</div>
                  </div>{" "}
                </Col>
                <Col lg={6} md={6} sm={12}>
                  {" "}
                  <div className="tech-staff-table">
                    {" "}
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Ellipsis />

                      <Pagination.Item>{10}</Pagination.Item>
                      <Pagination.Item>{11}</Pagination.Item>
                      <Pagination.Item active>{12}</Pagination.Item>
                     
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>{" "}
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

export default DirecSupervisore;
