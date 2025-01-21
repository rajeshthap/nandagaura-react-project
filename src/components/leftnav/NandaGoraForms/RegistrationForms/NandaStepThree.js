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
import { FaCheck } from "react-icons/fa6";
import { LuHeading1 } from "react-icons/lu";
import SteponeView from "../../../modal/SteponeView";
import SteptwoView from "../../../modal/SteptwoView";
const NandaStepThree = ({ buttons }) => {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

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
                <div className="nd-step2">
                  <SteponeView />
                </div>
                <div className="nd-step2">
                  <SteptwoView />
                </div>
                <div className="nd-step1">
                  <h3>Step 3 : चल / अचल सम्पत्ति का विवरण</h3>
                </div>
                <span className="nd-step3-note">
                  नोट- यदि आवेदक उत्तराखण्ड के किसी अन्य जनपद से हो तो वहाँ की
                  भी समस्त अचल सम्मपत्ति का पूर्ण विवरण{" "}
                </span>
              </Row>
              <div className="nd-step1">
                <h3>
                  1. परिवार के सदस्यों का विवरण{" "}
                  <span className="alert-txt">*</span>{" "}
                </h3>
              </div>
              <Row className="nd-stepform-box">
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1>
                      1. सामाजिक आर्थिक जाति जनगणना में परिवार की स्थिति का
                      विवरण <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>प्रकार चुने </option>
                      <option value="स्वयं का व्यवसाय">स्वतः सम्मिलित</option>
                      <option value="अन्य कार्य">सम्मिलित नही</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1 className="nd-step-heading">
                      2. बालिका के परिवार के पास उपलब्ध भूमि का प्रकार{" "}
                      <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>भूमि प्रकार चुने </option>
                      <option value="निजी क्षेत्र में सेवा">पैतृक भूमि</option>
                      <option value="कृषि कार्य">क्रय भूमि</option>
                      <option value="स्वयं का व्यवसाय">पट्टा/Lease</option>
                      <option value="अन्य कार्य">भूमिहीन</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text nd-step-heading"
                    controlId="exampleForm.ControlInput1"
                  >
                    <h1 className="nd-step-heading">
                      3. बालिका के परिवार के पास आवासीय उपलब्ध भूमि का प्रकार{" "}
                      <span className="alert-txt">*</span>
                    </h1>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>आवासीय भूमि प्रकार चुने </option>
                      <option value="निजी क्षेत्र में सेवा">रजिस्ट्री</option>
                      <option value="कृषि कार्य">पट्टे की भूमि</option>
                      <option value="स्वयं का व्यवसाय">किराया</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>
                    4.सामाजिक आर्थिक जाति जनगणना में परिवार की स्थिति का विवरण{" "}
                  </h1>
                </div>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      1. भूमि का क्षेत्रफल (हेक्टेयर में){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="भूमि का क्षेत्रफल"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={4} md={4} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      2. वर्तमान मूल्य () <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="र्तमान मूल्य"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="nd-stepform-box">
                <div className="nd-step-heading">
                  <h1>5.आवास का विवरण </h1>
                </div>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      1. आवासीय भूमि <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="nd-steps-drop"
                    >
                      <option>आवासीय भूमि प्रकार चुने </option>
                      <option value="स्वयं का व्यवसाय">कच्चा</option>
                      <option value="अन्य कार्य">पक्का</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      2. कक्षों की संख्या (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="कक्षों की संख्या"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      3. क्षेत्रफल- <span>(हेक्टेयर में)</span> (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="कक्षों की संख्या"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
                <Col lg={3} md={3} sm={12}>
                  <Form.Group
                    className="mb-3 nd-req-text"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      2. वर्तमान मूल्य <span>₹</span> (){" "}
                      <span className="alert-txt">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="वर्तमान मूल्य"
                      className="shadow1"
                    />
                  </Form.Group>
                </Col>
              </Row>
              

              
             
              
              <div className="nd-btnn text-center">
                <Link to="/NandaStep4th">
                  <Button className="mt-3 nd-primary-btn"> सबमिट करे </Button>
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

export default NandaStepThree;
