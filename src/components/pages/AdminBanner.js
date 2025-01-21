import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "../../assets/css/MainHome.css";
import "../../assets/css/AdminBanner.css";
import Login from "../../assets/images/login.png";
import { Link } from "react-router-dom";

function AdminBanner() {
  const [isRadio, setIsRadio] = useState(6); // Default radio value

  const handleChange = (e) => {
    setIsRadio(+e.currentTarget.value); // Convert to number and set state
  };

  const renderForm = () => {
    switch (isRadio) {
      case 1: // Directorate Login
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label">Login Type</Form.Label>
              <Form.Control
                type="text"
           
                className="nd-form-control" value="DirectorateLogin" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );

      case 2: // Technical Login
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label">Login Type</Form.Label>
              <Form.Control
                type="text"
               value="Technical Login"
                className="nd-form-control" 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );

      case 3: // District Probation Login
      case 4: // District Login (DPO)
        return (
          <Form>
             <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label">Login Type</Form.Label>
              <Form.Control
                type="text"
               value="Distric Login"
                className="nd-form-control" 
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="district">
              <Form.Label className="nd-form-label">
                Choose District for Login:
              </Form.Label>
              <Form.Select
                aria-label="Choose district"
                className="nd-steps-drop"
              >
                <option value="">Choose District</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Haridwar">Haridwar</option>
                <option value="Nainital">Nainital</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );

      case 5: // Project Login
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label"> Login Type</Form.Label>
              <Form.Control
                type="text"
               value="Block Login"
                className="nd-form-control" 
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">Choose Block Login:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                <option value="">Choose Block</option>
                <option value="Block A">Chakrata</option>
                
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );
       

      case 6: // Sector Login
     
        return (
          <Form>
         <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label">Login Type</Form.Label>
              <Form.Control
                type="text"
               value="Sector Login"
                className="nd-form-control" 
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">Choose district Login:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                <option value="">Choose District</option>
                <option value="Block A">Dehradun</option>
               
              </Form.Select>
            
              <Form.Label className="nd-form-label mt-3">Choose Sector Login:</Form.Label>
              <Form.Select
                aria-label="Choose sector"
                className="nd-steps-drop"
              >
                <option value="">Choose Sector</option>
                <option value="Sector A">vikasnagr</option>
               
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );
        case 7: 
        default:
        return (
          <Form>
            <Form.Group className="mb-3 mt-3" controlId="loginType">
              <Form.Label className="nd-form-label"> Login Type</Form.Label>
              <Form.Control
                type="text"
               value="Block Login"
                className="nd-form-control" 
              />
            </Form.Group>
            {/* <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">Choose Block Login:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                <option value="">Choose Block</option>
                <option value="Block A">Chakrata</option>
                
              </Form.Select>
            </Form.Group> */}
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="nd-form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="nd-form-control"
              />
            </Form.Group>
            <div className="nd-admin-btn">
              <Button className="nd-primary">Login</Button>
            </div>
          </Form>
        );
    }
  };

  return (
    <div className="container-fluid nd-login-banner">
      <Container>
        <Row className="nd-admin-login">
          <Col lg={6} md={6} sm={12} className="mt-5 nd-main-col nd-main-data">
            <div>
              <p className="nd-subdata mt-4">नंदा गौरा योजना</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="mt-5 nd-main-login">
            <Card className="mt-4 nd-admin-form">
              <Form className="nd-form">
                <h1 className="nd-login-title">
                  <img src={Login} alt="sign" className="p-2" />
                  Login Panel
                </h1>

                <Row className="nd-p-18">
                  <Col lg={4} md={6} sm={3}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio1"
                        value={1}
                        onChange={handleChange}
                        checked={isRadio === 1}
                      />
                      <label className="form-check-label" htmlFor="radio1">
                        Directorate Login
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3}>
                    <div className="form-check">
                      <Link to="/TechnicaldashBoard"><input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio2"
                        value={2}
                        onChange={handleChange}
                        checked={isRadio === 2}
                      /></Link>
                      <label className="form-check-label" htmlFor="radio2">
                        Technical Login
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio3"
                        value={3}
                        onChange={handleChange}
                        checked={isRadio === 3}
                      />
                      <label className="form-check-label" htmlFor="radio3">
                        District Probation Login
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3} className="mt-3 m-t-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio4"
                        value={4}
                        onChange={handleChange}
                        checked={isRadio === 4}
                      />
                      <label className="form-check-label" htmlFor="radio4">
                        District Login (DPO)
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3} className="mt-3 m-t-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio5"
                        value={5}
                        onChange={handleChange}
                        checked={isRadio === 5}
                      />
                      <label className="form-check-label" htmlFor="radio5">
                        Project Login
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3} className="mt-3 m-t-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio6"
                        value={6}
                        onChange={handleChange}
                        checked={isRadio === 6}
                      />
                      <label className="form-check-label" htmlFor="radio6">
                        Sector Login
                      </label>
                    </div>
                  </Col>
                  <Col lg={4} md={6} sm={3} className="mt-3 m-t-0">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="radio6"
                        value={7}
                        onChange={handleChange}
                        checked={isRadio === 7}
                      />
                      <label className="form-check-label" htmlFor="radio6">
                        AWC Login
                      </label>
                    </div>
                  </Col>
                </Row>

                <div className="nd-login-title">
                  <h1>
                    {isRadio === 1
                      ? "Directorate Login"
                      : isRadio === 2
                      ? "Technical Login"
                      : isRadio === 3
                      ? "District Probation Login"
                      : isRadio === 4
                      ? "District Login (DPO)"
                      : isRadio === 5
                      ? "Project Login"
                      : isRadio === 6
                      ? "Sector Login"
                      : "AWC Login"
                    }
                  </h1>
                </div>

                {renderForm()}
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AdminBanner;
