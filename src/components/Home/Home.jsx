import React, { Fragment } from 'react'
import "./Home.css"
import Carousel from 'react-bootstrap/Carousel';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Fastival from '../Fastival/Fastival';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


const styles = {
  box: {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': {
      backgroundImage: `url('	https://bluebraintech.com/assets/img/service/service01.jpg')`,
      transition: 'background-image 2s ease',

    },
  },
  box2: {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': {
      backgroundImage: `url('	https://bluebraintech.com/assets/img/service/service02.jpg')`,
      transition: 'background-image 2s ease',

    },
  },
  box3: {

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.9,
    '&:hover': {
      backgroundImage: `url('	https://bluebraintech.com/assets/img/service/service03.jpg')`,
      transition: 'background-image 2s ease',


    },
  },
};
const Paperstyle = styled(Paper)`    
         :hover {
            background-image: url(https://media.istockphoto.com/id/1623894588/photo/graphic-designer.jpg?s=1024x1024&w=is&k=20&c=u2NE-wZk4GnItBUENG84mhL8k4WV6D_LpiiP3o__cdE=);
            transform: scale(1.1);
            backgroundSize:cover;
            backgroundRepeat:no-repeat;
            transition: transform 0.5s ease-in-out;
            boxShadow: "inset 0 0 800px black",
          }    
`

function Home() {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Fragment>



      <Carousel style={{ width: "100%", backgroundImage: 'none' }}>
        <Carousel.Item interval={1000}>


          <img src="https://bluebraintech.com/assets/img/sliders/bg10.jpg" style={{ height: "30rem", width: "100%" }} />
          <Carousel.Caption>
            <div className='heading-crousel'>

              <h2>Modernize IT Operation</h2>

              <div data-aos="fade-up">

                <p>Software/Mobile Application development company in India, has a long experience in development of custom solutions.</p>
              </div>
            </div>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src="https://img.freepik.com/free-photo/hand-near-laptop-that-expels-graphics-arrows_1232-287.jpg?w=740&t=st=1696066630~exp=1696067230~hmac=d6705d28d5eb1179f66761210956e71858f90b9b9018e46e90cc507b940f1ce0" style={{ width: "100%", height: "30rem", }} />
          <Carousel.Caption>
            <div className='heading-crousel'>
              <h1 >We Build Innovative, reliable and cost effective idea</h1>

              <p> We provide end to end solution for business. Among a plethora of services, design and development, tailor made applications, ERP, CRM, MOBILE APP, business-to-business applications, business-to-client applications, website are a few that we offer.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img src="https://img.freepik.com/free-photo/businessman-using-digital-tablet_53876-108317.jpg?w=996&t=st=1696917742~exp=1696918342~hmac=ef9770ae7842f3a74e5d40e51a525475f45745cd5083a7ccf1c9a80e1d51df85" alt="#" style={{ width: "100%", height: "30rem", }} />
          <Carousel.Caption>
            <div className="heading-crousel">
              <h1>Redefine your business with digital Solution</h1>
              <p>We are used latest technology which help to clients with industry requirement. We provide business solutions as service over the internet and on dedicated network with delivery on demand. We ensure security of data.</p>

            </div>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <div className='cont' style={{ position: "absolute", zIndex: "2", width: "98vw" }}   >

        <div className="row" >
          <div className="col-md-5 col-sm-6  single-contact">
            <img src="assets/img/icons/icon01.png" alt="" />
            <p>B-12, Ground Floor, Sector-2, Noida-201301 (U.P.)</p>
          </div>
          <div className="col-md-4 col-sm-6 single-contact">
            <img className="pt-2" src="assets/img/icons/icon02.png" alt="" />
            <p>+91-9999600883<br /><a href="">info@bluebraintech.com</a></p>
          </div>
          <div className="col-md-3 col-sm-6 single-contact">
            <img src="assets/img/icons/iso-9001.png" height="45px" alt="" />
            <p><b>ISO 9001:2015 (QMS) Certified</b></p>
          </div>
        </div>
      </div> */}







      <Box className="about" sx={{ width: "100vw", textAlign: "center" }}>

        <Box className="abouthead" bgcolor={"rgb(255, 255, 255)"} pl={5}>
          <Typography variant='h4' textAlign={"start"} sx={{ paddingTop: "20px", bgcolor: "rgb(255, 255, 255)" }}> About Us </Typography>
          <Typography variant='h6' textAlign={"start"}>A complete IT solution company packed with innovative and compatible ideas.</Typography>

        </Box>
        <Box className="box" width="100vw" sx={{ height: "auto", display: "flex", paddingBottom: "5rem" }}>
          <Box className="box-t" sx={{ width: { xs: "23rem", lg: "50rem" } }} pl={"2rem"} pt={"6rem"} >
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <Box className='accodian'>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography >Blue Brain Technologies Private Limited is ISO 9001:2015 (QMS) Certified</Typography>
                </AccordionSummary>
              </Box>
              <AccordionDetails sx={{ p: "0px" }}>
                <Typography className='accbox' >
                  Blue Brain Technologies Private Limited is ISO 9001:2015 (QMS) Certified an IT Solution company built with passion and integrity, based in Delhi. Blue Brain Technologies is not just an organization but a dream of a common man to create a better place in the technical arena. We provide the benefits of Information technology to our clients through intelligent, cost-effective, and qualitative solutions that would increase productivity and enhance efficiency.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <Box className='accodian'>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography >Get Products</Typography>
                </AccordionSummary>
              </Box>
              <AccordionDetails sx={{ p: "0px" }}>
                <Typography className='accbox'>
                  Our services were great and the product was great. I am so satisfied with your new software, I will definitely come back for updates.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <Box className='accodian'>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Our Vision & Mission</Typography>
                </AccordionSummary>
              </Box>
              <AccordionDetails sx={{ p: "0px" }}>
                <Typography className='accbox' >
                  Blue Brain Technologies convey that what we promise, we not only provide service but the customer’s satisfaction is the main motive of our company. Here we serve you the full satisfaction and pleasure. Blue Brain Technologies vision is to rule the heart of the customers by offering them the high quality, cost-effective and progressive services and to achieve a premier top level in the market over the next five years within India and overseas also.
                </Typography>
              </AccordionDetails>
            </Accordion>
            {/* <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <Box className='accodian'>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                  <Typography>Our Experties</Typography>

                </AccordionSummary>
                <AccordionDetails sx={{ p: "0px" }}>
                  <Typography bgcolor={'gray'}>
                    Architectures (Microsoft.NET , JAVA/J2EE, PHP , Android) Web Servers(Microsoft IIS, Apache Server, Tomcat, JBoss, Sun Server) Server Languages(ASP, Servlets, Java Server Pages (JSP), CGI/Perl, PHP) Databases(MS SQL Server, MYSQL , Oracle), Frameworks ( MVVM, Laravel, .NET CORE, Spring, Hibernate ).
                  </Typography>
                </AccordionDetails>
              </Box>
            </Accordion> */}
          </Box>

          <Box className="box-img" sx={{ width: { xs: "100vw", lg: "50rem" }, height: "auto", p: { xs: "1.5rem", lg: "3rem" }, mt: { xs: "0px", lg: "3rem" } }}>
            <img src="https://bluebraintech.com/assets/img/about_us.jpg" alt="" style={{ width: "100%", height: "100%", boxShadow: "10px 10px 4px black" }} />
          </Box>

        </Box>
      </Box>
      <Box sx={{ mt: 6, mx: { xs: 3, lg: 18 }, }}>
        <Typography variant='h3' fontSize={"37px"} sx={{ pb: { xs: 2, lg: 3 } }} >
          Our Services
        </Typography>
        <Typography variant="body1">
          We Ensuring Customer Satisfaction Our deep industry experience helps you achieve immense success and grow your Business.
        </Typography>
      </Box>
      <Grid container justifyContent={"flex-start"} sx={{ px: { xs: 1, lg: 16 } }} >
        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, }}  >

          <Paperstyle className='cards' sx={{ m: 2, width: "21rem", boxShadow: 4, }}>
            <Box p={3}>
              <Box
                sx={{ py: { xs: 2, lg: 4 } }}
              >
                <LaptopMacIcon sx={{ fontSize: "4rem" }} />
              </Box>
              <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                Website Design
              </Typography>
              <Typography pt={2} >
                At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
              </Typography>
              <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
            </Box>
          </Paperstyle>
        </Grid>
        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, }}  >

          <Paperstyle className='cards' sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
            <Box p={3}>
              <Box
                sx={{ py: { xs: 2, lg: 4 } }}
              >
                <LaptopMacIcon sx={{ fontSize: "4rem" }} />
              </Box>
              <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                Website Design
              </Typography>
              <Typography pt={2}>
                At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
              </Typography>
              <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
            </Box>
          </Paperstyle>
        </Grid>
        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, }}  >

          <Paperstyle className='cards' sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
            <Box p={3}>
              <Box
                sx={{ py: { xs: 2, lg: 4 } }}
              >
                <LaptopMacIcon sx={{ fontSize: "4rem" }} />
              </Box>
              <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                Website Design
              </Typography>
              <Typography pt={2}>
                At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
              </Typography>
              <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
            </Box>
          </Paperstyle>
        </Grid>
        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}   >

          <Paperstyle className='cards' sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
            <Box p={3}>
              <Box
                sx={{ py: { xs: 2, lg: 4 } }}
              >
                <LaptopMacIcon sx={{ fontSize: "4rem" }} />
              </Box>
              <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                Website Design
              </Typography>
              <Typography pt={2}>
                At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
              </Typography>
              <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
            </Box>
          </Paperstyle>
        </Grid>
        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

          <Paperstyle className='cards' sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
            <Box p={3}>
              <Box
                sx={{ py: { xs: 2, lg: 4 } }}
              >
                <LaptopMacIcon sx={{ fontSize: "4rem" }} />
              </Box>
              <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                Website Design
              </Typography>
              <Typography pt={2}>
                At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
              </Typography>
              <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
            </Box>
          </Paperstyle>
        </Grid>
      </Grid>
      {/* ..................................................OUR Feature.................................. */}
      <Box sx={{ mx: { xs: "1rem", lg: "9rem" }, }} >
        <Typography variant='h4'>Our Features</Typography>
        <Typography pb={5} pt={2}>It's what we do, and we know how to make it work for our clients and organization. We are using latest technology working in cooperation with the customers. We are committed to Quality & Security is Paramount.</Typography>

        <Grid container>
          <Grid xs={12} md={6} lg={4} sx={{ borderRight: { xs: "none", md: "none", lg: "1px solid skyblue" } }}>
            <Box display={"flex"} pb={"3rem"} pr={2} p={2}>
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="../public/trend.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>
                  Business Growth
                </Typography>
                <Typography variant="body2">
                  Our performance-oriented culture with responsible approach has taken us where we are today. We have experienced professionals to develop with complex business logic dealing with large amounts of data and transactions.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4} sx={{ borderRight: { xs: "none", md: "none", lg: "1px solid skyblue" } }} borderRight={"1px solid skyblue"}>
            <Box display={"flex"} pb={3} pr={2} p={2}>
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="https://bluebraintech.com/assets/img/features-icon/features-icon02.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>

                  Sustainability
                </Typography>
                <Typography variant="body2">
                  The more number of times a customer hits on your link, the more revenue you get set to generate from it. Therefore, this is where our role comes in.
                </Typography>

              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4}>
            <Box display={"flex"} pb={3} pr={2} p={2}>
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="../public/performance.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>

                  Performance
                </Typography>
                <Typography variant="body2">
                  Provide exponentially product, the demand for high-quality development resources greatly outnumbers the supply, leading to increased domestic rates that just aren’t affordable.
                </Typography>

              </Box>
            </Box>
          </Grid>
          <hr />
          <Grid xs={12} md={6} lg={4} sx={{ borderTop: { xs: "none", md: "none", lg: "1px solid skyblue" }, borderRight: { xs: "none", md: "none", lg: "1px solid skyblue" } }}    >
            <Box display={"flex"} pb={3} pr={3} p={2}>
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="../public/organization.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>

                  Organization
                </Typography>
                <Typography variant="body2">
                  We are able to provide solution of every organization But our general aim is to provide solutions that are tailored to the requirements of our clients. Our extended experience gives opportunity.
                </Typography>

              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4} sx={{ borderTop: { xs: "none", md: "none", lg: "1px solid skyblue" }, borderRight: { xs: "none", md: "none", lg: "1px solid skyblue" } }}>
            <Box display={"flex"} pb={3} pr={2} p={2}
            >
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="../public/organization.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>

                  24/7 Support
                </Typography>
                <Typography variant="body2">
                  Support when you need. We specialize in providing support to individual customers with reliable and cost-effective solutions. We provide technical as well as functional support to address your issues on call/ online.
                </Typography>

              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={4} sx={{ borderTop: { xs: "none", md: "none", lg: "1px solid skyblue" } }}>
            <Box display={"flex"} pb={"3rem"} pr={2} p={2}>
              <Box pr={4}>
                <img height={"50px"} width={"50px"} src="../public/coffee.png" alt="" />
              </Box>
              <Box>
                <Typography variant='h4' fontSize={"28px"} pb={1}>
                  Mobile Integration
                </Typography>
                <Typography variant="body2">
                  Smartphones enables new mobile services and business models to be combined. Product is very well connected with the palm which facilities the management of any organization to view important reports and provide approval of the product.
                </Typography>

              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>

      <Box>
        <Fastival />
      </Box>




    </Fragment>
  )
}

export default Home
