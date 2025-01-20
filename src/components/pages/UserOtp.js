import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../assets/css/MainHome.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/css/CreatePasswordRegis.css";
function UserOtp() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigates to the previous page
  };
  return (
    <Container className="nd-user-reg mt-2">
      <Row>
        <div className="nd-user-otp mt-5">
          <Form>
            <div className="text-center nd-regis-heading">
              <h5 className="mt-2">OTP Form</h5>
            </div>
            <Row className="p-3">
              <Col lg={12} md={12} sm={12}>
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
              <Col lg={12} md={12} sm={12}>
                <Form.Group
                  className="mb-3 nd-req-text"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Receive OTP from phone <span className="alert-txt">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Receive OTP"
                    className="shadow1"
                  />
                </Form.Group>
              </Col>
              <div className="nd-registration mt-4 ">
                <Button
                  variant="secondary"
                  className="nd-back-btn"
                  onClick={goBack}
                >
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
        </div>
      </Row>
    </Container>
  );
}

export default UserOtp;
