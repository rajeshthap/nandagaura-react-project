import React from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";
import Footer from "../../../footer/Footer";
import InnerNavigation from "../../InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import NandaYojana from "../../NandaYojana";
const Change = () => {
  return (
    <>
      <div>
        {/* Header */}
        <DashHeader />
        <div className="main-container">
          <InnerNavigation />

          {/* Main Container */}
          <div className="main">
            <NandaYojana />
            <div className="box-container">
              <Row>
                <Row>
                  <div className="nd-step1">
                    <h3>My Details</h3>
                  </div>
                </Row>
                <div>
                  <Row className="nd-stepform-box">
                    <Col lg={4} md={4} sm={12}>
                      <Form>
                        <Form.Group
                          className="mb-3 nd-req-text"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>User Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="User Name "
                            className="shadow1 nd-required"
                            required
                            disabled
                            value="vishtest"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="Mobile No."
                          className="shadow1"
                          disabled
                          value="8193991148"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label> Aadhar No.</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder=" Aadhar No."
                          className="shadow1"  disabled
                          value="789789789788"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>District</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=" District "
                          className="shadow1"
                          value="Dehradun"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Project/Block</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          className="nd-steps-drop"
                        >
                          <option value="Doiwala [0506003]">
                            Doiwala
                          </option>
                          <option value="निजी क्षेत्र में सेवा">
                            Dehradun City{" "}
                          </option>
                          <option value="कृषि कार्य">Kalsi </option>
                          <option value="स्वयं का व्यवसाय">Raipur </option>
                          <option value="अन्य कार्य">Sahaspur </option>
                        </Form.Select>
                        <span>Project will be updated on step 1 also</span>
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Old Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Old Password"
                          className="shadow1"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>New Password </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="New Password"
                          className="shadow1"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Confirm Password </Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Confirm Password"
                          className="shadow1"
                        />
                      </Form.Group>
                    </Col>

                    <div className="nd-btnn text-center">
                      <Link to="/NandaStepTwo">
                        {" "}
                        <Button className="mt-3 nd-primary-btn mb-3">
                          {" "}
                          Update Details{" "}
                        </Button>
                      </Link>
                    </div>
                  </Row>
                </div>
              </Row>
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change;
