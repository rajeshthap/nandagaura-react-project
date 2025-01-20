import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons-kit";
import "font-awesome/css/font-awesome.min.css";
import { useLocation } from "react-router-dom";
import "../src/custom/style.css";
import UserDashboard from "./components/leftnav/UserDashboard";
import NandaYojana from "./components/leftnav/NandaYojana";
import NavBar from "../src/components/topnav/NavBar";
import Footer from "../src/components/footer/Footer";
import Home from "../src/components/pages/Home";
import HomePage from "../src/components/pages/HomePage";
import UserLogin from "./components/pages/UserLogin";
import OfficialWebsite from "../src/components/pages/OfficialWebsite";
import ModalOne from "./components/modal/ModalOne";
import AdminBanner from "./components/pages/AdminBanner";
import ContactUs from "./components/pages/ContactUs";
import UserOtp from "./components/pages/UserOtp";
import CreatePasswordRegis from "./components/pages/CreatePasswordRegis";
import DashBoard from "./components/leftnav/DashBoard";
import Change from "../src/components/leftnav/NandaGoraForms/RegistrationForms/Change";
import NandaStepOne from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepOne";
import NandaStepTwo from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepTwo";
import NandaStepThree from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStepThree";
import NandaStep4th from "../src/components/leftnav/NandaGoraForms/RegistrationForms/NandaStep4th";
import DepartmentContact from "../src/components/leftnav/NandaGoraForms/RegistrationForms/DepartmentContact";
import SubmitRequest from "../src/components/leftnav/NandaGoraForms/RegistrationForms/SubmitRequest";
import FormStatuspending from "./components/leftnav/FormStatuspending";
import SteponeView from "./components/modal/SteponeView";
import SteptwoView from "./components/modal/SteptwoView";
import StepthreeView from "./components/modal/StepthreeView"
// import FormStatus from "../src/components/leftnav/NandaGoraForms/RegistrationForms/FormStatus";
// import Girl12thtutorial from "./components/leftnav/Girl12thtutorial";
import LoginFooter from "./components/footer/LoginFooter";
import InnerNavigation from "./components/leftnav/InnerNavigation";
import GirlsBornStep from "./components/leftnav/NandaGoraForms/RegistrationForms/GirlsBornStep";
import FormStatus from "./components/leftnav/NandaGoraForms/RegistrationForms/FormStatus";
// import Deepika from "./Deepika";
//-----------Technical dashboard-----------//
import TechLeftnav from "./AdminPannel/technicalcomponents/leftnavbar/TechLeftnav";
import TechnicaldashBoard from "./AdminPannel/technicalcomponents/dashboard/TechnicaldashBoard";
import CheckFormstatus from "./AdminPannel/technicalcomponents/dashboard/CheckFormstatus";
import NandaTech from "./AdminPannel/technicalcomponents/dashboard/NandaTech";

function App() {
  const location = useLocation();

  const hiddenPaths = new Set(["/UserDashboard", "/DashBoard", "/Change","/NandaStepOne","/NandaStepTwo","/NandaStepThree","/NandaStep4th","/Change","/DepartmentContact","/FormStatus","/SubmitRequest","/TechLeftnav","/TechnicaldashBoard","/CheckFormstatus"]); // Correct absolute paths
  const hiddenFooter1 = new Set(["/UserDashboard", "/DashBoard", "/Change","/NandaStepOne","/NandaStepTwo","/NandaStepThree","/NandaStep4th","/Change","/DepartmentContact","/FormStatus","/SubmitRequest","/TechLeftnav","/TechnicaldashBoard","/CheckFormstatus"]); // Correct absolute paths
  const shouldHideNavbar = hiddenPaths.has(location.pathname);
  const shouldHideFooter1 =  hiddenFooter1.has(location.pathname);

  const buttons = [
    "UserDashboard",
  ]
  return (
    <div>
      {/* Conditionally render NavBar */}
      {!shouldHideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/OfficialWebsite" element={<OfficialWebsite />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/UserOtp" element={<UserOtp />} />
        <Route path="/CreatePasswordRegis" element={<CreatePasswordRegis />} />
        <Route path="/AdminBanner" element={<AdminBanner />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/NandaStepOne" element={<NandaStepOne />} />
        <Route path="/NandaStepTwo" element={<NandaStepTwo />} />
        <Route path="/NandaYojana" element={<NandaYojana/>} />
        {/* <Route path="/Deepika" element={<Deepika/>} /> */}
        
        <Route path="/NandaStepTwo" element={<NandaStepTwo />} />
        <Route path="/NandaStepThree" element={<NandaStepThree />} />
        <Route path="/NandaStep4th" element={<NandaStep4th />} />
        <Route path="/FormStatuspending" element={<FormStatuspending />} />
        <Route path="/DepartmentContact" element={<DepartmentContact />} />
        <Route path="/SteponeView" element={<SteponeView />} />
        <Route path="/SteptwoView" element={<SteptwoView />} />
        <Route path="/StepthreeView" element={<StepthreeView />} />
        <Route path="/SubmitRequest" element={<SubmitRequest />} />
        <Route path="/FormStatus" element={<FormStatus />} />
    
        <Route path="/DashBoard" element={<DashBoard />} /> {/* Correct path */}
        <Route path="/UserDashboard" element={<UserDashboard />} /> {/* Correct path */}
        <Route path="/Change" element={<Change />} /> {/* Correct path */}
        <Route path="/InnerNavigation" element={<InnerNavigation/>} /> {/* Correct path */}
        <Route path="/GirlsBornStep" element={<GirlsBornStep/>} /> {/* Correct path */}
        <Route path="/ModalOne" element={<ModalOne />} />
      {/* Technical dashboard*/}
      <Route path="/TechLeftnav" element={<TechLeftnav />} />
      <Route path="/TechnicaldashBoard" element={<TechnicaldashBoard />} />
      <Route path="/CheckFormstatus" element={<CheckFormstatus/>} />
      <Route path="/NandaTech" element={<NandaTech />} />
       
      </Routes>

     
      {!shouldHideFooter1 && <LoginFooter />}
    </div>
  );
}

export default App;
