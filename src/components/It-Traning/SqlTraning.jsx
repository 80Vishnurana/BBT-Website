import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const SqlTraning = () => {
    const heading = "    IT Training Services"
    const subheading = "Our Services"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, width: { xs: "100%", lg: "85vw" } }}>
                    <Box sx={{ pr: 6, pb: 12, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >

                            SQL Training
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Structure Query Language is the full form of SQL or in another word ‘See-Quel’, is the standard language dealing with the Relational Database. SQL is basically used in Search, Insert, Modify, Delete and update database records, but it’s not the only thing SQL do things beyond that too. SQL is not just for tech team every professional should learn it for their own benefit. If you are looking into SalesForce dashboard, Xero report or Google Analytical report this will make you much more effective and efficient in your work space because after SQL Training you will be able to question the data and precisely understand the what, why, and when? Our Experienced and expert trainer of SQL train you to till your satisfaction. We use new and easy understandable method to train & teach our students. SQL Training courses is for primary language skill developers. Learner can improve their abilities by obtaining deep knowledge of SQL stored program units i.e., functions, procedures, database triggers and package. They can learn to make SQL block of application that can be shared by multiple forms, reports & Data management application.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "450px" }, width: { xs: "80vw", md: "100vw", lg: "350vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    {/* <img height="40px" width="40px" src="../public/hand.png" alt="" /> */}
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Blue Brain Technologies provides you some quality skills that are:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Increase Ability as Developer
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Your academic knowledge and extra-curricular activity is not enough to maintain a niche space on your desired place. Sometime some special training will light up your path to lead you towards our goal. SQL training is one of them which are an essential element for every web developer. After the training of SQL skills you are able to increase your desirability as employee.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Get Secured Future
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>SQL is one of the easiest languages to learn as well as the most helpful programming language too. It has proven itself to be reliable for promiscuous industry in a different type of setting for almost half of century and remained popular till date. It is more efficient than writing lines of code on your own and also an adaptable language with only slight modification. A history 50 years belongs to SQL remain popularity proven the secured future ahead.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Learn other language Easily with SQL
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>SQL has similar skills in learning that translated into different areas and creates an understanding of much other programming language such as C++, JavaScript and Python. The structure of SQL provides a straight forward framework for data analysis. It can be flexible and can be optimized by developers to rub any query. This language can be adaptable & extended with new calculation.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Learn to manage huge data task
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Managing database on traditional spreadsheet is not capable for today’s time. Now we want technology-driven application that works efficiently even when it’s a work of managing 1 million data precisely. SQL is completely equipped to handle data pools of virtually all sizes. SQL provide relational database that are intended to store million of rows of data precisely. Learning SQL assist you to experience to manage huge database
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "64vh" }, width: { xs: "98%", lg: "150%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "64vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Establishes consistent Brand Identity
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>As a professional website designer we keep up the consistency of your brand identity always high or maintained as per business requirement.
                                        We keep leads on your page and let them familiar with your business that keep engaging more and more traffic with the steadiness in your brand identity.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", px: 1, mt: 5 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>So, what are you waiting for? Grab this opportunity & Join Blue Brain Technologies to work more efficiently and effectively in your work arena
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>



        </>
    )
}

export default SqlTraning
