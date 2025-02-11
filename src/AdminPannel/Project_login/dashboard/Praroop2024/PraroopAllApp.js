import React from "react";
import "../../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Pagination, Table, Button } from "react-bootstrap";
import "../../pro_assests/ResetSectorPassword.css";
import TechFooter from "../../../technicalcomponents/footer/TechFooter";
import "../../../Project_login/pro_assests/ProjectLeftnav.css";
import ProjectLeftNav from "../../project_leftnav/ProjectLeftNav";
import ProjectNandaGaura from "../ProjectNandaGaura";
import { FaCheck } from "react-icons/fa";
import { RiFileChartLine } from "react-icons/ri";

const PraroopAllApp = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <ProjectLeftNav />
          {/* Main Content */}
          <div className="main">
            <ProjectNandaGaura />
            <div className="box-container">
              <div className="nd-tech-heading">
                <h1>Praroop 2 All Applications Received 2024-25</h1>
              </div>
              <div className="pro-list-data">
                <h2>Nanda Gaura Real-time Application Report</h2>
              </div>
              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="search-container">
                    <form>
                      <input
                        className="search"
                        id="searchleft"
                        type="search"
                        name="q"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <label className="button search-btn" htmlFor="searchleft">
                        <span className="mglass">&#9906;</span>
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

              {/* Responsive Table */}
              <div className="table-responsive-lg table-container">
                <Table className="pro-thead" striped bordered hover>
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>Form ID</th>
                      <th>Girl Name</th>
                      <th>Aadhar Number</th>
                      <th>Mother Name</th>
                      <th>Father Name</th>
                      <th>DOB</th>
                      <th>Caset Category</th>
                      <th>Sector</th>
                      <th>Final Submit</th>
                      <th colSpan="3" className="merged-column">
                        Supervisor Recommendation
                      </th>
                      <th colSpan="3" className="text-center"> CDPO Recommendation</th>
                      <th>View Details Form</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td className="t-d-p">Nanda(Praroop2)-2025-00031703</td>
                      <td className="t-d-p">PRITI ARYA</td>
                      <td>207515688252</td>
                      <td>CHAMPA DEVI</td>
                      <td>Rajendra Singh</td>
                      <td>2007-03-07</td>
                      <td>General</td>
                      <td>UDIYAR [07]</td>
                      <td>2024-08-16 13:45:02</td>
                      <td>
                        <span class="badge  rounded-pill d-inline-block nd-feedback-submit ">
                          Feedback Submitted{" "}
                          <FaCheck className="pro-feed-view" />
                        </span>
                      </td>
                      <td>Recommendation to Accept</td>
                      <td>Form is complete.</td>
                      <td>
                        <span class="badge  rounded-pill d-inline-block nd-feedback-submit ">
                          Feedback Submitted{" "}
                          <FaCheck className="pro-feed-view" />
                        </span>
                      </td>
                      <td>Recommendation to Accept</td>

                      <td>Form is complete.</td>
                      <td className="pr-p">
                        <div className="pro-rest-btn">
                          <Button className="reset-btn">View Form <RiFileChartLine /></Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className="tech-staff-perviose">
                    <div>Showing 1 to 10 of 105 entries</div>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                  <div className="tech-staff-table">
                    <Pagination className="pro-paging">
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

export default PraroopAllApp;
