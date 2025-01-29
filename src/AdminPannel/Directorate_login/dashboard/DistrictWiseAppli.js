import React from "react";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Table, Pagination } from "react-bootstrap";
import NandaTech from "../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../technicalcomponents/footer/TechFooter";
import DirectorateLeftnav from "../leftnavigation/DirectorateLeftnav";
import "../../Directorate_login/direc_assets/css/DistrictWise.css";

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
                <h1>District wise Application Received on this Portal 2024</h1>
              </div>
              <div className="nd-direc-heading">
                <h1>District Application Received on this Portal 2024</h1>
                <h1>District Application Received on this Portal 2024</h1>
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
                  <thead>
                    <tr>
                      <th
                        colSpan="6"
                        className="text-center direc-12th-heading"
                      >
                       New Born child Applications Received
                      </th>
                      {/* <th rowSpan="2">Approved by CDPO</th> */}
                    </tr>
                    <tr>
                      <th>S.no</th>
                      <th>District</th>
                      <th>Received</th>
                      <th>Approved by CDPO</th>
                      <th>Rejected by CDPO</th>
                      <th>Pending</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Almora</td>
                      <td>20</td>
                      <td>10</td>
                      <td>1</td>
                      <td>0</td>
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
                    <Pagination className="direct-paging">
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

export default DistrictWiseAppli;
