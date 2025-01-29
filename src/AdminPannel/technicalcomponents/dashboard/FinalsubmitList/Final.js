import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
// import { Link } from "react-router-dom";
import "../../../techassets/techcss/TechLeft.css";
import "../../../techassets/techcss/TechDashboard.css";
import Table from "react-bootstrap/Table";
// import UKLogon from "../../assets/images/UKLogo.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import "../../../techassets/techcss/CDPO.css";

import TechLeftnav from "../../leftnavbar/TechLeftnav";
import NandaTech from "../NandaTech";
import TechFooter from "../../footer/TechFooter";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Final = () => {
    
    
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
              <div className="nd-tech-heading">
                <h1>Nanda Gaura Phase 2 Submited Forms
                </h1>
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
                <Col lg={6} md={6} sm={12} className="nd-staff-print">
                <Form.Group controlId="districtFilter" className="mb-3 tech-filtr-p">
       
        <Form.Select
          aria-label="Select District" className="tech-filtr-select"
         
        >
          <option value="All">All</option>
          <option value="Nanital">Nanital</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Haridwar">Haridwar</option>
        </Form.Select>
       
      </Form.Group>
      <Button variant="info" className="nd-btn-prt text-color mx-2">Filter</Button>
                  <div>
                 
                    <Button variant="secondary" className="nd-btn-prt">
                      Print
                    </Button>
                    <Button variant="success" className="mx-2 nd-btn-copy">
                      excel
                    </Button>
                  </div>
                </Col>
              </Row>
              <div className="table-responsive-lg">
              <Table className="nd-our-staff">
              <thead className="tech-thead">
                  <tr>
                    <th>S.no</th>
                    <th>Mobile No</th>
                    <th>Candidate Name</th>
                    <th>District</th>
                    
                   
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>9876543210</td>
                    <td>Deepika</td>
                    <td>Dehradun</td>
                   
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
                    <Pagination className="tech-paging">
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

export default Final;
