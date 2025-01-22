import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";
import Table from "react-bootstrap/Table";
import "@fortawesome/fontawesome-free"; // Font Awesome library

import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";

import Footer from "../../../footer/Footer";

import InnerNavigation from "../../InnerNavigation";

import { Row, Col, Button } from "react-bootstrap";
import GirlsBornStep from "./GirlsBornStep";
import { Link } from "react-router-dom";

import SteponeView from "../../../modal/SteponeView";
const NandaStepTwo = () => {
  return (
    <>
      <div>
        {/* Header */}
        <DashHeader />
        <div className="main-container">
          <InnerNavigation />

          {/* Main Container */}
          <div className="main">
            <GirlsBornStep />
            <div className="box-container">
              <Row>
                <Row>
                  <div className="nd-step2">
                    <SteponeView />{" "}
                  </div>
                  <div className="nd-step1">
                    <h3>Step 2 : सदस्यों / दस्तावेज़ों की जानकारी</h3>
                  </div>
                </Row>

                <div className="nd-step1">
                  <h3>
                    1. परिवार के सदस्यों का विवरण{" "}
                    <span className="alert-txt">*</span>{" "}
                  </h3>
                </div>

                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>क्र0सं0</th>
                      <th>सदस्यों का नाम</th>
                      <th>कन्या से संबंध</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Deepika"
                          className="shadow1 nd-mt-6"
                          disabled
                        />
                      </td>
                      <td>
                        {" "}
                        <Form.Control
                          type="number"
                          placeholder="Mother"
                          className="shadow1 nd-mt-6"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Ram"
                          className="shadow1 nd-mt-6"
                          disabled
                        />
                      </td>
                      <td>
                        <Form.Control
                          type="number"
                          placeholder="Father"
                          className="shadow1 nd-mt-6"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="सदस्यों का नाम"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                        <Form.Select
                          aria-label="Default select example"
                           className="shadow1 nd-mt-6"
                        >
                          <option>Please Select </option>
                          <option value="brother">Brother</option>
                          <option value="sister">Sister </option>
                          <option value="cousin">Cousin</option>
                          <option value="relative"> Relative </option>
                        </Form.Select>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <Form.Control
                          type="text"
                          placeholder="सदस्यों का नाम"
                          className="shadow1 nd-mt-6"
                        />
                      </td>
                      <td>
                      <Form.Select
                          aria-label="Default select example"
                           className="shadow1 nd-mt-6"
                        >
                          <option>Please Select </option>
                          <option value="brother">Brother</option>
                          <option value="sister">Sister </option>
                          <option value="cousin">Cousin</option>
                          <option value="relative"> Relative </option>
                        </Form.Select>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div className="nd-step1">
                  <h3>
                    2.आय का विवरण <span className="alert-txt">*</span>
                  </h3>
                </div>
                <Table responsive="sm">
                  <tbody>
                    <tr>
                      <td>
                        <Form.Group
                          className="mb-3 nd-req-text"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>
                            कन्या शिशु के परिवार/अभिभावक की वार्षिक आय(आय प्रमाण
                            पत्र के आधार पर)<span className="alert-txt">*</span>
                          </Form.Label>

                          <Form.Control
                            type="text"
                            placeholder="कन्या शिशु के परिवार/अभिभावक की वार्षिक आय(आय प्रमाण पत्र के आधार पर)"
                            className="shadow1 nd-required"
                          />
                        </Form.Group>
                      </td>

                      <td>
                        <Form.Group
                          className="mb-3 nd-req-text"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>
                            सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र का
                            क्रमांक <span className="alert-txt">*</span>
                          </Form.Label>

                          <Form.Control
                            type="number"
                            placeholder="माता का पैन कार्ड"
                            className="shadow1 nd-required"
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mb-3 nd-req-text"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>
                            आय प्रमाण पत्र जारी करने की दिनांक{" "}
                            <span className="alert-txt">*</span>
                          </Form.Label>

                          <Form.Control
                            type="date"
                            placeholder="सक्षम अधिकारी द्वारा निर्गत आय प्रमाण पत्र का क्रमांक"
                            className="shadow1 nd-required"
                          />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <div className="nd-btnn text-center">
                  <Link to="/NandaStepThree">
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

export default NandaStepTwo;
