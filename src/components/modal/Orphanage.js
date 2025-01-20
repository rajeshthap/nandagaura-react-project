import React from "react";
import { useState } from "react";
import "../../assets/css/ModalOne.css";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../assets/css/ModalOne.css";
function Orphanage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="nd-primary-btn" onClick={handleShow}> Know more</Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="nd-modal-title">
       
नारी निकेतन, अनाथ आश्रम में पलने वाली बालिका के इंटर उत्तीर्ण करने पर
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="nd-modal-body">
        <ol>
        <li>छात्रा की नवीनतम पासपोर्ट साइज फोटो ।</li>
              <li>छात्रा के हस्ताक्षर</li>
              <li>हाईस्कूल का प्रमाण-पत्र।</li>
              <li>कक्षा 12वीं उत्तीर्ण का अंक पत्र एवं प्रमाण पत्र
               
                <center><strong>OR</strong></center>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
              </li>

              <li>छात्रा का आधार कार्ड</li>
              <li>छात्रा का पैन कार्ड</li>
              <li>अविवाहित होने का प्रमाण पत्र (स्वयं द्वारा प्रदत्त )</li>
              <li>लाभार्थी बालिका के बैंक पासबुक की छाया प्रति</li>
              <li>प्रधानाचार्य द्वारा कक्षा 12 उत्तीर्ण का निर्गत प्रमाण पत्र <span className="nd-span-text">केवल संस्थागत छात्रा के लिए </span>
              <a
                href="/principle_12_certificate3.pdf"
                target="_blank"
                download
              >
              <Button variant="secondary" className="nd-primary-dawnload">
              <PiDownloadSimpleBold className="nd-download-icon" /> (प्रारूप यहाँ से डाउनलोड करें।)
                </Button>
              </a>
                <center><strong>OR</strong></center>
                राष्ट्रीय मुक्त विद्यालय / अन्य शिक्षण संस्थान से कक्षा 12 उत्तीर्ण करने वाली आवेदिका द्वारा स्वप्रमाणित अंक पत्र की छायाप्रति
              </li>
              <li>उच्च शिक्षा में दाखिले के पूर्ण अभिलेखों की प्रति </li>
              <li>संस्था की अधीक्षिका द्वारा जारी प्रमाण-पत्र  <a
                href="/sanstha_certificate (1).pdf"
                target="_blank"
                download
              >
              <Button variant="secondary" className="nd-primary-dawnload">
              <PiDownloadSimpleBold className="nd-download-icon" /> (प्रारूप यहाँ से डाउनलोड करें।)
                </Button>
              </a> </li>
                
         </ol>
        </Modal.Body>
        <Modal.Footer className="nd-footer">
          <Button variant="" className="nd-close-btn" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Orphanage;
