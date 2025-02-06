import { RiDashboard3Line } from "react-icons/ri";
import {
  MdOutlinePublishedWithChanges,
  MdOutlineFormatAlignRight,
} from "react-icons/md";
import UKLogon from "../../assets/images/UKLogo.png";
import MenuIcon from "../../assets/images/menu_icon.png";
import { LuLogOut } from "react-icons/lu";
import { MdLibraryBooks } from "react-icons/md";
import "../../assets/css/LeftNav.css";
import { HiOutlineUser } from "react-icons/hi";
import { ImFilePdf } from "react-icons/im";
import React, { useState } from "react";
import { FaRegFileAlt, FaChalkboardTeacher, FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function InnerNavigation() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  // Download handler
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigationOptions = [
    { icon: <RiDashboard3Line />, label: "Dashboard", path: "/UserDashboard" },
    {
      icon: <MdOutlinePublishedWithChanges />,
      label: "Change",
      path: "/Change",
    },
    { icon: <FaRegFileAlt />, label: "Request Query", path: "/SubmitRequest" },
    {
      icon: <MdOutlineFormatAlignRight />,
      label: "Form Status",
      path: "/FormStatus",
    },
    {
      icon: <ImFilePdf />,
      label: "नंदा गौरा योजना विषयक शासनादेश",
      download: true,
      fileUrl: "/praroop1_tutorial.pdf", // Secure file location
      fileName: "praroop1_tutorial.pdf",
    },
    {
      icon: <MdLibraryBooks />,
      label: "Girl Child Form Tutorial",
      download: true,
      fileUrl: "/shashandesh_new.pdf", // Secure file location
      fileName: "shashandesh_new.pdf",
    },
    {
      icon: <FaChalkboardTeacher />,
      label: "12th Form Tutorial",
      download: true,
      fileUrl: "/praroop2_tutorial.pdf", // Secure file location
      fileName: "praroop2_tutorial.pdf",
    },
    {
      icon: <HiOutlineUser />,
      label: "Contact Us",
      path: "/DepartmentContact",
    },
  ];

  return (
    <>
      <header className="user-nd-header">
        <div className="logosec">
          <img
           src={MenuIcon}
            className="icn menuicn"
            id="menuicn"
            alt="menu-icon"
            onClick={toggleNav}
          />

          <Link to="#" className="logo-page">
            <img src={UKLogon} alt="logo" className="logo" />
          </Link>
          <div className="nd-title">
            <span className="nd-subtitle">
              उत्तराखंड सरकार | Gov.t of Uttarakhand{" "}
            </span>
            <span className="subtitle">
              महिला सशक्तिकरण एवं बाल विकास विभाग उत्तराखंड
            </span>
          </div>
        </div>

        <div className="message">
          <div className="nd-msg">
            <span>User:</span> Deepika
          </div>
          <div className="dp" alt="logout" title="Click to logout">
            <div className="nd-log-icon">
              <LuLogOut />
            </div>
          </div>
        </div>
      </header>

      <div>
        <div>
          <div className={`navcontainer ${isNavClosed ? "navclose" : ""}`}>
            <nav className="nav">
              <div className="nav-upper-options">
                <div className="nd-menu">
                  <div>
                    <FaAlignLeft
                      className="icn menuicn"
                      id="menuicn"
                      alt="menu-icon"
                      onClick={toggleNav}
                    />
                  </div>
                  <div className="nd-user">User: Deepika chauhan</div>
                  <div className="nd-log-icon-mob">
                    <LuLogOut
                      className=" "
                      alt="logout"
                      title="Click to logout"
                    />
                  </div>
                </div>

                {navigationOptions.map((option, index) => (
                  <React.Fragment key={index}>
                    {option.download ? (
                      <div
                        className={`nav-option option${index + 1}`}
                        onClick={() =>
                          handleDownload(option.fileUrl, option.fileName)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        to={option.path}
                        className={`nav-option option${index + 1}`}
                      >
                        <div className="nav-item">
                          <div className="d-flex">
                            <span className="nav-icon">{option.icon}</span>
                            <span className="nav-label">{option.label}</span>
                          </div>
                        </div>
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default InnerNavigation;
