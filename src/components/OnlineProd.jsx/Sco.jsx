import React from 'react'
import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'

const Sco = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Website Design
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            At Blue Brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business and it should be designed properly according to the client’s vision as it is a quintessential part of your company. We design your website with superlative projects plan after studying and analyzing your business requirement. As per the demand, we provide affordable cum creative work to let your business grows at par. We have a qualified bunch of experienced website designers who perfectly understand the need and perception for the website and create it accordingly with the entire knowledge of designing tool and come up with a quality result to boost your business.</Typography>
                        <Typography variant="body1" sx={{ py: 2 }}>
                            A responsive website is a key to uplift the most difficult plight into a better state and benefits your company in multiple ways.
                        </Typography>
                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Being a professional website designer, we whip up your company with several benefits:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>First Impression always last long
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>A website designed by us provide a look that flatter your visitors and give them a reason to explore more. A perfect designed website leaves an impression with high quality experience to your visitors and lead to more verbal referral and new visitors to your website.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Never underestimate your competitors
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Nowadays there are almost every company which assist their business online and they all have a website to control it. We provide you a good, professional and responsive website that has potential to compete with your competitors and achieve a good response form your customers. We provide you a website equipped with latest trends and technology in order to keep up with your competitors.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Built up trust with Audience
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>If your website is poorly designed or have outdates information on it, people easily get distracted form your website and have trust issues.
                                    A website with latest technology and professional look equipped with updated information build trust with your audience so they remain on your website. Regularity of visitors on site helps to create more opportunities for your business to capture those leads.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Whip up your ranking in Search Engine
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>A niche content and code on website helps your website to rank on any search engine like Google. A good quality Web design elements are directly effects on SEO to improve the visibility of website on search result.
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Reduction in Bounce Rate
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>A professional responsive website has lower bounce rate. A website should be engaging enough to hold up visitors to check every pages of website which reduce the bounce rate.
                                        We offer you a website with engaging data and content to hold up visitors. Visitor will be inclined to click and read every section of your website and get aware of the service that you’ve got to offer
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

export default Sco
