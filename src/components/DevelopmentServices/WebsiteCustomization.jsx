import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const WebsiteCustomization = () => {
    const heading = "Graphic Design"
    const subheading = "Graphic Design"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "40px" } }} >
                            Graphic Design
                            <hr style={{ width: "20rem" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>

                            Website, business and brands are not only about content words but work of art and graphics also, which make it more attractive and pleasant. Graphic designing is an integral part of creating websites. A creative team of graphic designing is bound to be creative as per client’s demands. First, we work on visual structure of web and mobile application than further work till final look and work till satisfaction. Graphics are essential to understand the work of websites more efficiently and work more effectively to deliver a true spirit of business through their creativity. We build up any kind of graphics that speak loudly than words through digital development. We use Colorful & high-resolution images, illustrative graphics and impactful videos that engage more and more traffics on portal. These graphics can help adequate customers to approach easily and make products more understandable through images. The benefits you get from graphic designing are promptly effects on your revenue and crowd generated on your website.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "350vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>


            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex" }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Being a professional website designer, we whip up your company with several benefits:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, backgroundColor: "rgb(236, 240, 247)", py: 12 }}>
                <Box sx={{ height: "60vh", width: "120%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>


                <Box>
                    <Box sx={{ ml: 5 }}  >

                        <Paper sx={{ height: "60vh", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>First More attractive and attentive
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Graphic designing is not just an image it’s a piece of art which visualize the idea of business within website. A website with great work of graphic designing drag more attention from viewer and create authentic crowd. A good choice of color, font and pictures works together as a perfect blend to impress audience.
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>First Increase viewer interaction
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>As mentioned before, a good concept of graphic designing drag customer and make public authenticity faster. These attention increases the interaction between viewer and website holder which shows up the hike in business. Especially E-commerce and B2B buyers may take the advantages of a good designs of graphics.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            {/* ............... */}



            <Box display={"flex"} sx={{
                px: { xs: 2, lg: 12, },
                // backgroundColor: "rgb(236, 240, 247)",
                py: 12
            }}>



                <Box>
                    <Box sx={{ mr: 5 }}  >

                        <Paper sx={{ height: "70vh", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Strengthen the brand value
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Graphic designing helps to create a quickly recognizable face of an organization to keep up the brand value. Your company’s logo. Typeface, color, website theme and layout are those elements of graphic designing who helps to maintain the brand value of business among other competitors.
                                        <p>

                                            We pull all those elements togeth er in a way that will brand and convey your desired image of website.
                                        </p>
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Save money
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Investing money in a good website based on a perfect graphic designing is one time investment but long last instead of cheaper crowd source designing. Cheap and poorly designed graphics imparts low configured designs and logo that cannot be downloaded clearly and properly or may expensive in print due to improper color management and layout. It may cause delay in your production and have to redesigned may cost more money.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{ height: "70vh", width: "150%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>


            {/* .................................................... */}

            <Box display={"flex"} sx={{
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 12
            }}>
                <Box sx={{ height: "45vh", width: "150%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: 5 }}>
                        <Paper sx={{ height: "45vh", borderRadius: "1rem", p: 2, boxShadow: 4 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Better Graphic communication
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>To keep marketing efforts effective, companies have a few seconds to grab customer attention through graphic designing. Images are the perfect element to keep that attention for more few seconds. They have a power to communicate more convoluted easily and effectively than words. As well as improve the appeal to automated audience faster to optimize web ranking with selection of unique images.
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

export default WebsiteCustomization
