import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/MainHome.css";
import { useNavigate } from "react-router-dom";
import "../../assets/css/CreatePasswordRegis.css";
import { Link } from "react-router-dom";
function CreatePasswordRegis() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <> 
      <Container className="nd-user-reg mt-2 ">
        <Form>
          <div className="text-center nd-regis-heading">
            <h5 className="mt-2">लाभार्थी पंजीकरण फॉर्म</h5>
          </div>
          <Row className="p-3 nd-p-regi">
            <span className="alert-txt-registration">
              12वीं पासआउट आवेदकों के लिए पंजीकरण अब बंद हो गया है ।
            </span>
            <Col lg={4} md={4} sm={12}>
              <Form>
                <Form.Group
                  className="mb-3 nd-req-text"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    बालिका का नाम <span className="alert-txt">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="enter your name "
                    className="shadow1 nd-required"
                    required
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group
                className="mb-3 nd-req-text"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  मोबाइल नंबर <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="मोबाइल नंबर"
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
                  नया पासवर्ड लिखें <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="नया पासवर्ड लिखें"
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
                  पासवर्ड पुनः लिखें <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="पासवर्ड पुनः लिखें"
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
                  आधार कार्ड नंबर <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="आधार कार्ड नंबर"
                  className="shadow1"
                />
                <span>
                  नवजात बालिका के मामले में मां का आधार जमा किया जा सकता है
                </span>
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group
                className="mb-3 nd-req-text"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  ज़िला <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ज़िला"
                  className="shadow1"
                  disabled
                  value="Dehradun"
                />
              </Form.Group>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <Form.Group
                className="mb-3 nd-req-text"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  ब्लॉक/परियोजना <span className="alert-txt">*</span>
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="nd-steps-drop"
                >
                  <option>व्यवसाय चुनें</option>
                  <option value="निजी क्षेत्र में सेवा">
                    निजी क्षेत्र में सेवा
                  </option>
                  <option value="कृषि कार्य">कृषि कार्य</option>
                  <option value="स्वयं का व्यवसाय">स्वयं का व्यवसाय</option>
                  <option value="अन्य कार्य">अन्य कार्य</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <div className="nd-registration">
              
              <Button variant="secondary" className="nd-back-btn"  onClick={goBack}>
              Go Back
                </Button>
              <Link to="/CreatePasswordRegis">
               
                <Button variant="secondary" className="btn nd-primary-btn">
                  लाभार्थी पंजीकृत करे
                </Button>
              </Link>
            </div>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default CreatePasswordRegis;
