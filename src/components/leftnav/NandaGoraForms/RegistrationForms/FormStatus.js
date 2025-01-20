import React from "react";
import "../../../../assets/css/LeftNav.css";
import { IoCloseCircle } from "react-icons/io5";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { FaCheckCircle } from "react-icons/fa";
import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";
import Footer from "../../../footer/Footer";
import InnerNavigation from "../../InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormStatuspending from "../../FormStatuspending";
import NandaYojana from "../../NandaYojana";
const FormStatus = () => {
 
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
                    <h3>Your Form Status Page</h3>
                  </div>
                </Row>

                <div>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Form ID
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      Nanda(Praroop2)-2024-000650
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Girl Name
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      vishtest
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      DOB (Y-M-D)
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      2002-01-01
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Father Name
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      testing3
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Mother Name
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      testing
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      District
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      Dehradun
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Project
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      Doiwala [0506003]
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      Sector
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      CHHIDDARWALA [04]
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      AWC (AWC/MINI AWC)
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      KHAIRI KALA(AWC)
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt">
                      AWC Code
                    </Col>
                    <Col lg={9} md={9} sm={12}>
                      {" "}
                      5060030417
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={3} className="nd-personalID-txt nd-steps-checks">
                      Step 1
                    </Col>
                    <Col lg={9} md={9} sm={9} className="personalID-complete">
                      {" "}
                      <div className="nd-check">
                      <FaCheckCircle />
                      </div>
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt nd-steps-checks">
                      Step 2
                    </Col>
                    <Col lg={9} md={9} sm={12} className="personalID-complete">
                      {" "}
                      <FaCheckCircle />
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt nd-steps-checks">
                      Step 3
                    </Col>
                    <Col lg={9} md={9} sm={12} className="personalID-complete">
                      {" "}
                      <FaCheckCircle />
                    </Col>
                  </Row>
                  <Row className="nd-personalinfo nd-personalID">
                    <Col lg={3} md={3} sm={12} className="nd-personalID-txt nd-steps-checks">
                      Step 4
                    </Col>
                    <Col lg={9} md={9} sm={12} className="personalID-pendding">
                      {" "}
                      <IoCloseCircle />
                    </Col>
                  </Row>

                  <div className="text-center nd-f-12">
                    फॉर्म अंतिम रूप से सबमिट नहीं किया गया हैं
                  </div>
                  <div className="text-center nd-f-12">
                    <FormStatuspending />
                    Step 4 भरने के लिए आगे बढ़ें।{" "}
                  </div>
                </div>
                <div className="nd-btnn text-center">
                  <Link to="/NandaStep4th">
                    {" "}
                    <Button className="mt-3 nd-primary-btn">
                      {" "}
                      Proceed to Step 4
                    </Button>
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

export default FormStatus;
