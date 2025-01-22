import React from "react";
import Form from "react-bootstrap/Form";
import "../../../assets/css/LeftNav.css";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import DashHeader from "../DashHeader";
import "../../../assets/css/NandaStepOne.css";
import "../../../assets/css/HomePage.css";
import Footer from "../../footer/Footer";
import InnerNavigation from "../InnerNavigation";
import { Row, Col, Button } from "react-bootstrap";
import UploadFile from "../../../assets/images/upload-icon.png";
import { FaCheckCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import TwelthPass from "./TwelthPass";

const TwelthStepThree = () => {
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
                    <h3>Step 3 : चयन मानक सम्बंधित प्रमाण पत्र </h3>
                  </div>
                </Row>
                <div className="p-2 nd-data-doc">
                    <Form>
                      <Row>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                                {" "}
                                जन्म तिथि प्रमाण पत्र अथवा हाईस्कूल का प्रमाण-पत्र।{" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              कक्षा 12वी उत्तीर्ण अंक पत्र एवं प्रमाण पत्र{" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              छात्रा का आधार कार्ड{" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              छात्रा का पैन कार्ड{" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              स्थाई निवास प्रमाण पत्र{" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              आय प्रमाण पत्र {" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>

                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति {" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12} className="nd-p-12">
                          <Row className="nd-stepform-box">
                            <Col lg={5} md={5} sm={5}>
                              <form>
                                <fieldset class="upload_dropZone text-center ">
                                  <legend class="visually-hidden">
                                    Image uploader
                                  </legend>

                                  <img src={UploadFile} alt="upload-file" />

                                  <p class="nd-drop-txt my-2">
                                    Drag &amp; drop files
                                    <br />
                                    <i>or</i>
                                  </p>

                                  <input
                                    id="upload_image_logo"
                                    data-post-name="image_logo"
                                    data-post-url="https://someplace.com/image/uploads/logos/"
                                    class="position-absolute invisible"
                                    type="file"
                                    multiple
                                    accept="image/jpeg, image/png, image/svg+xml"
                                  />

                                  <label
                                    class="btn nd-primary-btn mb-1"
                                    for="upload_image_logo"
                                  >
                                    Choose file(s)
                                  </label>
                                  <p className="nd-upload-file">
                                    Upload size up to 100KB to 1MB (File Format:
                                    PDF, JPG, PNG)
                                  </p>

                                  <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                                </fieldset>
                              </form>
                            </Col>
                            <Col
                              lg={7}
                              md={7}
                              sm={7}
                              className="nd-doc-subinfo mt-2"
                            >
                              <h3>
                              विद्यालय द्वारा जारी प्रमाण पत्र {" "}
                                <span className="alert-txt">*</span>
                              </h3>
                              <div className="d-flex nd-doc-info">
                                <Col lg={3} md={3} sm={3}>
                                  03.01.2025
                                </Col>
                                <Col
                                  lg={9}
                                  md={9}
                                  sm={9}
                                  className="px-4 nd-success-doc"
                                >
                                  <FaCheckCircle /> Uploaded Successfully{" "}
                                </Col>
                              </div>
                              <div className="col nd-delete-icon">
                                <h3>
                                  <RiDeleteBin6Line />
                                  Click here to Remove
                                </h3>{" "}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                    </div>
                <div className="nd-btnn text-center">
                  <Link to="/NandaStepTwo">
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

export default TwelthStepThree;
