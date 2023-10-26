import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const DigitalMarketing = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>



            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Digital Marketing
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />

                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Digital marketing is platform driven by Internet which helps to reach customers. This platform provides a new endeavor with new way to approach consumers in market place besides traditional marketing. It’s an essential for your website and also for brand awareness. Digital marketing benefits more traffics and new leads to any type of business through their different aspects such as: Content marketing, SEO , SMO, SEM(Search Engine Marketing), Video Marketing, E-mail, Online PR, PPC (Pay Per Click) and many more. In here, Blue Brain Technologies, we have a specific team for Digital marketing that solves your every problems related to online marketing. We work according to new trends and use different tools like analytical dashboard to monitor the success and ROI to make an eye on the running campaign to avoid damages. We work creatively and experiments on new tactics in a budget range.

                        </Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>

                    Our Digital Marketing services provide such results:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "52vh" }, width: { xs: "100%", lg: "100%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "52vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Global Outreach
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Digital marketing platform is a place where you can connect with your customer worldwide with just one click. You can sale your products and services from your place to other shore of the world and make your name and fame across the world.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Real Time Result
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Online/Digital marketing is the only place where you can perceive the real time result by knowing the effect of your approach. After reviewing the outcome, you can implement another approach for the betterment of the company. It allows their user to allocate the performance of the approach on users.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Branding Name
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>• Cost EffectiveDigital platform can be good source to build the reputation of the company online through different aspects. A well-developed website can be the first choice among users along with blog feature quality, useful articles and social media channels add more material to look for the highly interactive website. These feature make a way to build a brand name of business through digital marketing.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Cost Effective
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Marketing and advertising in traditional way will be the financial burdens for many start-up companies because of its high investment plan. But marketing through online platform cost your less but have a guarantee to positive result. It create vas much as impact yet spending ay less. You can subscribe for E-Mail marketing plan in just few bucks to send transactional or direct email to more than thousand customer at a time in on your mailing list and also have kept an eye on deliverance report.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "65vh" }, width: { xs: "98%", lg: "100%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "40vh" }, width: { xs: "98%", lg: "150%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "40vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Methodical Target
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>An advertisement runs over the digital platform with a reasonable approach to attract specific users for their preferences or initial action such as Password reset, order confirmation email, one time password etc. these type of email only sent to those customers who willing chose the action towards the business. In Methodical target customer get what they ask for. Such specific ad campaign shown only specific inkling users which helps to increase the sales probability along with cut down the cost of marketing.
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

export default DigitalMarketing
