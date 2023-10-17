import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const Digital = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "40px" } }} >
                            Digital Strategy
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />

                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>

                            Digital era brought a time where every business are changing their focus from traditional marketing to digital platform but to grow better business online, a comprehensive strategy is much needed. Digital strategy is new norm tactics for online marketing platform. It establishes an overall direction that a business will follow digitally. To conquer the digital vision, Digital strategy outlines the assets, channel, platform and tool to achieve the objective and deliver result in mapped timeline.
                            At Blue Brain Technologies, we value your money and invest it in a perfect place with a precise planning. We start our work with research to allocate your target audience, review trendy keywords and potential disruptors to avoid clashing with your competitor. We analyze research then set vision and next to create your website strategy. Here, we compile all your needs, demands and queries to complete our digital strategy for your digital platform.</Typography>


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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Business Consulting
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>TNo matter how much your organization is established and how hard it grows to get succeed, there may come a time when you need to reconsider and take an outside help...
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

export default Digital
