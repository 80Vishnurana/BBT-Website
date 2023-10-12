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

const Layout = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/certificate' element={<Certificate />} />
            <Route path="/ourproduct" element={<OurProduct />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/Blog" element={<Blog />} />

            <Route path='/OurServices/designing' element={<Designing />} />
            <Route path="/Website" element={<Website />} />
            <Route path='/OurServices/development' element={<Development />} />
            <Route path='/OurServices/Business' element={<Business />} />
            <Route path='/OurServices/online' element={<OnlineMakrketting />} />
            <Route path='/OurServices/Training' element={<ItTraoning />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default Layout;
