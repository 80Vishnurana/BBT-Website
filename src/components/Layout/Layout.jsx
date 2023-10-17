import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurProduct from "../OurProduct/OurProduct";
import About from "../About/About";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import Career from "../Career/Career";
import Contact from "../Contact/Contact";
// import OurServices from "../Services/OurServices";
import Designing from "../Designing/Designing";
import Development from "../Development/Development";
import Business from "../Business/Business";
import OnlineMakrketting from "../OnlineMarketting/OnlineMakrketting";
import ItTraoning from "../It-Training/ItTraoning";
import Certificate from "../Certificate/Certificate";
import Website from "../WebsiteDesigning/Website";
import Hosting from "../GraphicD/Graphic";
import LogoBanner from "../LogoBannerDesidninge/LogoBanner";
import UiuxDesign from "../UiuxDesign/UiuxDesign";
import WebApplication from "../DevelopmentServices/WebApplication";
import ERPDevelopmen from "../DevelopmentServices/ERPDevelopmen";
import Customization from "../DevelopmentServices/Customization";
import MobileApplication from "../DevelopmentServices/MobileApplication";
import ApiDevelopment from "../DevelopmentServices/ApiDevelopment";
import ECommerceDevelopment from "../DevelopmentServices/ECommerceDevelopment";
import WebsiteCustomization from "../DevelopmentServices/WebsiteCustomization";
import ThirdPartyIntegration from "../DevelopmentServices/ThirdPartyIntegration";
import ItConsulting from "../BusinessPlanning.jsx/ItConsulting";
import BusinessConsulting from "../BusinessPlanning.jsx/BusinessConsulting";
import Reaporting from "../BusinessPlanning.jsx/Reaporting";
import BulkEmail from "../BusinessPlanning.jsx/BulkEmail";
import KioskTouch from "../BusinessPlanning.jsx/KioskTouch";
import DigitalMarketing from "../OnlineProd.jsx/DigitalMarketing";
import Sco from "../OnlineProd.jsx/Sco";
import EmailMarketing from "../OnlineProd.jsx/EmailMarketing";
import SocialMedia from "../OnlineProd.jsx/SocialMedia";
import ContactMarketing from "../OnlineProd.jsx/ContactMarketing";
import NetTraning from "../It-Traning/netTraning";
import SeoTraining from "../It-Traning/SeoTraining";
import PhpTraning from "../It-Traning/PhpTraning";
import SqlTraning from "../It-Traning/SqlTraning";
import FrameworkTechnology from "../FrameworkTechnology/FrameworkTechnology";
import Hospital from "../Product/Hospital";
import ContentManagement from "../DevelopmentServices/ContentManagement";
import Digital from "../BusinessPlanning.jsx/Digital";
import Resturant from "../Product/Resturant";
import SchoolERP from "../Product/SchoolERP";
import StoreManagementSystem from "../Product/StoreManagementSystem";
import POSManagementSystem from "../Product/POSManagementSystem";
import HRPayrollERP from "../Product/HRPayrollERP";
import VisitorManagementSystem from "../Product/VisitorManagementSystem";
import ECommercePortal from "../Product/ECommercePortal";
import KIOSKTouchScreen from "../Product/KIOSKTouchScreen";


const Layout = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/certificate' element={<Certificate />} />

            {/* <Route path="/ourproduct" element={<OurProduct />} /> */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/hospitalManagement" element={<Hospital />} />
            <Route path="/Resturant-ERP" element={<Resturant />} />
            <Route path="/School-ERP" element={<SchoolERP />} />
            <Route path="/Storemanagement" element={<StoreManagementSystem />} />
            <Route path="/PQS-Management" element={<POSManagementSystem />} />
            <Route path="/HR-Prayroll-ERP" element={<HRPayrollERP />} />
            <Route path="/Visitor-Management" element={<VisitorManagementSystem />} />
            <Route path="/E-Commerce" element={<ECommercePortal />} />
            <Route path="/KIOSH-touch" element={<KIOSKTouchScreen />} />


            <Route path="/career" element={<Career />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path='/OurServices/designing' element={<Designing />} />
            <Route path="/Website" element={<Website />} />
            <Route path="/logo" element={<LogoBanner />} />
            <Route path="/uiux" element={<UiuxDesign />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path='/OurServices/development' element={<Development />} />
            <Route path="/webapplication" element={<WebApplication />} />
            <Route path="/customization" element={<Customization />} />
            <Route path="/APIdevelopment" element={<ApiDevelopment />} />
            <Route path='/erpDeveloper' element={<ERPDevelopmen />} />
            <Route path='/ECommerceDevelopment' element={<ECommerceDevelopment />} />
            <Route path='/Customization' element={<Customization />} />
            <Route path='/ContentManagement' element={<ContentManagement />} />
            <Route path="/WebsiteCustomization" element={<WebsiteCustomization />} />
            <Route path="/ThirdParty" element={<ThirdPartyIntegration />} />
            <Route path='/OurServices/Business' element={<Business />} />
            <Route path='/ItConsulting' element={<ItConsulting />} />
            <Route path='/BusinessConsulting' element={<BusinessConsulting />} />
            <Route path='/Reaporting' element={<Reaporting />} />
            <Route path='/Digital' element={<Digital />} />
            <Route path='/bulkemail' element={<BulkEmail />} />
            <Route path='/kiosh-touch' element={<KioskTouch />} />
            <Route path='/OurServices/online' element={<OnlineMakrketting />} />
            <Route path='/digitalmarketing' element={<DigitalMarketing />} />
            <Route path='/seo' element={<Sco />} />
            <Route path='/Email' element={<EmailMarketing />} />
            <Route path='/socialmedia' element={<SocialMedia />} />
            <Route path='/contactmarketing' element={<ContactMarketing />} />
            <Route path='/OurServices/Training' element={<ItTraoning />} />
            <Route path="/mobileApplication" element={<MobileApplication />} />
            <Route path="/NetTraning" element={<NetTraning />} />
            <Route path="/seoTraining" element={<SeoTraining />} />
            <Route path="/phptraning" element={<PhpTraning />} />
            <Route path="/sqltraning" element={<SqlTraning />} />
            <Route path="/OurServices/Framework" element={<FrameworkTechnology />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter >
      <Footer />
    </>
  );
};

export default Layout;
