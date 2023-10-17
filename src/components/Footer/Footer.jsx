import React from "react";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box, Stack, Typography, } from "@mui/material";

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
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} variant="h4" color={"white"} fontWeight={500}>Company</Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={3} ><a href="gallery.php">Gallery</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="about_us.php">About Us</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2} ><a href="blog.php">Blog</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2} ><a href="portfolio.php">Portfolio</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="career.php">Career</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="contact_us.php">Contact Us</a></Typography>
          </Box>
          <Box flex={1} className="red" sx={{ pb: { xs: 3 } }}>
            <Typography variant="h4" color={"white"} fontWeight={500}>Services</Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={3} ><a href="devlopment_service.php">Software Development</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="mobile_development.php">Mobile App Development</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="it_consulting.php">IT Consulting</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}>
              <a href="graphics_design.php">Graphics Design</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="website_design.php">Web Site Design</a></Typography>
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2}><a href="online_marketting_service.php">Sales &amp; Marketing</a></Typography>
          </Box>
          <Box flex={1} className="footer" >
            <Typography sx={{ "a:hover": { textDecoration: "none", } }} pt={2} variant="h4" color={"white"} fontWeight={500}>Contact information</Typography>
            <p style={{ color: "white", marginTop: "-15px" }}>
              <Typography sx={{ "a:hover": { textDecoration: "none", paddingBottom: "3px" } }} color={"white"} pt={"20px"} /><i className="fa fa-map-marker" style={{ marginRight: "10px", paddingTop: "20px" }}></i> B-12, Ground Floor, Sector-2, Noida-201301( U.P.)    (Corporate Office)
            </p>
            <Typography />

            <Typography>
              <p>
                <a style={{ color: "white", }} href="mailto:info@bluebraintech.com">  <i className="fa fa-envelope" style={{ paddingRight: "10px" }}></i> info@bluebraintech.com</a> <br />
              </p>
              <p>
                <a style={{ color: "white" }} href="tel:+91 9999600883"> <i className="fa fa-phone" style={{ paddingRight: "10px" }}></i>(+91) 9999600883</a>
              </p>
            </Typography>
            <Typography style={{ color: "white", marginTop: "-25px", }} pt={2} />
            <p style={{ color: " rgb(240, 239, 239)", padding: "0px" }} >
              <i className="fa fa-map-marker" style={{ paddingRight: "10px" }} ></i>
              E-379, Gali No-76, Mahavir Enclave Part-3, West Delhi, Delhi-110059 (Registered Office)
            </p>

            <br /><p style={{ marginTop: "-35px", }} >
              <a style={{ color: " rgb(240, 239, 239)" }} href="mailto:info@bluebraintech.com" >  <i className="fa fa-envelope" style={{ paddingRight: "10px" }}></i> info@bluebraintech.com</a><br />
            </p>
            <p style={{ marginTop: '-10px' }}>
              <a style={{ color: " rgb(240, 239, 239)", }} href="tel:+91 9999600773"><i className="fa fa-phone" style={{ paddingRight: "10px" }}></i>(+91) 9999600773</a>
            </p>

            <Typography /></Box>
        </Stack >
      </Box >
      <Box className="futtericon" sx={{
        bgcolor: "black",
        height: "auto",
        display: 'flex',
        alignItems: 'center',
        flexWrap: "wrap",
        justifyContent: "space-between",
        pl: { xs: "20px", sm: "10px", md: "10px", lg: "4rem", xl: "5rem" },
        py: "1.3rem",
        pr: { xs: "20px", sm: "10px", md: "10px", lg: "4rem", xl: "5rem" }

      }}>
        <Typography sx={{ color: "white", px: { xs: "20px" } }}>© Copyright 2016 All Rights Reserved Blue Brain Technologies Private Limited | Site-map</Typography>
        <Typography sx={{
          color: "white",
          pr: { xs: "20px", sm: "20px" },
          pl: { xs: "20px", sm: "20px" }

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
    </>
  );
};

export default Footer;
