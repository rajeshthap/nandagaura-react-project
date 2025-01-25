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
import TechLeftnav from "../../leftnavbar/TechLeftnav";
import NandaTech from "../NandaTech";
import TechFooter from "../../footer/TechFooter";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const OurCDPO = () => {
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
                <Col lg={6} md={6} sm={12} className="nd-staff-print">
                  <div>
                    <Button variant="secondary" className="nd-btn-prt">
                      Print
                    </Button>
                    <Button variant="warning" className="mx-2 nd-btn-copy">
                      Copy
                    </Button>
                  </div>
                </Col>
              </Row>
              <Table striped bordered hover size="sm" className="nd-our-staff">
                <thead>
                  <tr>
                    <th>S.no</th>
                    <th>District</th>
                    <th>Project</th>
                    <th>CDPO</th>
                    <th>Mobile No.</th>
                    <th>Offline Praroop 1</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>9412980734</td>
                    <td>
                      <Button variant="success" className="nd-btn-prt">
                        view excel file
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>9412980734</td>
                    <td>
                      <Button variant="success" className="nd-btn-prt">
                        view excel file
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>9412980734</td>
                    <td>
                      <Button variant="success" className="nd-btn-prt">
                        view excel file
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>9412980734</td>
                    <td>
                      <Button variant="success" className="nd-btn-prt">
                        view excel file
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Almora</td>
                    <td>Bhaisiyachana</td>
                    <td>Sunita pant</td>
                    <td>9412980734</td>
                    <td>
                      <Button variant="success" className="nd-btn-prt">
                        view excel file
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
                      <Pagination.Item>{13}</Pagination.Item>
                      <Pagination.Item disabled>{14}</Pagination.Item>

                      <Pagination.Ellipsis />
                      <Pagination.Item>{20}</Pagination.Item>
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

export default OurCDPO;
