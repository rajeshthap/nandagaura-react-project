import React from "react";
import Form from "react-bootstrap/Form";
import "../../../assets/css/LeftNav.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import DashHeader from "../../leftnav/DashHeader";
import "../../../assets/css/NandaStepOne.css";
import "../../../assets/css/HomePage.css";
import Footer from "../../footer/Footer";
import InnerNavigation from "../../leftnav/InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TwelthPass from "./TwelthPass";

const TwelthStepOne = () => {
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
                    <h3>Step 1 : व्यक्तिगत जानकारी</h3>
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
                                छात्रा का नाम{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="छात्रा का नाम "
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
                                माता का नाम <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="माता का नाम"
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
                                पिता का नाम <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="पिता का नाम"
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                छात्रा की जन्म तिथि{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="Date"
                                placeholder="छात्रा की जन्म तिथि"
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
                                जाति श्रेणी <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Select
                                aria-label="Default select example"
                                className="shadow1 nd-mt-6"
                              >
                                <option selected="" disabled="">
                                  Please Select
                                </option>
                                <option value="General">General</option>
                                <option value="st">ST</option>
                                <option value="obc">OBC</option>
                                <option value="sc">SC</option>
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
                                मोबाइल नंबर <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="मोबाइल नंबर"
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>ईमेल आई.डी</Form.Label>
                              <Form.Control
                                type="Email"
                                placeholder="ईमेल आई.डी"
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
                                छात्रा का आधार नंबर{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="छात्रा का आधार नंबर"
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
                                जिला <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Select
                                aria-label="Default select example"
                                className="shadow1 nd-mt-6"
                              >
                                <option selected="" disabled="">
                                  Please Select
                                </option>
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
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                परियोजना / ब्लॉक{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Select
                                aria-label="Default select example"
                                className="shadow1 nd-mt-6"
                              >
                                <option selected="" disabled="">
                                  Please Select
                                </option>
                                <optgroup label="Almora">
                                  <option value="Bhaisiyachana">
                                    Bhaisiyachana
                                  </option>
                                  <option value="Bhikiyasain">
                                    Bhikiyasain
                                  </option>
                                  <option value="Chaukhutiya">
                                    Chaukhutiya
                                  </option>
                                  <option value="Dhauladevi">Dhauladevi</option>
                                  <option value="Dwarahat">Dwarahat</option>
                                  <option value="Havalbag">Havalbag</option>
                                  <option value="Lamgarha">Lamgarha</option>
                                  <option value="Salt">Salt</option>
                                  <option value="Syalde">Syalde</option>
                                  <option value="Tadikhet">Tadikhet</option>
                                  <option value="Takula">Takula</option>
                                </optgroup>
                                <optgroup label="Bageshwar">
                                  <option value="Bageshwar">Bageshwar</option>
                                  <option value="Garud">Garud</option>
                                  <option value="Kapkot">Kapkot</option>
                                </optgroup>
                                <optgroup label="Chamoli">
                                  <option value="Dasoli">Dasoli</option>
                                  <option value="Dewal">Dewal</option>
                                  <option value="Gairsain">Gairsain</option>
                                  <option value="Ghat">Ghat</option>
                                  <option value="Joshimath">Joshimath</option>
                                  <option value="Karnprayag">Karnprayag</option>
                                  <option value="Narayanbagar">
                                    Narayanbagar
                                  </option>
                                  <option value="Pokhari">Pokhari</option>
                                  <option value="Tharali">Tharali</option>
                                </optgroup>
                                <optgroup label="Champawat">
                                  <option value="Barakot">Barakot</option>
                                  <option value="Champawat">Champawat</option>
                                  <option value="Lohaghat">Lohaghat</option>
                                  <option value="Paati">Paati</option>
                                </optgroup>
                                <optgroup label="Dehradun">
                                  <option value="Chakrata">Chakrata</option>
                                  <option value="Dehradun City">
                                    Dehradun City
                                  </option>
                                  <option value="Doiwala">Doiwala</option>
                                  <option value="Kalsi">Kalsi</option>
                                  <option value="Raipur">Raipur</option>
                                  <option value="Sahaspur">Sahaspur</option>
                                  <option value="Vikasnagar">Vikasnagar</option>
                                </optgroup>
                                <optgroup label="Haridwar">
                                  <option value="Bahadarabad01">
                                    Bahadarabad01
                                  </option>
                                  <option value="Bahadarabad02">
                                    Bahadarabad02
                                  </option>
                                  <option value="Bhagwanpur">Bhagwanpur</option>
                                  <option value="Haridwar City">
                                    Haridwar City
                                  </option>
                                  <option value="Khanpur">Khanpur</option>
                                  <option value="Laksar">Laksar</option>
                                  <option value="Manglore">Manglore</option>
                                  <option value="Narsan">Narsan</option>
                                  <option value="Roorkeecity">
                                    Roorkeecity
                                  </option>
                                  <option value="Roorkee01">Roorkee01</option>
                                  <option value="Roorkee02">Roorkee02</option>
                                </optgroup>
                                <optgroup label="Nanital">
                                  <option value="Betalghat">Betalghat</option>
                                  <option value="Bheemtal">Bheemtal</option>
                                  <option value="Dhari">Dhari</option>
                                  <option value="Haldwani Rural">
                                    Haldwani Rural
                                  </option>
                                  <option value="Haldwani Urban">
                                    Haldwani Urban
                                  </option>
                                  <option value="Kotabag">Kotabag</option>
                                  <option value="Okhalkanda">Okhalkanda</option>
                                  <option value="Ramgarh">Ramgarh</option>
                                  <option value="Ramnagar">Ramnagar</option>
                                </optgroup>
                                <optgroup label="Pauri Garhwal">
                                  <option value="Beeronkhal">Beeronkhal</option>
                                  <option value="Dugadda">Dugadda</option>
                                  <option value="Dwarikhal">Dwarikhal</option>
                                  <option value="Ekeshwar">Ekeshwar</option>
                                  <option value="Jaiharikhal">
                                    Jaiharikhal
                                  </option>
                                  <option value="Kaljikhal">Kaljikhal</option>
                                  <option value="Khirsu">Khirsu</option>
                                  <option value="Kot">Kot</option>
                                  <option value="Nainidanda">Nainidanda</option>
                                  <option value="Pabau">Pabau</option>
                                  <option value="Pauri">Pauri</option>
                                  <option value="Pokhara">Pokhara</option>
                                  <option value="Rikhnikhal">Rikhnikhal</option>
                                  <option value="Thalisain">Thalisain</option>
                                  <option value="Yamkeshwar">Yamkeshwar</option>
                                </optgroup>
                                <optgroup label="Pithoragarh">
                                  <option value="Berinag">Berinag</option>
                                  <option value="Dharchula">Dharchula</option>
                                  <option value="Didihat">Didihat</option>
                                  <option value="Gangolihat">Gangolihat</option>
                                  <option value="Kanalichhina">
                                    Kanalichhina
                                  </option>
                                  <option value="Munakot">Munakot</option>
                                  <option value="Munsiari">Munsiari</option>
                                  <option value="Pithoragarh">
                                    Pithoragarh
                                  </option>
                                </optgroup>
                                <optgroup label="Rudraprayag">
                                  <option value="Agastymuni">Agastymuni</option>
                                  <option value="Jakholi">Jakholi</option>
                                  <option value="Ukhimath">Ukhimath</option>
                                </optgroup>
                                <optgroup label="Tehri Garhwal">
                                  <option value="Bhilangana">Bhilangana</option>
                                  <option value="Chamba">Chamba</option>
                                  <option value="Hindolakhal">
                                    Hindolakhal
                                  </option>
                                  <option value="Jakhanidhar">
                                    Jakhanidhar
                                  </option>
                                  <option value="Kirtinagar">Kirtinagar</option>
                                  <option value="Narendranagar">
                                    Narendranagar
                                  </option>
                                  <option value="Pratapnagar">
                                    Pratapnagar
                                  </option>
                                  <option value="Thatyur">Thatyur</option>
                                  <option value="Thauldhar">Thauldhar</option>
                                </optgroup>
                                <optgroup label="Usnagar">
                                  <option value="Bazpur">Bazpur</option>
                                  <option value="Gadarpur">Gadarpur</option>
                                  <option value="Jaspur Rural">
                                    Jaspur Rural
                                  </option>
                                  <option value="Jaspur Urban">
                                    Jaspur Urban
                                  </option>
                                  <option value="Kashipur Rural">
                                    Kashipur Rural
                                  </option>
                                  <option value="Kashipur Urban">
                                    Kashipur Urban
                                  </option>
                                  <option value="Khatima">Khatima</option>
                                  <option value="Rudrapur Rural">
                                    Rudrapur Rural
                                  </option>
                                  <option value="Rudrapur Urban">
                                    Rudrapur Urban
                                  </option>
                                  <option value="Sitarganj">Sitarganj</option>
                                </optgroup>
                                <optgroup label="Uttarkashi">
                                  <option value="Bhatwari">Bhatwari</option>
                                  <option value="Chinyalisaur">
                                    Chinyalisaur
                                  </option>
                                  <option value="Dunda">Dunda</option>
                                  <option value="Mori">Mori</option>
                                  <option value="Naugaon">Naugaon</option>
                                  <option value="Purola">Purola</option>
                                </optgroup>
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
                                परिवार में सदस्यों की संख्या{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="परिवार में सदस्यों की संख्या"
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
                                छात्रा का पैन नंबर{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="छात्रा का पैन नंबर"
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                खाता संख्या <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="number"
                                placeholder="खाता संख्या"
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
                                आई0एफ0एस0सी0 कोड{" "}
                                <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="आई0एफ0एस0सी0 कोड"
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
                                बैंक का नाम <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="बैंक का नाम"
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={4} md={4} sm={12}>
                          <Form>
                            <Form.Group
                              className="mb-3 nd-req-text"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>
                                शाखा नाम <span className="alert-txt">*</span>
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="शाखा नाम"
                                className="shadow1 nd-required"
                                required
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
                <div className="nd-btnn text-center">
                  <Link to="/TwelthStepTwo">
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

export default TwelthStepOne;
