import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "../../../../assets/css/LeftNav.css";
import Table from "react-bootstrap/Table";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { RiDeleteBin6Line } from "react-icons/ri";
import DashHeader from "../../DashHeader";
import "../../../../assets/css/NandaStepOne.css";
import "../../../../assets/css/HomePage.css";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../../../footer/Footer";
import UploadFile from "../../../../assets/images/upload-icon.png";

import InnerNavigation from "../../InnerNavigation";

import { Row, Col, Button, Card } from "react-bootstrap";
import GirlsBornStep from "./GirlsBornStep";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";
import { LuHeading1 } from "react-icons/lu";
import StepthreeView from "../../../modal/StepthreeView";
import SteptwoView from "../../../modal/SteptwoView";
import SteponeView from "../../../modal/SteponeView";
const NandaStep4th = () => {


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
                <div className="nd-step2">
             
                <StepthreeView />
              
                </div>
                
                <div className="nd-step1">
                  <h3>Step 4 : चल / अचल सम्पत्ति का विवरण</h3>
                </div>
                <span className="nd-step3-note">
                  आवेदन पत्र के साथ संलग्न किये जाने वाले प्रमाणित अभिलेखों की
                  प्रतिलिपि का विवरण इस प्रकार है।{" "}
                </span>
                <span className="nd-step-note">
                  if document are not showing after uploading, please remove and
                  reupload till yours documents are not uploaded properly!{" "}
                </span>
              </Row>
              <div className="p-2 nd-data-doc">
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
                              Upload size up to 10KB to 100KB (File Format: jpg,
                              png)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          कन्या शिशु की नवीनतम पासपोर्ट साइज फोटो{" "}
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
                              Upload size up to 10KB to 100KB (File Format: jpg,
                              png)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          माता / पिता / अभिभावक के हस्ताक्षर जमा करें{" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          परिवार रजिस्टर की नकल या सभासार/पार्षद द्वारा दिया गया
                          प्रमाण पत्र <span className="alert-txt">*</span>
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          राशन कार्ड की प्रति{" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          जन्म पंजीकरण का प्रमाण पत्र{" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          आय प्रमाण पत्र<span className="alert-txt">*</span>
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          माता और पिता / अभिभावक का आधार कार्ड
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          नगरीय / ग्रामीण स्थानीय निकाय द्वारा दिया गया गृह कर
                          या किराया समझौते के कागजात
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          माता और पिता / अभिभावक का पैन कार्ड
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          आंगनबाड़ी कार्यकर्ती द्वारा प्रदत्त प्रमाण-पत्र।{" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          मातृशिशु प्रतिरक्षण / एम०सी० पी० (टीकाकरण) कार्ड{" "}
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
                              Upload size up to 100KB to 5MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          परिवार के समस्त सदस्यों के बैंक पासबुक की प्रति एवं
                          विगत 01 वर्ष के बैंक स्टेटमैन्ट की प्रति{" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          सामाजिक आर्थिक और जाति जनगणना में परिवार की स्थिति के
                          आंकलन की प्रति (यदि उपलबध है){" "}
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          शासनादेशानुसार योजना का लाभ केवल 02 बालिकाओं हेतु ही
                          अनुमन्य है इसलिए आवेदित बालिका के परिवार की अन्य
                          बालिकाओं को पूर्व में कन्या के जन्म पर योजना का लाभ
                          दिये जाने / न दिये जाने विषयक शपथ –पत्र में निम्न
                          बिंदु शामिल होंगे <span className="alert-txt">*</span>
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
                      </Col>
                      <Row className="nd-list-info">
                        <Col lg={12} md={12} sm={12}></Col>
                        <ol>
                          <li>
                            मैं प्रमाणित करता/ करती हूँ की यह लाभ मेरी
                            प्रथम/द्वितीय पुत्री द्वारा लिया जा रहा है
                          </li>
                          <li>
                            मेरे द्वारा चल अचल सम्पति एवं अन्य चाही गयी,समस्त
                            सूचनाएं सही –सही दी गयी है
                          </li>
                          <li>
                            मेरे द्वारा किसी भी तथ्य को छुपाया नहीं गया है
                          </li>
                          <li>
                            मेरे द्वारा परिवार के समस्त खातो का विवरण,एक वर्ष के
                            बैंक स्टेटमेंट सहित दे दिया गया है
                          </li>
                        </ol>
                      </Row>
                      <div className="col nd-delete-icon">
                        <h3>
                          <RiDeleteBin6Line />
                          Click here to Remove
                        </h3>{" "}
                      </div>
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
                              Upload size up to 100KB to 1MB (File Format: PDF,
                              JPG, PNG)
                            </p>

                            <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>
                          </fieldset>
                        </form>
                      </Col>
                      <Col lg={7} md={7} sm={7} className="nd-doc-subinfo mt-2">
                        <h3>
                          {" "}
                          अन्य आवश्यक अभिलेख<span className="alert-txt">*</span>
                        </h3>
                        <ol>
                          <li>बिजली के बिलों की प्रतिलिपि</li>
                          <li>पानी के बिल की प्रतिलिपि</li>
                          <li>कोई अन्य दस्तावेज़ की प्रतिलिपि</li>
                        </ol>
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
              </div>

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

export default NandaStep4th;
