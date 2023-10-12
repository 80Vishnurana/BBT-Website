import { Box, Grid, Typography } from '@mui/material'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import React, { useState } from 'react'
import './About.css'
import { NavLink } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 14,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));



const About = () => {
  const [counterStart, setCounterStart] = useState(false);

  return (
    <>
      <Box sx={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
        boxShadow: "inset 0 0 800px black",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
      }}>
        <Box display={"flex"} sx={{
          flexFlow: "column"
        }}>
          <Typography variant='h3' sx={{ color: "white", fontSize: "45px" }}>
            About Us
          </Typography>

          <Typography textAlign={"center"} fontSize={"25px"}>
            <NavLink to="/" >Home</NavLink><span style={{ color: 'white', fontWeight: "600", fontSize: "25px" }}>About Us </span>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
        <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
          <Box sx={{ pr: 6, pb: 2, }}>
            <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
              About Blue Brain Technologies
            </Typography>
            <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
              Blue Brain Technologies Private Limited is ISO 9001:2015 (QMS) Certified an IT Solution company built with passion and integrity, based in Delhi. Blue Brain technologies is not just an organization but a dream of a common man to create a better place in technical arena.</Typography>
            <Typography variant="body1" sx={{ py: 2 }}>
              With a crystal clear objective is to deliver quality Web application and Software Development Services while incorporating supreme value to enterprises globally at an affordable price.
            </Typography>
            <Typography variant="body1">
              With helps us provide reliable software solutions that meet present as well as future demands.
            </Typography>
          </Box>
          <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "130vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
          </Box>
        </Box>
      </Box>




      <Grid container sx={{ py: "4rem", px: { xs: "1rem", md: "2", lg: "8rem" }, mt: "3rem" }} className="gridbox" >

        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: { xs: "90vw", lg: "35vw" }, height: { xs: "45vh", lg: "70vh" }, pl: { xs: 2 }, py: "3rem", }}  >
            <img style={{ boxShadow: " -15px -15px 2px black", borderTopLeftRadius: "10rem" }} src="../public/Journey.jpg" alt="" height={"100%"} width={"100%"} />
          </Box>

        </Grid>
        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: { xs: "90vw", md: "60vw", lg: "40vw" }, height: { xs: "auto", md: "auto", lg: "60vh" } }}>
            <Typography textAlign={"center"} ><img src="../public/chart.png" widthalt="60px" height="60px" /></Typography>
            <Typography textAlign={"center"} sx={{ py: "1rem", fontWeight: "bold" }} variant='h4' >
              Our Journey
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "start", }}>
              The company started their journey in January 2016 in proprietorship with a group of 5 people under the name of “Yash Technology”. In the beginning they struggle a lot but slowly their citadel their work in their respective area. They get support and appreciation from their client through their work. After 2 years of proprietorship they turned their firm in a private ownership thus, Blue Brain Technologies Pvt. Ltd. Rises in June 2020.
              The Company Blue Brain Technologies is under partnership deed between 2 owners with a bright vision of new age innovation collaborating with creative techniques. We deliver technological service along with digital variation in the term of executing ideas. The organization has a small team for operation because we believe in quality not quantity. We have best skilled and multitasking team mate who work according the clients demands and work glowingly till satisfaction
            </Typography>
          </Box>

        </Grid>
      </Grid>



      <Grid container sx={{ py: "4rem", px: { xs: "1rem", md: "1rem", lg: "8rem" } }} className="gridbox1" >

        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: { xs: "98vw", md: "60vw", lg: "40vw" }, height: { xs: "auto", md: "auto", lg: "60vh" } }}>
            <Typography textAlign={"center"} ><img src="../public/chart.png" widthalt="60px" height="60px" /></Typography>
            <Typography textAlign={"center"} sx={{ py: "1rem", fontWeight: "bold" }} variant='h4' >
              Our Mission
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "start", pr: "2rem" }}>
              We the team of Blue Brain Technologies, have a mission to develop a society equipped with every technical solution in just one click, where we provide standard quality solution to every IT Industry at a pocket friendly cost. We have a team of highly qualified and experienced web and software developer along with Mobile app developers who understand the need of clients and work accordingly. We believe in a friendly chat with our clients to understand the basics of their demands to meet their expectations. We are here to earn trust of our clients with our efficiency in work and to achieve our target along with improve the quality of our deliverance day by day.
            </Typography>
          </Box>

        </Grid>
        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: { xs: "85vw", md: "auto", lg: "40vw" }, height: { xs: "50vh", lg: "70vh" }, py: "3rem", pl: { xs: "0.5rem", md: "1rem", lg: "2re," } }}  >
            <img style={{ boxShadow: " 15px 15px 3px black", borderBottomRightRadius: "10rem" }} src="../public/mission.jpg" alt="" height={"100%"} width={"100%"} />
          </Box>

        </Grid>
      </Grid>


      <Grid container sx={{ py: "4rem", px: { xs: "2rem", md: "2", lg: "8rem" }, }} className="gridbox2"  >

        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: { xs: "85vw", lg: "35vw" }, height: { xs: "45vh", lg: "70vh" }, py: "3rem", }}  >
            <img style={{ boxShadow: " -15px -15px 5px black", borderTopLeftRadius: "10rem" }} src="../public/vission.jpg" alt="" height={"100%"} width={"100%"} />
          </Box>

        </Grid>
        <Grid xs={12} md={6} lg={6}   >
          <Box sx={{ width: "40vw", height: "60vh" }}>
            <Typography textAlign={"center"} ><img src="../public/chart.png" widthalt="60px" height="60px" /></Typography>
            <Typography textAlign={"center"} sx={{ py: "1rem", fontWeight: "bold" }} variant='h4' >
              Our Vision
            </Typography>
            <Typography variant='body1' sx={{ textAlign: "start", pl: "2rem" }}>
              Blue Brain Technologies is very clear with its vision to create opportunities with the knowledge of information technology for our clients to fulfill their desires. We want to create a world through advance technology collaborated with innovative ideas and efficacious hard work along with young talent to leave an influential effect on new age technology.
            </Typography>
          </Box>

        </Grid>
      </Grid>







      <Box sx={{ mx: { xs: "1rem", lg: "9rem" }, py: 7 }} >
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


      <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} >

        <Grid container direction={"row"} sx={{ width: "100%", backgroundColor: "whitesmoke", height: "30vh", mt: 10, }}>
          <Grid xs={12} md={6} lg={3}>
            <Box sx={{ height: "170px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Box sx={{ pr: 2 }}>
                <img src="../public/team.png" alt="" height={"50px"} width={"50px"} />
              </Box>
              <Box >
                <Typography variant='h4' >
                  {
                    counterStart && <CountUp start={0} end={30} duration={2} delay={0} />
                  }
                </Typography>
                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }}>Projects Completed</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Box sx={{ backgroundColor: "whitesmoke", height: "170px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Box sx={{ pr: 2 }}>
                <img src="../public/team.png" alt="" height={"50px"} width={"50px"} />
              </Box>
              <Box >
                <Typography variant='h4' >
                  {
                    counterStart && <CountUp start={0} end={45} duration={2} delay={0} />
                  }
                </Typography>
                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }}>Team Members</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Box sx={{ backgroundColor: "whitesmoke", height: "170px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Box sx={{ pr: 2 }}>
                <img src="../public/team.png" alt="" height={"50px"} width={"50px"} />

              </Box>
              <Box >
                <Typography variant='h4' >
                  {
                    counterStart && <CountUp start={0} end={175} duration={2} delay={0} />
                  }
                </Typography>
                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }} >Happy Customers</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} md={6} lg={3}>
            <Box sx={{ backgroundColor: "whitesmoke", height: "170px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <Box sx={{ pr: 2 }}>
                <img src="../public/team.png" alt="" height={"50px"} width={"50px"} />

              </Box>
              <Box >
                <Typography variant='h4' >
                  {
                    counterStart && <CountUp start={0} end={11} duration={2} delay={0} />
                  }
                </Typography>
                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }} >Years Of Experience</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ScrollTrigger>




      <Box container sx={{ height: "90vh", width: "100%", display: "flex" }}>
        <Box sx={{ height: "90vh", width: "50vw", }}>
          <Box sx={{ flexGrow: 1, p: 2, ml: 12 }}>
            <Typography variant='h5' sx={{ py: 2 }}>Development</Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant='h5' sx={{ py: 2 }}>Marketing</Typography>
            <BorderLinearProgress variant="determinate" value={70} />
            <Typography variant='h5' sx={{ py: 2 }}>Consulting</Typography>
            <BorderLinearProgress variant="determinate" value={60} />
            <Typography variant='h5' sx={{ py: 2 }}>Presentations</Typography>
            <BorderLinearProgress variant="determinate" value={90} />
            <Typography variant='h5' sx={{ py: 2 }}>Branding</Typography>
            <BorderLinearProgress variant="determinate" value={60} />
            <Typography variant='h5' sx={{ py: 2 }}>Photography</Typography>
            <BorderLinearProgress variant="determinate" value={40} />
          </Box>
        </Box>
        <Box sx={{ height: "90vh", width: "50vw", p: "1rem", }}>
          <Typography sx={{ pb: "1rem", pl: 5, fontWeight: 600, fontFamily: "sans-serif" }} variant='h3'>What We Do</Typography>
          <Typography sx={{ px: 5 }} variant='body1'>At Blue Brain Technologies, we deliver excellence in terms of dedicated business - centric web solutions with an SEO point of view. We are specialists in customised web services that meet Web 2.0 standards and accommodate scopes for futuristic support. Online marketing with latest market trends make us one of the best internet marketing solution companies. "Our Devoted Experts (DE) are proficient to deliver quick and quality solutions. With a blend of experts with proven track record our web designers, network engineers, software developers, graphic designers, software testers and search engine optimisers makes it possible to offer our clients affordable - web solutions that are both innovative and highly influential". "At Blue Brain Technologies, our DEs comprises of skilled professionals having experience working with a variety business segments. This cross-industry experience gives us the exceptional ability to analyse client’s business requirements and determine how the client can best benefit from using our services and us as a Software Development Partner". All of our products exhibit an exceptional record of success and are backed by on the ball and professional team. We would be thrilled to help your company - small or large - deliver projects that better serve your requirements.
          </Typography>
        </Box>
      </Box >






    </>
  )
}

export default About
