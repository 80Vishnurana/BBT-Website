import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Stack, Typography, } from "@mui/material";
// import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>



      <Box className="footer" sx={{ p: { xs: "2rem", lg: "3rem" }, height: "auto" }} >

        <Stack direction={{ xs: "column", md: "row", }} >
          <Box pt={"15px"} flex={1}>
            <Typography ><img src="../logo.png" alt="logo" width={90} style={{ height: "5rem" }} /> </Typography>
            <Typography pt={2} sx={{ pr: { xs: 2, lg: 3 }, fontWeight: "20px", color: " rgb(240, 239, 239)" }}>
              Blue Brain Technologies is a leading solution provider for web & mobile based applications.
            </Typography>
          </Box>
          <Box flex={1} className="red" sx={{ py: { xs: 5, lg: "0rem" } }}>
            <Typography sx={{ "a:hover": { color: "blue" } }} variant="h4" color={"white"} fontWeight={600}>Company</Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={3} ><a href=""> <span > &gt;</span> Gallery</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}>
              {/* <Link to="/about">
                <a href=""><span > &gt;</span> About Us</a>
              </Link> */}
            </Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2} ><a href=""><span > &gt;</span> Blog</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2} >
              <a href="portfolio.php"><span > &gt;</span> Portfolio</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}><a href=""><span > &gt;</span> Career</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}><a href=""><span > &gt;</span> Contact Us</a></Typography>
          </Box>
          <Box flex={1} className="red" sx={{ fontSize: "30px", pt: { xs: 2, lg: 0 } }}>
            <Typography variant="h4" color={"white"} sx={{ fontSize: "30px", pt: { xs: 2, lg: 0 } }} fontWeight={700}> Services</Typography>
            <Typography sx={{
              "a:hover": {
                color: "blue"

              }
            }} pt={3} ><a href="devlopment_service.php"><span > &gt;</span> Software Development</a></Typography>
            <Typography className="arrow" sx={{
              "a:hover": { color: "blue" },

            }} pt={2}><a href="mobile_development.php"> <span > &gt;</span> Mobile App Development</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}><a href="it_consulting.php"> <span > &gt;</span> IT  Consulting</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}>
              <a href="graphics_design.php"><span > &gt;</span> Graphics Design</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}><a href="website_design.php"><span > &gt;</span> Web Site  Design</a></Typography>
            <Typography sx={{ "a:hover": { color: "blue" } }} pt={2}><a href="online_marketting_service.php"> <span > &gt;</span> Sales &amp; Marketing</a></Typography>
          </Box>
          <Box flex={1} className="footer" >
            <Typography sx={{ "a:hover": { color: "blue" }, fontSize: "30px", pt: { xs: 6, lg: 0 } }} variant="h4" color={"white"} fontWeight={700}>Contact information</Typography>
            <p style={{ color: "white", marginTop: "-15px" }}>
              <Typography sx={{ "a:hover": { color: "blue", } }} color={"white"} pt={"20px"} /><i className="fa fa-map-marker" style={{ marginRight: "10px", paddingTop: "20px" }}></i> B-12, Ground Floor, Sector-2, Noida-201301( U.P.)    (Corporate Office)
            </p>
            <Typography />

            <Typography>
              <p>
                <a className="email" style={{ color: "white", }} href="mailto:info@bluebraintech.com">  <i className="fa fa-envelope" style={{ paddingRight: "10px" }}></i> info@bluebraintech.com</a> <br />
              </p>
              <p>
                <a className="email" style={{ color: "white" }} href="tel:+91 9999600883"> <i className="fa fa-phone" style={{ paddingRight: "10px" }}></i>(+91) 9999600883</a>
              </p>
            </Typography>
            <Typography style={{ color: "white", marginTop: "-25px", }} pt={2} />
            <p style={{ color: " rgb(240, 239, 239)", padding: "0px" }} >
              <i className="fa fa-map-marker" style={{ paddingRight: "10px" }} ></i>
              E-379, Gali No-76, Mahavir Enclave Part-3, West Delhi, Delhi-110059 (Registered Office)
            </p>

            <br /><p style={{ marginTop: "-35px", }} >
              <a className="email" style={{ color: " rgb(240, 239, 239)" }} href="mailto:info@bluebraintech.com" >  <i className="fa fa-envelope" style={{ paddingRight: "10px" }}></i> info@bluebraintech.com</a><br />
            </p>
            <p style={{ marginTop: '-10px' }}>
              <a className="email" style={{ color: " rgb(240, 239, 239)", }} href="tel:+91 9999600773"><i className="fa fa-phone" style={{ paddingRight: "10px" }}></i>(+91) 9999600773</a>
            </p>

            <Typography /></Box>
        </Stack >
      </Box >
      <Box className="futtericon" sx={{
        bgcolor: "#3570ee;",
        height: "auto",
        display: 'flex',
        alignItems: 'center',
        flexWrap: "wrap",
        justifyContent: "space-between",
        pl: { xs: "20px", sm: "10px", md: "10px", lg: "4rem", xl: "5rem" },
        py: "1.3rem",
        pr: { xs: "20px", sm: "10px", md: "10px", lg: "4rem", xl: "5rem" },
        py: { xs: "2rem", lg: "1px" }

      }}>
        <Typography sx={{ color: "white", px: { xs: "20px" } }}>© Copyright 2016 All Rights Reserved Blue Brain Technologies Private Limited | Site-map</Typography>
        <Typography sx={{
          color: "white",
          py: { xs: 2, lg: 3 },
          pr: { xs: "20px", sm: "20px" },
          pl: { xs: "20px", sm: "20px" },
          "& svg:hover": { color: 'goldenrod', transform: "translatex(5px)", transition: 'all 400ms' }

        }}>
          <a href="https://www.facebook.com/BB-Technologies-Private-Limited-102375521887549" color="white" ></a> <FacebookIcon />
          <span style={{ padding: "0px 1rem 0px 1rem", }}> | </span>
          <a href="https://twitter.com/BlueBrainTech" color="white"></a><TwitterIcon />
          <span style={{ padding: "0px 1rem 0px 1rem" }}> | </span>
          <a href="https://g.page/BlueBrainTech?share" color="white"> </a><GoogleIcon />
          <span style={{ padding: "0px 1rem 0px 1rem" }}> | </span>
          <a href="https://www.linkedin.com/company/65831667" color="white" ></a> <LinkedInIcon />
          <span style={{ padding: "0px 1rem 0px 1rem" }}> | </span>
          <a href="https://www.instagram.com/blue_braintechnologies/?igshid=YmMyMTA2M2Y=" ></a><InstagramIcon />
        </Typography>
      </Box>
      {/* <div>
        <Outlet />
      </div> */}
    </>
  );
};

export default Footer;
