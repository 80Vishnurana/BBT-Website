import React, { useState } from "react";
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Drawer, IconButton, } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link, Outlet } from "react-router-dom";





const Header = () => {
  const [MobileOpen, setMobileOpen] = useState(false);


  const boxStyle = {
    width: '300px',
    height: '200px',
    overflow: 'auto',
    border: '1px solid #ccc',
    padding: '16px',

  };

  const handleDrawerToogle = () => {
    setMobileOpen(!MobileOpen)
  }
  const drawer = (
    <Box onClick={handleDrawerToogle} style={boxStyle} sx={{ textAlign: "center" }} className="navicon" >
      <ul className="Mobilenavigation-ul" >

        <li>Home</li>
        <li>About</li>
        <li>Our Product</li>
        <li>Our Services</li>
        <li>Blog</li>
        <li><a href="mailto:zainkeepscode@gmail.com">Contact</a></li>
      </ul>

    </Box>
  )
  return (
    <>


      <section className="sect" >
        <div className="containerss">
          <div className="containers">
            <div className="header-cont" >
              <ul className="header" style={{ display: "flex" }} >
                <li><a href="tel:+91 9999600773"><i className="fa fa-phone"></i> (+91) 9999600773</a></li>
                <span className="scle">|</span>
                <li><a href="tel:+91 9999600883"><i className="fa fa-phone"></i> (+91) 9999600883</a></li>
                <span className="scle">|</span>

                <li><a href="mailto:info@bluebraintech.com"> <i className="fa fa-envelope"></i> Email: info@bluebraintech.com</a></li>
              </ul>
            </div>
            <div className="header-socalicon">
              <ul className="header-iconul">
                <li ><a href="https://www.facebook.com/BB-Technologies-Private-Limited-102375521887549" ><span><FacebookIcon style={{ color: "white" }} /></span><span className="space">|</span></a></li>
                <li><a href="https://twitter.com/BlueBrainTech"><span><TwitterIcon style={{ color: "white", }} /></span><span className="space">|</span></a></li>
                <li><a href="https://www.linkedin.com/company/65831667" > <span><LinkedInIcon style={{ color: "white" }} /></span><span className="space">|</span></a></li>
                <li><a href="https://g.page/BlueBrainTech?share"><span><GoogleIcon /></span><span className="space">|</span></a></li>
                <li><a href="https://www.instagram.com/blue_braintechnologies/?igshid=YmMyMTA2M2Y=" ><span><InstagramIcon style={{ Color: "white" }} /></span></a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Box >

        <div className="navigation">
          {/* logo */}
          <div className="logo">

            <img src="../logo.png" alt="logo" width={90} style={{ height: "5rem" }} />

          </div >
          <Box sx={{ display: { display: "flex", textAlign: "center" }, height: { xs: "7rem", lg: "6rem" } }}
          >

            <ul className="navigation-ul menu" >

              <li>
                <Link to="/" ><a href="/">Home</a></Link>
              </li>
              <li><a>About</a>
                <ul class="submenu">
                  <li><Link to="/about"><a href="#">About Us</a></Link></li>
                  <li><Link to="/certificate"><a href="#">Certificates</a></Link></li>
                </ul>
              </li>
              <li><Link to="/ourproduct"><a href="">Our Product</a></Link></li>
              <li><a  >Our Services</a>
                <ul class="submenu">
                  <li><Link to="/OurServices/designing"><a href="#">Designing</a></Link></li>
                  <li><Link to="/OurServices/development"><a href="#">Development</a></Link></li>
                  <li><Link to="/OurServices/Business"><a href="#">Business & Planning</a></Link></li>
                  <li><Link to="/OurServices/online"><a href="#">Online Marketting</a></Link></li>
                  <li><Link to="OurServices/Training"><a href="#">IT Training</a></Link></li>
                  <li><Link><a href="#">Framework & Technology</a></Link></li>
                </ul>

              </li>

              <li><Link to="/portfolio"><a href="">Portfolio</a></Link> </li>
              <li><Link to="/career"><a href="">Career</a></Link> </li>
              <li><Link to="/blog"><a href="">Blog</a></Link> </li>
              <li><Link to="/contact"><a href="">Contact</a></Link></li>
              <li><GoogleIcon /></li>
            </ul>
            <IconButton color="primary" aria-label="open drwaer" edge="start" sx={{ mr: { xs: "3rem" }, display: { md: "none", } }} onClick={handleDrawerToogle} >
              <MenuIcon style={{ fontSize: "3.3rem", }} />

            </IconButton>
          </Box>
          <Box component="nav">
            <Drawer variant="temporary" open={MobileOpen} onClose={handleDrawerToogle} sx={{ display: { xs: "block", sm: "block" } }}>
              {drawer}
            </Drawer>
          </Box>
          <Box component="nav">

          </Box>
        </div>



      </Box>
      <Box className="servicesbox" visibility={"hidden"} variant="div" sx={{ position: "absolute", width: "200px", backgroundColor: "white", zIndex: "1", }}>
        <ul>
          <li>
            <li><Link to="/portfolio"><a href="">website</a></Link> </li>
            <li><Link to="/career"><a href="">Career</a></Link> </li>
            <li><Link to="/blog"><a href="">Blog</a></Link> </li>
            <li><Link to="/contact"><a href="">Contact</a></Link></li>
          </li>
        </ul>
      </Box>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;