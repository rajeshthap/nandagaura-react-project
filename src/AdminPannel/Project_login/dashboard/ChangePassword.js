import React from "react";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Row, Col, Form, Button } from "react-bootstrap";
import NandaTech from "../../technicalcomponents/dashboard/NandaTech";
import TechFooter from "../../technicalcomponents/footer/TechFooter";
import "../../Project_login/pro_assests/ProjectLeftnav.css";
import "../../Directorate_login/direc_assets/css/DirectorateDashboard.css";
import ProjectLeftNav from "../project_leftnav/ProjectLeftNav";
import "../../Project_login/pro_assests/ChangePassword.css";

const ChangePassword = () => {
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
                <h1>Profile Details</h1>
              </div>
              <Row>
                <Form>
                  <Row>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Login Type</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Garud" disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="Password"
                           disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>CDPO Incharge</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Asha chauhan"  disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>CDPO Mobile No.</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="9876543210"  disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="type new password"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={4}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </Form.Group>
                    </Col>
                    <div className="project-btn">
                    <Button variant="success" className="pro-edit-btn">Edit Password</Button>
                    <Button variant="danger" className="pro-cancel-btn">Cancel</Button>
                    </div>
                  </Row>
                </Form>
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

export default ChangePassword;
