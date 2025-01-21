import React from "react";
// import { Link } from "react-router-dom";
import "../../techassets/techcss/TechLeft.css";
import "../../techassets/techcss/TechDashboard.css";
import "../../techassets/techcss/CheckFormstatus.css";
import Searchicon from "../../../assets/images/search-icon.png";
import "@fortawesome/fontawesome-free"; // Font Awesome library
import { Button, Row, Form,Col } from "react-bootstrap";
import TechLeftnav from "../leftnavbar/TechLeftnav";
import NandaTech from "./NandaTech";
import TechFooter from "../footer/TechFooter";
import Accordion from 'react-bootstrap/Accordion';
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
const FinalSubmit = () => {
  return (
    <>
      <div>
        {/* Main Container */}
        <div className="main-container">
          {/* Navigation */}
          <TechLeftnav />

          {/* Main Content */}

          <div className="main">
            <NandaTech />

            <div className="box-container">
            Final SuBmit
             
            </div>
            <div>
              <TechFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinalSubmit;
