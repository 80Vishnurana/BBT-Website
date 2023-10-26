import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const CloudServer = () => {
    const heading = "Framework & Technology Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Cloud Server
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 1, pt: 1 }}>
                            Cloud server is a virtual server, running in computing environment. It is built, hosted and delivered via cloud computing platform through the internet connectivity. It can be accessed remotely from anywhere, for example when an employee is on Work From home, he/she will be monitored by cloud server. Cloud based service can be used in web hosting, data hosting, sharing software or application. By using cloud server one can avoid the creation of different versions of the same files, documents and data during share.</Typography>
                        <Typography variant="body1" sx={{ pb: 2, }}>
                            Blue Brain Technologies delivers their clients Cloud hosted websites to enhance the quality of application or software. User gets more resource and faster services that any other physical cloud ever does at similar price. They give the website isolation from any software problem from the environment and make the business more stable and secure. You get scalability with cloud servers and very easy and quick to upgrade by adding memory and disk space as well as being more affordable.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "150vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>

                <Typography variant='h6' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Cloud hosted websites avail many advantages to customers:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "58vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "58vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Secured Data
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Data security is a top priority for everyone whether it is an IT person or not. That’s why we use Cloud platform, its advanced and high level security feature i.e. Data encryption and Routine Backup provide you higher security than that an in-house server. A cloud based platform protect your data in worst ever situation whether your laptop is stolen or have virus or broken your data is safe and sound in clouds. Data transfer via cloud are more safe because collaborator no longer need to mail data or download it and running the risk of forwarded sensitive information are not accessible in cloud based servers.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Connect from Anywhere
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif", pb: "2" }}>  With a Cloud based technology platform, user can access his/her account from anywhere with no time bounty. Work projects can be processed on multiple devices with an internet connection. A Cloud based server makes work easy for user, now users are no more restricted with time and location. This service gives freedom and flexibility to user and increase productivity also.
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "55vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easily Scalable
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Cloud Server has ability to be scaled in any size according to the requirement. As per the company’s growth and changes the cloud based server can go scale up and scale down as the workload effected by any circumstances and adapt the new normal very swiftly to meet your need.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>High Speed Performance
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Cloud hosting allows easy load balancing between multiple server environments and put less workload on a single server’s resource. This helps up to speedy performance in website.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>




        </>
    )
}

export default CloudServer
