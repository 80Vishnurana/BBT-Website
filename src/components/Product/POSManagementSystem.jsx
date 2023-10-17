import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const POSManagementSystem = () => {
    const heading = " POS Management System"
    const subheading = " Our Product"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            POS (Point of Sale) is a transaction that paid by a buyer to seller during purchase of something or having any service in return. POS platform is a computer based cash register where every transaction has a record. POS management system allows the business owner having two or more business at different location. It appropriately gives access to track inventory at each business without physical appearance. It gives a worry-less environment form employee theft or pricing inconsistency between both locations. Mostly POS management system is used in retail business to maintain inventory management and tracking them to avoid hustle in business. Blue Brain Technologies is upto POS management system to avail benefits to their Retail business clients along with Restaurant Business enthusiast and help them to track their business remotely from where they want with some extra benefits.</Typography>

                    </Box>
                    <Box pl={1} sx={{ height: { xs: "320px", md: "200px", lg: "250px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ height: "auto", width: "100%", py: { xs: 8, lg: 12 }, px: { xs: 2, md: 3, lg: 25, }, }}>
                <Box sx={{ height: "50vh", width: "100%", pl: { xs: 0, lg: 3 } }}>
                    <img src="../../public/laptop.jpg" alt="" height="100%" width="100%" />
                </Box>
                <Box sx={{ px: { xs: 0, md: 1, lg: 3 }, py: { xs: 1, md: 2, lg: 4 } }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold", fontSize: { xs: "20px", lg: "30px" }, pt: "20px", fontFamily: "sans-serif" }}>

                        These are some POS Benefits
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Increased Efficiency of work.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span>Expanded Payment Capabilities.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span>Improves accuracy throughout entire operation, with real-time data.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span>Automatic Real-Time Inventory Management.
                        </Typography>

                    </Paper>
                </Box>
            </Box>




        </>
    )
}

export default POSManagementSystem
