import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const Resturant = () => {
    const heading = " Restaurant ERP"
    const subheading = " Our Product"
    return (
        <>



            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            Restaurant industry with a never replenishing demands and always in lime light are the first priority for many business enthusiasts, but after entering the tunnel you will face many twist and turn to maintain the same aura, same taste and branding throughout the region. These all complexes tackled by ERP software solution, an ultimate savior. ERP software is a partly cloud based service that let you record, manage and access all you crucial data. In restaurants, ERP helps you to maintain entire Inventory and keep you update about your low stock with timely notification, keeping you and your business always ready to fly high. Blue Brain Technologies has the flexibility and scalability to meet their Client’s business needs and provide them world’s best Restaurant ERP service. We provide easy to use business management tool that can be customized according to the need of clients for an effective and optimize business performance. Our smart business module performs your entire nominal task and helps you to provide your customers excellent services.</Typography>

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
                        These are some Restaurant ERP Benefits

                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Automation in purchase order and inventory control management.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Efficiently manage General Ledger, assets and finance.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Easy Staff Management procedure.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span> Business intelligence and Data visualization.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>Theft prevention through cash flow automation
                        </Typography>
                    </Paper>
                </Box>
            </Box>





        </>
    )
}

export default Resturant
