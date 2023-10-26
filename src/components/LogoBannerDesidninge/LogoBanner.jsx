import React from 'react'
import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'

const LogoBanner = () => {
    const heading = "Logo & Banner Designing"
    const subheading = " Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Logo & Banner Designing
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1, fontFamily: "sans-serif" }}>
                            Have you ever thought why Logo and Banners are so much important for any organization? No..! Then we tell you the exact reason behind it and why we are keeping our eyes on it.</Typography>
                        <Typography variant="body1" sx={{ fontFamily: "sans-serif" }} mt={-2}>
                            In Blue Brain Technologies Pvt. Ltd. we work hard to create a face for your company which reflects your whole business idea in a single picture. We believe that logo is an unforgettable signature of company which can’t get blown from your mind and recognize the company by its logo. Same as banner, it’s the first thing visible to customer and take mere seconds to capture the interest of visitors and encourage staying on websites for further browsing. We follow new trends in banner designing where we use more attractive color, images and easy-to-read font with one liner content to emphasis viewer to look out more stuffs on page. Our logo and banner designing service will enhance your identity of work and increase brand value.
                        </Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="../../public/logobanner.jpg" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Advantages you get from Logo & Banner designing:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "31vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/womanimg.png" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "auto", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Face of the Company
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Company’s logo is the face of the organization which imparts the whole ideas of business to customers in a single picture. Customer make their decision in the first third of a second of their first sight, which probable the logo. A well designed logo has the potential to hook valuable customers. Company’s logo is only thing which imprint first impression of the company on customers. It’s always as remarkable as a pinch of light in the dark.


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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Project a professional image
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Your logo and banner reflects your professionalism in business. A style of logo and designs show the idea of the business as same as banner on the behalf of the organizer and leaves a remark of a professional organization. A fully conceptualized logo is prepared by turning a concept into a visual aspect such as word mark, pictorial mark and letter mark. Word mark consisted words to create logo as well as letter mark consist letter and pictorial consist pictures.
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>

                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "40vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/professional.png" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "37vh" }, width: { xs: "98%", lg: "150%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/world-map.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "auto" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Market your brand across the world
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>When your business expand and you want to enhance the market demand of the company, start approaching different media fields from offline to online market, from exhibition to trade shows from free gifts to corporate giveaways. All these modes contain logo of your company which can be in different size, color and layout as per the demands. You have to get ready with one iconic image which can be tailored in every aspects and can be used anywhere to promote your brand virtually on any surface.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to build Brand Identity
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Designing a good logo and banner is essential for any business to initiate a branding. Logo is not brand but it plays an important role to build a brand identity of a company for its viewer and keeper. It’s an iconic pictorial characterization of any brand which people can easily identify.
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>

                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "32vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/graphicbrand.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>





        </>
    )
}

export default LogoBanner
