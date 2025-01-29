import React from "react";
import Form from "react-bootstrap/Form";
import "../../../assets/css/LeftNav.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import DashHeader from "../../leftnav/DashHeader";
import "../../../assets/css/NandaStepOne.css";
import "../../../assets/css/HomePage.css";
import Footer from "../../footer/Footer";
import Table from "react-bootstrap/Table";
import InnerNavigation from "../../leftnav/InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";
import GirlsBornStep from "../../leftnav/NandaGoraForms/RegistrationForms/GirlsBornStep";
import { Link } from "react-router-dom";
import TwelthPass from "./TwelthPass";

const TwelthStepTwo = () => {
  return (
    <>
      <div>
        {/* Header */}
        <DashHeader />
        <div className="main-container">
          <InnerNavigation />

          {/* Main Container */}
          <div className="main">
            <TwelthPass />
            <div className="box-container">
              <Row>
                <Row>
                  <div className="nd-step1">
                    <h3>Step 2 : सदस्यों/दस्तावेजों की जानकारी</h3>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                इंटर मीडिएट उत्तीर्ण करने का वर्ष{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Select
                                aria-label="Default select example"
                                className="shadow1 nd-mt-6"
                              >
                                <option selected="" disabled="">
                                  सेलेक्ट इंटर मीडिएट उत्तीर्ण करने का वर्ष
                                </option>
                                <option value="2006">2006</option>
                                <option value="2006">2007</option>
                                <option value="2006">2008</option>
                                <option value="2006">2009</option>
                                <option value="2006">2010</option>
                                <option value="2006">2011</option>
                                <option value="2006">2013</option>
                                <option value="2006">2014</option>
                                <option value="2006">2015</option>
                                <option value="2006">2016</option>
                                <option value="2006">2017</option>
                                <option value="2006">2018</option>
                                <option value="2006">2019</option>
                                <option value="2006">2020</option>
                              </Form.Select>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                स्कूल का नाम{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder=" स्कूल का नाम "
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                बोर्ड का नाम{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="बोर्ड का नाम "
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                इंटर उपरांत उच्च शिक्षा हेतु प्रवेश का विवरण{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="इंटर उपरांत उच्च शिक्षा हेतु प्रवेश का विवरण  "
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row className="nd-stepform-box">
                        <div className="nd-step-heading">
                          <h1>आवेदक छात्रा के अन्य भाई/बहनो का विवरण </h1>
                        </div>
                        <Table bordered responsive="sm">
                          <thead>
                            <tr>
                              <th className="nd-table-title nd-born-thead">क्र0सं0</th>
                              <th className="nd-table-title nd-born-thead">भाई/बहन का नाम</th>
                              <th className="nd-table-title nd-born-thead">जन्म तिथि</th>
                              <th className="text-center nd-table-p nd-born-thead">
                                <div className="table-border">
                                  <div className="p-b-3 nd-table-style">
                                    शैक्षिक अर्हता का विवरण
                                  </div>
                                </div>
                                <th className="nd-table-title nd-born-thead">
                                  10वी तक के विद्यालय का नाम
                                </th>
                                <th className="nd-table-title nd-born-thead">
                                  12वी तक के विद्यालय का नाम
                                </th>
                                <th className="nd-table-title nd-born-thead">
                                  स्नातक के कॉलेज का नाम
                                </th>
                                <th className="nd-table-title nd-born-thead">
                                  स्नातकोत्तर के कॉलेज का नाम
                                </th>
                              </th>
                              <th className="nd-table-title nd-born-thead">
                                यदि वर्त्तमान में नहीं पढ़ रह है, तो क्या कर रहे
                                है। (पूर्ण विवरण)
                                <span className="ruppees">₹</span>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>
                                <Form.Control
                                  type="text"
                                  placeholder="Name"
                                  className="shadow1 nd-mt-6"
                                />
                              </td>
                              <td>
                                <Form.Control
                                  type="Date"
                                  placeholder="Name"
                                  className="shadow1 nd-mt-6"
                                />
                              </td>
                              <td>
                                <table>
                                  <tr className="nd-table-row">
                                    <td className="nd-pr-4">
                                      {" "}
                                      <Form.Control
                                        type="text"
                                        className="shadow1 nd-mt-6"
                                      />
                                    </td>
                                    <td className="nd-pr-4">
                                      {" "}
                                      <Form.Control
                                        type="text"
                                        className="shadow1 nd-mt-6"
                                      />
                                    </td>
                                    <td className="nd-pr-4">
                                      {" "}
                                      <Form.Control
                                        type="text"
                                        className="shadow1 nd-mt-6"
                                      />
                                    </td>
                                    <td className="nd-pr-4">
                                      {" "}
                                      <Form.Control
                                        type="text"
                                        className="shadow1 nd-mt-6"
                                      />
                                    </td>
                                  </tr>
                                </table>
                              </td>

                              <td>
                                {" "}
                                <Form.Control
                                  type="text"
                                  className="shadow1 nd-mt-6"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Row>
                    </Form>
                  </Col>
                </Row>
                <div className="nd-btnn text-center">
                  <Link to="/TwelthStepThree">
                    {" "}
                    <Button className="mt-3 nd-primary-btn"> सबमिट करे </Button>
                  </Link>
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

export default TwelthStepTwo;
