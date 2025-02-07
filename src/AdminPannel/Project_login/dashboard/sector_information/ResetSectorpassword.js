import React from "react";
import "../../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Pagination, Table } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { BsDatabaseFillGear } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import { FaClockRotateLeft } from "react-icons/fa6";
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
                <h1>Project -Garud | Sector Info</h1>
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
                      <th>S.no</th>
                      <th>District Name</th>
                      <th>Project Name</th>
                      <th>Sector Name</th>
                      <th> Sector Incharge</th>
                      <th>Inchage Mobile</th>
                      <th>Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Almora</td>
                      <td>
                        <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-Received "><BsDatabaseFillGear /> Received <span className="badge nd-data-Received text-center">20</span></span>
                        </td>
                      <td>
                        <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-approved"><FaCheckCircle /> Approved <span className="badge nd-data-approved text-center">100</span></span>
                        </td>
                        <td>
                        <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-rejected"><IoMdCloseCircle /> Rejected <span className="badge nd-data-rejected text-center">01</span></span>
                        </td>
                        <td>
                        <span class="badge  rounded-pill text-dark-white d-inline-block nd-btn-pending"><FaClockRotateLeft /> Pending <span className="badge nd-data-pending text-center">10</span></span>
                        </td>
                        <td>Reset password to default password</td>
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

export default ResetSectorpassword;
