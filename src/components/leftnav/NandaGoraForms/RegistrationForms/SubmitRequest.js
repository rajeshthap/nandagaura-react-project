import React from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";
import "../../../../assets/css/SubmitRequest.css";
import Table from "react-bootstrap/Table";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";
import Footer from "../../../footer/Footer";
import InnerNavigation from "../../InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NandaYojana from "../../NandaYojana";

const SubmitRequest = () => {
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
            <div className="box-container nd-Request">
              <Row className="">
                <div className="nd-step1">
                  <h3>Submit Request/Query</h3>
                </div>

                <p>
                  <span className="nd-red">Note:</span> फाइनल सबमिट हुए आवेदन
                  फॉर्म में अपडेट करने हेतु{" "}
                  <span className="nd-red">Contact Us</span> पेज से सुपरवाइजर से
                  संपर्क करे
                </p>
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
                            placeholder="vishtest"
                            className="shadow1 nd-required"
                            required
                            disabled
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
                          placeholder="8193991148"
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
                        <Form.Label> Aadhar No.</Form.Label>
                        <Form.Control
                          type="number"
                          placeholder="789789789788"
                          className="shadow1"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form>
                        <Form.Group
                          className="mb-3 nd-req-text"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>District</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Dehradun"
                            className="shadow1 nd-required"
                            required
                            disabled
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3 nd-req-text"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Project</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Doiwala"
                          className="shadow1"
                          disabled
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Description of Request</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div>
                  <p>
                    अनुरोध लिखने के बाद{" "}
                    <span className="nd-red">Contact Us page</span> से{" "}
                    <span className="nd-red">Technical Helpline</span> से संपर्क
                    करें,लाभार्थी का फॉर्म अंतिम तिथि से पहले फाइनल सबमिट होने
                    लाभार्थी/फॉर्म भरने वाले की खुद्की जिम्मेदारी होगी.
                  </p>
                  <Table responsive="lg">
                    <thead>
                      <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Aadhar</th>
                        <th>District</th>
                        <th>Project</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Response</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>vishtest</td>
                        <td>8193991148</td>
                        <td>789789789788</td>
                        <td>Dehradun</td>
                        <td>Doiwala [0506003]</td>
                        <td>Test</td>
                        <td className="nd-red">Pending</td>
                        <td>test for are side </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>rajeshtest</td>
                        <td>8193991148</td>
                        <td>789789789788</td>
                        <td>Dehradun</td>
                        <td>Doiwala [0506003]</td>
                        <td>Test</td>
                        <td className="nd-red">Pending</td>
                        <td>test for are side </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Sipintest</td>
                        <td>8193991148</td>
                        <td>789789789788</td>
                        <td>Dehradun</td>
                        <td>Doiwala [0506003]</td>
                        <td>Test</td>
                        <td className="nd-red">Pending</td>
                        <td>test for are side </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Row>

              <div className="nd-btnn text-center">
                <Link to="/NandaStepTwo">
                  {" "}
                  <Button className="mt-3 nd-primary-btn">
                    {" "}
                    Submit Request{" "}
                  </Button>
                </Link>
              </div>
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

export default SubmitRequest;
