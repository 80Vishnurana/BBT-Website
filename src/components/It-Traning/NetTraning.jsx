import Heading from '../Heading/Heading'
import React from 'react'
import { Box, Paper, Typography } from '@mui/material'

const NetTraning = () => {
    const heading = "IT Training Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, width: { xs: "100%", lg: "73rem" }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            DOT NET Training
                            <hr style={{ width: "20rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            .Net or Dot Net is a programming infrastructure, created by Microsoft for developing, deploying and running applications and services such as web Service and Desktop Application. It’s a collection of framework and language. .Net training is for those you have interest in Software development arena. Dot Net programmer creates and develop a set of agile system application that are armed with the ability to run on multiple platform. The market of Dot Net is highly competitive, to survive here one must have to know little finesse adaptability to the upgrades in Dot Net Language. This will create a higher probability to achieving a well desired job on a persuasive remuneration. At Blue Brain Technologies, you will learn the latest technicality in .NET training and can build any kind of application that can run on any modern computer, tablet or phone. OSX, IOS, Android, Window, Linux etc. these are the platform, where you will learn to develop application through .Net Training. Now the question is that what is stopping you to join Blue Brain Technologies to be .Net Developer?</Typography>
                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "350vw" } }}><img style={{ boxShadow: "10px 10px 2px black" }} src="../public/netTraning.jpg" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    These are the most effective benefits to join Dot Net Training with us:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "58vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/netlearning.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "58vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Multiple Language Support
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> Learner will find multiple language support in a single program name Dot Net Training. There are four languages supported to Dot Net Visual Basic.Net, C#, J Script Net and C++, If learner know any of them language they have a perk in their training to adapt it easily.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Safe and Secure career
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Dot Net Programming language carrying a different strength and an identifiable to provide a different set of benefits from all the languages. Those languages include a very affective architecture that can deliver great exposure to varied software tools and programs, which leads to safe and secure career passage.
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

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "55vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Great Surge in Career
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Dot Net Training provide extraordinary professional climb to reach out to the desired career. As per past experience no one have suffered depreciation in their career with having an experience in handling Dot Net Programming Language. Dot Net Developers are always in demand and repeated growth in internet era may increase its possibilities to get hike in future
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Offer Great Salary
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> As per above lines Dot Net developers seamlessly increased their status in their work expertise which definitely shows up their estimated salary that have to be in 6 digit. One can improve their salary by enhance their skill and sharpen your knowledge time to time and you can easily move towards an esteemed career stream.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/learning..jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>




        </>
    )
}

export default NetTraning
