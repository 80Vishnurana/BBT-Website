import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const ItConsulting = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            IT Consulting
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            An Information Technology (IT) Consultant helps business to create value and optimize their performance through technology. Strategy and operational mission are under IT consultant along with implementation and will also help clients in develop the prototype or software to respond to a specific need.
                            In term of providing IT Consultant Service, we go through several layers just to accomplish a project successfully. First, we mark area of requirement then with the aim of collecting data, start interviewing certain employees within Client’s company then consist of analyzing collected data. After that to formulate recommendation and action plan on the analysis and we will discuss our in-house experts and client’s too, then lastly we come to the conclusion and hand over it to our client.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "300px" }, width: { xs: "80vw", md: "100vw", lg: "200vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Why Choose IT consulting for your Company:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "38vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "38vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Focusing on Core business Function
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>It very distracting to focus on outside work such as focusing on Information technology to figure out extended problems, is really disengagement that leads to a reduction in revenue of the company. Establishing new technology, fixing IT related issues and researching for permanent solution can be a very time taking and inexpert process for any non-technical person. Hiring an IT Consultant for all your IT crises leads to many efficient and effective results. It gives your productive team to focus their time on the core productivity work of the company and generating revenue to build up the profit.


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
                // backgroundColor: "rgb(236, 240, 247)",
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "60vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Improve Productivity
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> IT consultant can be helpful in improve productivity and enhance the performance of the company. Through multiple technologies like central database, file server, mobile platform, e-mail communication and broadband connectivity IT expert enable collaboration, communication and knowledge sharing that allows every single employee to innovate day to day aspects to their job. Every business productive lies on technology in modern era and a good technical support help to maintain implementation and planning to gain maximum productivity.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}

                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "40vh" }, width: { xs: "98%", lg: "50%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "34vh" }, width: { xs: "98%", lg: "100%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "34vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Increased Security
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>An IT consultant who is specializes in cyber security conduct an implementation to prevent your company from outside threat by identify vulnerabilities in your data than establish data security protocol and help to develop a disaster recovery solution. IT professionals can also train your in-house employees the process of identifying the Viruses and other dangerous malware.
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
                // backgroundColor: "rgb(236, 240, 247)",
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "60vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Control Expenses and Cost
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Generate predictable IT cost is the first problem that crossed by every business owner’s mind when they start their company to engage in productivity. The cost given up to get technology assistance within company to a permanent staff can be very expensive and also not necessarily important when you can hire IT experts as IT consultant to manage all your IT problems at half of the price you are giving to your permanent IT staffs. Not only saving the expense you will get relief to know that mow you are not having to deal with training, recruiting, holidays, sick days or management issues. You will get free from all these worries as your leverage an IT consultant to manage your IT crises and give you a piece to work more efficiently.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}

                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "47vh" }, width: { xs: "98%", lg: "50%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>



        </>
    )
}

export default ItConsulting
