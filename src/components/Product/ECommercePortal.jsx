import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const ECommercePortal = () => {
    const heading = " E-Commerce Portal"
    const subheading = " Our Product"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, width: { xs: "100%", lg: "60%" }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            E-commerce is an online market place for buying or selling products from all across the world without visiting that place. E-commerce portal make our life much easier for both as it is a buyer or a seller.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "18px", fontFamily: "sans-serif", }}>

                            E-commerce management and maintenance system makes it helpful for business to manage an online retail presence and maintain it further. Our experts at Blue Brain Technologies take care of all day to day activities on the wall through our excellent E-commerce management system. While shopping online users always have different kind of requirement and to fulfill it, they inherently choose that portal which gives them best experience with affordable price. We keep it look fresh and attentive to shoppers to attract and shop their needs from. As a service provider we keep your website fresh with new graphics & features and update security on regular basis to site keep running smoothly. Our experts in E-commerce portals give you an edge to grow more and reach maximum customers. Apart from all these benefits they are some more:</Typography>

                    </Box>
                    <Box pl={1} sx={{ height: { xs: "320px", md: "200px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "40%" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: "auto", width: "100%", py: { xs: 8, lg: 12 }, px: { xs: 2, md: 3, lg: 25, }, }}>
                <Box sx={{ height: { xs: "40vh", lg: "70vh" }, width: "100%", pl: { xs: 0, lg: 3 } }}>
                    <img style={{ boxShadow: "5px 5px 5px gray" }} src="../../public/E-Commers.jpg" alt="" height="100%" width="100%" />
                </Box>
                <Box sx={{ px: { xs: 0, md: 1, lg: 3 }, py: { xs: 1, md: 2, lg: 4 } }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold", fontSize: { xs: "20px", lg: "30px" }, pt: "20px", fontFamily: "sans-serif" }}>

                        These are someE-commerce Benefits
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Keep updating your E-commerce Portal.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> 24/7 management support.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Add different types of filter to shop for buyers.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span>Easy and safe online payment along with Data security.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>Improve online customer service.
                        </Typography>
                    </Paper>
                </Box>
            </Box>




        </>
    )
}

export default ECommercePortal
