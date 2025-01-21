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
            <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">District Name:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                
                <option selected="" disabled="">Choose District Name</option>
                                  <option value="almora">Almora</option>
                                  <option value="bageshwar">Bageshwar</option>
                                  <option value="chamoli">Chamoli</option>
                                  <option value="champawat">Champawat</option>
                                  <option value="dehradun">Dehradun</option>
                                  <option value="haridwar">Haridwar</option>
                                  <option value="nanital">Nanital</option>
                                  <option value="pauri">Pauri Garhwal</option>
                                  <option value="pithoragarh">Pithoragarh</option>
                                  <option value="rudraprayag">Rudraprayag</option>
                                  <option value="tehri">Tehri Garhwal</option>
                                  <option value="usnagar">Usnagar</option>
                                  <option value="uttarkashi">Uttarkashi</option>
                              
                
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">Choose Sector:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                
                almora	<option selected="" disabled="" value="">Choose Sector</option>
			<optgroup label="Bhaisiyachana [0506401]">
							<option value="Badechina [01]">Badechina [01]</option>
					<option value="SERAGHAT [02]">SERAGHAT [02]</option>
			</optgroup><optgroup label="Bhikiyasain [0506402]">
							<option value="BASOT[ 01] [01]">BASOT[ 01] [01]</option>
					<option value="BHIKIYASEN [02]">BHIKIYASEN [02]</option>
					<option value="DAULA [03]">DAULA [03]</option>
					<option value="VINAYAK [04]">VINAYAK [04]</option>
			</optgroup><optgroup label="Chaukhutiya [0506403]">
							<option value="CHAUKHUTIYA[ 01] [01]">CHAUKHUTIYA[ 01] [01]</option>
					<option value="JAURASI [02]">JAURASI [02]</option>
					<option value="KHIDA [03]">KHIDA [03]</option>
					<option value="MAASI [04]">MAASI [04]</option>
			</optgroup><optgroup label="Dhauladevi [0506404]">
							<option value="ANDOLI [01]">ANDOLI [01]</option>
					<option value="BAMANSWAL [02]">BAMANSWAL [02]</option>
					<option value="BHANOLI [03]">BHANOLI [03]</option>
					<option value="DANIYADHYADI [04]">DANIYADHYADI [04]</option>
					<option value="KALOTA [05]">KALOTA [05]</option>
					<option value="PANUWANAULA [06]">PANUWANAULA [06]</option>
					<option value="POKHARI [07]">POKHARI [07]</option>
			</optgroup><optgroup label="Dwarahat [0506405]">
							<option value="BINTA [01]">BINTA [01]</option>
					<option value="DWARAHAT [02]">DWARAHAT [02]</option>
					<option value="IRA BARAKHAM [03]">IRA BARAKHAM [03]</option>
					<option value="KAFRA [04]">KAFRA [04]</option>
					<option value="KUWALI[ 05] [05]">KUWALI[ 05] [05]</option>
					<option value="MAJKHALI [06]">MAJKHALI [06]</option>
					<option value="rawari mini [15]">rawari mini [15]</option>
					<option value="aina var [23]">aina var [23]</option>
					<option value="bhet [35]">bhet [35]</option>
					<option value="melta [43]">melta [43]</option>
			</optgroup><optgroup label="Havalbag [0506406]">
							<option value="ALMORA 1 [01]">ALMORA 1 [01]</option>
					<option value="ALMORA 2 [02]">ALMORA 2 [02]</option>
					<option value="DOLAGHAT [03]">DOLAGHAT [03]</option>
					<option value="HAWALBAGH [04]">HAWALBAGH [04]</option>
					<option value="SITLAKHET [05]">SITLAKHET [05]</option>
			</optgroup><optgroup label="Lamgarha [0506407]">
							<option value="DHORA [01]">DHORA [01]</option>
					<option value="JAINTI [02]">JAINTI [02]</option>
					<option value="LAMGARHA [03]">LAMGARHA [03]</option>
					<option value="SAHARFATAK [04]">SAHARFATAK [04]</option>
			</optgroup><optgroup label="Salt [0506408]">
							<option value="DEVAYAL [01]">DEVAYAL [01]</option>
					<option value="HARARA [02]">HARARA [02]</option>
					<option value="JALIKHAN [03]">JALIKHAN [03]</option>
					<option value="MANILA [04]">MANILA [04]</option>
			</optgroup><optgroup label="Syalde [0506409]">
							<option value="DEGHAT [01]">DEGHAT [01]</option>
					<option value="SARAIKHET [02]">SARAIKHET [02]</option>
					<option value="SYALDE [03]">SYALDE [03]</option>
			</optgroup><optgroup label="Tadikhet [0506410]">
							<option value="BHUJAN [01]">BHUJAN [01]</option>
					<option value="BILLEKH [02]">BILLEKH [02]</option>
					<option value="CHILIYANOLA[ 03] [03]">CHILIYANOLA[ 03] [03]</option>
					<option value="DEVLIKHET [04]">DEVLIKHET [04]</option>
					<option value="KUNLAKHET [05]">KUNLAKHET [05]</option>
					<option value="RANIKHET [06]">RANIKHET [06]</option>
					<option value="TARIKHET [07]">TARIKHET [07]</option>
			</optgroup><optgroup label="Takula [0506411]">
							<option value="SOMESWAR1[ 01] [01]">SOMESWAR1[ 01] [01]</option>
					<option value="SARAIKHET [02]">SARAIKHET [02]</option>
					<option value="SOMESWER 2[ 02] [02]">SOMESWER 2[ 02] [02]</option>
					<option value="TAKULA [03]">TAKULA [03]</option>
	</optgroup>
                              
                
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-3" controlId="block">
              <Form.Label className="nd-form-label">Anganwadi Name:</Form.Label>
              <Form.Select
                aria-label="Choose block"
                className="nd-steps-drop"
              >
                
                <option selected="" disabled="">Choose Anganwadi Name</option>
                                  <option value="Anganwadi-01">Anganwadi-01</option>
                                  <option value="Anganwadi-02">Anganwadi-02</option>
                                  <option value="Anganwadi-03">Anganwadi-03</option>
                                  <option value="Anganwadi-04">Anganwadi-04</option>
                                  
                              
                
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
