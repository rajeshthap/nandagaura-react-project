import React from "react";
import "../../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Pagination, Table, Button } from "react-bootstrap";
import "../../pro_assests/ResetSectorPassword.css";
import TechFooter from "../../../technicalcomponents/footer/TechFooter";
import "../../../Project_login/pro_assests/ProjectLeftnav.css";
import ProjectLeftNav from "../../project_leftnav/ProjectLeftNav";
import ProjectNandaGaura from "../ProjectNandaGaura";

const GirlChildSectorView = () => {
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
                <h1>Sector-wise Applications Recieved New Born child</h1>
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
              </Row>
              <div className="table-responsive-lg">
                <Table className="pro-thead">
                  <thead>
                    <tr>
                      <th>S.no</th>
                      <th>District Name</th>
                      <th>Project Name</th>
                      <th>Sector Name</th>
                      <th>Total Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      {/* Corrected <select> inside the same <td> */}
                      <td className="t-d-p">
                      Bageshwar
                      </td>
                      <td className="t-d-p">
                      Kapkot [0506303]
                      </td>
                      <td>KAMERIDEVI [01]</td>
                     
                      <td className="pro-t-d-report">
                        <div className="pro-rest-btn">
                          <Button className="view-btn">
                            <span className="pro-span-btn">17</span> View Sector Retport
                          </Button>
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

export default GirlChildSectorView;
