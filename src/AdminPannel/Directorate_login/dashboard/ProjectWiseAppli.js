import React from "react";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "../direc_assets/css/DirecCDPO.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Pagination, Table } from "react-bootstrap";
import NandaTech from "../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../technicalcomponents/footer/TechFooter";
import DirectorateLeftnav from "../leftnavigation/DirectorateLeftnav";
const ProjectWiseAppli = () => {

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
                <h1>Project wise received on this Portal</h1>
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
                      <th>District Name</th>
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
                      <td>5</td>
                      <td>2</td>
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

export default ProjectWiseAppli;
