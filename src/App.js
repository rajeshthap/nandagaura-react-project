import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-icons-kit";
import "font-awesome/css/font-awesome.min.css";
import { useLocation } from "react-router-dom";
import "../src/custom/style.css";
import UserDashboard from "./components/leftnav/UserDashboard";
import NandaYojana from "./components/leftnav/NandaYojana";
import NavBar from "../src/components/topnav/NavBar";
import Home from "../src/components/pages/Home";
import HomePage from "../src/components/pages/HomePage";
import UserLogin from "./components/pages/UserLogin";
import OfficialWebsite from "../src/components/pages/OfficialWebsite";
import ModalOne from "./components/modal/ModalOne";
import TwelthdetailPopup from "./components/leftnav/twelfthpass/TwelthdetailPopup";
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
import StepthreeView from "./components/modal/StepthreeView";
import TwelthStepOne from "./components/leftnav/twelfthpass/TwelthStepOne";
import TwelthStepTwo from "./components/leftnav/twelfthpass/TwelthStepTwo";
import TwelthStepThree from "./components/leftnav/twelfthpass/TwelthStepThree";
import TwelthPass from "./components/leftnav/twelfthpass/TwelthPass";
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
import OurCDPO from "./AdminPannel/technicalcomponents/dashboard/ourstaff/OurCDPO";
import OurSuper from "./AdminPannel/technicalcomponents/dashboard/ourstaff/OurSuper";
import ActivityLog from "./AdminPannel/technicalcomponents/dashboard/Logs/ActivityLog";
import RequestPending from "./AdminPannel/technicalcomponents/dashboard/Logs/RequestPending";
import RequestDone from "./AdminPannel/technicalcomponents/dashboard/Logs/RequestDone";
import RequestAll from "./AdminPannel/technicalcomponents/dashboard/Logs/RequestAll";
import ReparingstepTwo from "./AdminPannel/technicalcomponents/dashboard/ReparingstepTwo";
import FinalSubmit from "./AdminPannel/technicalcomponents/dashboard/FinalSubmit";
import NandaRegistration from "./AdminPannel/technicalcomponents/dashboard/NandaRegistration";
import Final from "./AdminPannel/technicalcomponents/dashboard/FinalsubmitList/Final";
import FinalBorn from "./AdminPannel/technicalcomponents/dashboard/FinalsubmitList/FinalBorn";
//-----------Directorate dashboard-----------//

import DirectorateDashboard from "./AdminPannel/Directorate_login/dashboard/DirectorateDashboard";
import DirecCDPO from "./AdminPannel/Directorate_login/dashboard/direct_ourstaff/DirecCDPO";
import DirecSupervisore from "./AdminPannel/Directorate_login/dashboard/direct_ourstaff/DirecSupervisore";
import TwelthAppli from "./AdminPannel/Directorate_login/dashboard/TwelthAppli";
import DirecNewBorn from "./AdminPannel/Directorate_login/dashboard/DirecNewBorn";
import ProjectWiseAppli from "./AdminPannel/Directorate_login/dashboard/ProjectWiseAppli";
import DistrictWiseAppli from "./AdminPannel/Directorate_login/dashboard/DistrictWiseAppli";
import PraroopFinal2022 from "./AdminPannel/Directorate_login/dashboard/praroopfinal/PraroopFinal2022";
import PraroopFinal2023 from "./AdminPannel/Directorate_login/dashboard/praroopfinal/PraroopFinal2023";
import PraroopFinal2024 from "./AdminPannel/Directorate_login/dashboard/praroopfinal/PraroopFinal2024";
//-----------Directorate Data Table Start-----------//
import DirecTwelthDataTable from "./AdminPannel/Directorate_login/dashboard/direct_data_table/DirecTwelthDataTable";
//-----------Directorate Data Table End-----------//

//-----------Project dashboard-----------//
import ProjectNandaGaura from "./AdminPannel/Project_login/dashboard/ProjectNandaGaura";
import ProjectDashboard from "./AdminPannel/Project_login/dashboard/ProjectDashboard";
import ChangePassword from "./AdminPannel/Project_login/dashboard/ChangePassword";
import ResetSectorpassword from "./AdminPannel/Project_login/dashboard/sector_information/ResetSectorpassword";
import AWCinformation from "./AdminPannel/Project_login/dashboard/sector_information/AWCinformation";
import SectorWiseView from "./AdminPannel/Project_login/dashboard/Praroop2024/SectorWiseView";
import ExcelFormetPFMS from "./AdminPannel/Project_login/dashboard/Praroop2024/ExcelFormetPFMS";
import PraroopAllApp from "./AdminPannel/Project_login/dashboard/Praroop2024/PraroopAllApp";
import ReturnedFeedback from "./AdminPannel/Project_login/dashboard/Praroop2024/ReturnedFeedback";
import GirlChildSectorView from "./AdminPannel/Project_login/dashboard/girlchildapplications/GirlChildSectorView";
import GirlChildAllApp from "./AdminPannel/Project_login/dashboard/girlchildapplications/GirlChildAllApp";
import GirlExcelFormetView from "./AdminPannel/Project_login/dashboard/girlchildapplications/GirlExcelFormetView";
import OfflineApplication from "./AdminPannel/Project_login/dashboard/girlchildapplications/OfflineApplication";
import ChildReturnedFeedback from "./AdminPannel/Project_login/dashboard/girlchildapplications/ChildReturnedFeedback";
import IncomeCertificateview from "./AdminPannel/Project_login/dashboard/IncomeCertificateview";
import TwelthSectorWiseView from "./AdminPannel/Project_login/dashboard/twelthapplication/TwelthSectorWiseView";
import TwelthAllAppl from "./AdminPannel/Project_login/dashboard/twelthapplication/TwelthAllAppl";
import TwelthExcelPFMS from "./AdminPannel/Project_login/dashboard/twelthapplication/TwelthExcelPFMS";
import TwelthReturnFeedBack from "./AdminPannel/Project_login/dashboard/twelthapplication/TwelthReturnFeedBack";

function App() {
  const location = useLocation();
  const hiddenPaths = new Set([
    "/UserDashboard",
    "/DashBoard",
    "/Change",
    "/NandaStepOne",
    "/NandaStepTwo",
    "/NandaStepThree",
    "/NandaStep4th",
    "/Change",
    "/DepartmentContact",
    "/FormStatus",
    "/SubmitRequest",
    "/TwelthStepOne",
    "/TwelthdetailPopup",
    "/TwelthStepTwo",
    "/TwelthStepThree",
    "/TechLeftnav",
    "/TechnicaldashBoard",
    "/CheckFormstatus",
    "/OurCDPO",
    "/OurSuper",
    "/RequestAll",
    "/RequestPending",
    "/RequestDone",
    "/ActivityLog",
    "/NandaRegistration",
    "/ReparingstepTwo",
    "/FinalSubmit",
    "/Final",
    "/FinalBorn", // Directorate
    "/DirectorateDashboard",
    "/DirecCDPO",
    "/DirecSupervisore",
    "/TwelthAppli",
    "/DirecNewBorn",
    "/ProjectWiseAppli",
    "/DistrictWiseAppli",
    "/PraroopFinal2022",
    "/PraroopFinal2023",
    "/PraroopFinal2024",
    "/ProjectDashboard",
    "/ChangePassword",
    "/ResetSectorpassword",
    "/AWCinformation",
    "/ReturnedFeedback", 
    "/PraroopAllApp", 
    "/ExcelFormetPFMS", 
    "/SectorWiseView", 
    "/ChildReturnedFeedback", 
    "/GirlChildAllApp", 
    "/GirlChildSectorView", 
    "/GirlExcelFormetView", 
    "/OfflineApplication",
    "/IncomeCertificateview",
    "/IncomeCertificateview",
    "/TwelthSectorWiseView", 
    "/TwelthExcelPFMS", 
    "/TwelthSectorWiseView",
    "/TwelthAllAppl"
  ]); // Correct absolute paths
  const hiddenFooter1 = new Set([
    "/UserDashboard",
    "/DashBoard",
    "/Change",
    "/NandaStepOne",
    "/NandaStepTwo",
    "/NandaStepThree",
    "/NandaStep4th",
    "/Change",
    "/DepartmentContact",
    "/FormStatus",
    "/SubmitRequest",
    "/TwelthStepOne",
    "/TwelthStepTwo",
    "/TwelthdetailPopup",
    "/TwelthStepThree",
    "/TechLeftnav",
    "/TechnicaldashBoard",
    "/CheckFormstatus",
    "/OurCDPO",
    "/OurSuper",
    "/RequestAll",
    "/RequestPending",
    "/RequestDone",
    "/ActivityLog",
    "/NandaRegistration",
    "/ReparingstepTwo",
    "/FinalSubmit",
    "/Final",
    "/FinalBorn",// Directorate
    "/DirectorateDashboard",
    "/DirecCDPO",
    "/DirecSupervisore",
    "/TwelthAppli",
     "/DirecNewBorn",
     "/ProjectWiseAppli",
     "/DistrictWiseAppli",
     "/PraroopFinal2022",
     "/PraroopFinal2023",
     "/PraroopFinal2024",
     "/ProjectDashboard",// Project
     "/ChangePassword",
     "/ResetSectorpassword",
     "/AWCinformation", 
     "/ReturnedFeedback", 
     "/PraroopAllApp", 
     "/ExcelFormetPFMS", 
     "/SectorWiseView",
     "/ChildReturnedFeedback", 
     "/GirlChildAllApp", 
     "/GirlChildSectorView", 
     "/GirlExcelFormetView", 
     "/OfflineApplication",
     "/IncomeCertificateview",
     "/TwelthSectorWiseView", 
     "/TwelthExcelPFMS", 
     "/TwelthSectorWiseView",
     "/TwelthAllAppl"
  ]); // Correct absolute paths
  const shouldHideNavbar = hiddenPaths.has(location.pathname);
  const shouldHideFooter1 = hiddenFooter1.has(location.pathname);
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
        <Route path="/NandaYojana" element={<NandaYojana />} />
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
        <Route path="/TwelthStepOne" element={<TwelthStepOne />} />
        <Route path="/TwelthStepTwo" element={<TwelthStepTwo />} />
        <Route path="/TwelthStepThree" element={<TwelthStepThree />} />
        <Route path="/TwelthdetailPopup" element={<TwelthdetailPopup />} />
        <Route path="/TwelthPass" element={<TwelthPass />} />
        <Route path="/DashBoard" element={<DashBoard />} /> {/* Correct path */}
        <Route path="/UserDashboard" element={<UserDashboard />} />{" "}
        {/* Correct path */}
        <Route path="/Change" element={<Change />} /> {/* Correct path */}
        <Route path="/InnerNavigation" element={<InnerNavigation />} />{" "}
        {/* Correct path */}
        <Route path="/GirlsBornStep" element={<GirlsBornStep />} />{" "}
        {/* Correct path */}
        <Route path="/ModalOne" element={<ModalOne />} />
        {/* Technical dashboard*/}
        <Route path="/TechLeftnav" element={<TechLeftnav />} />
        <Route path="/TechnicaldashBoard" element={<TechnicaldashBoard />} />
        <Route path="/CheckFormstatus" element={<CheckFormstatus />} />
        <Route path="/NandaTech" element={<NandaTech />} />
        <Route path="/OurCDPO" element={<OurCDPO />} />
        <Route path="/OurSuper" element={<OurSuper />} />
        <Route path="/RequestPending" element={<RequestPending />} />
        <Route path="/RequestDone" element={<RequestDone />} />
        <Route path="/ActivityLog" element={<ActivityLog />} />
        <Route path="/RequestAll" element={<RequestAll />} />
        <Route path="/ReparingstepTwo" element={<ReparingstepTwo />} />
        <Route path="/FinalSubmit" element={<FinalSubmit />} />
        <Route path="/NandaRegistration" element={<NandaRegistration />} />
        <Route path="/FinalBorn" element={<FinalBorn />} />
        <Route path="/Final" element={<Final />} />

        {/* Directorate Data Table Start */}
        <Route path="/DirecTwelthDataTable" element={<DirecTwelthDataTable />} />

 {/* Directorate Data Table End */}

           {/* Directorate dashboard*/}

         <Route path="/DirectorateDashboard" element={<DirectorateDashboard />} />
         <Route path="/DirecCDPO" element={<DirecCDPO />} />
         <Route path="/DirecSupervisore" element={<DirecSupervisore />} />
         <Route path="/TwelthAppli" element={<TwelthAppli />} />
         <Route path="/DirecNewBorn" element={<DirecNewBorn />} />
         <Route path="/ProjectWiseAppli" element={<ProjectWiseAppli />} />
         <Route path="/DistrictWiseAppli" element={<DistrictWiseAppli />} />
         <Route path="/PraroopFinal2022" element={<PraroopFinal2022 />} />
         <Route path="/PraroopFinal2023" element={<PraroopFinal2023 />} />
       

          {/* Project dashboard*/}

 <Route path="/PraroopFinal2024" element={<PraroopFinal2024 />} />
 <Route path="/ChangePassword" element={<ChangePassword />} />
 <Route path="/ResetSectorpassword" element={<ResetSectorpassword />} />
 <Route path="/AWCinformation" element={<AWCinformation />} />
 <Route path="/ExcelFormetPFMS" element={<ExcelFormetPFMS />} />
 <Route path="/SectorWiseView" element={<SectorWiseView />} />
 <Route path="/PraroopAllApp" element={<PraroopAllApp />} />
 <Route path="/ReturnedFeedback" element={<ReturnedFeedback />} />
 <Route path="/ChildReturnedFeedback" element={<ChildReturnedFeedback />} />
 <Route path="/GirlChildAllApp" element={<GirlChildAllApp />} />
 <Route path="/GirlChildSectorView" element={<GirlChildSectorView />} />
 <Route path="/GirlExcelFormetView" element={<GirlExcelFormetView />} />
 <Route path="/OfflineApplication" element={<OfflineApplication />} />
 <Route path="/IncomeCertificateview" element={<IncomeCertificateview />} />
 <Route path="/TwelthAllAppl" element={<TwelthAllAppl />} />
 <Route path="/TwelthExcelPFMS" element={<TwelthExcelPFMS />} />
 <Route path="/TwelthReturnFeedBack" element={<TwelthReturnFeedBack />} />
 <Route path="/TwelthSectorWiseView" element={<TwelthSectorWiseView />} />
 <Route path="/ProjectDashboard" element={<ProjectDashboard />} />
 <Route path="/ProjectNandaGaura" element={<ProjectNandaGaura />} />

      </Routes>

      {!shouldHideFooter1 && <LoginFooter />}
    </div>
  );
}

export default App;
