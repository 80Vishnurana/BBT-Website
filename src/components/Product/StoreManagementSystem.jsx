import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const StoreManagementSystem = () => {
    const heading = " Store Management System"
    const subheading = " Our Product"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            Store management is a big messy work around a manager to look out. There is several works to handle properly at the same time which can’t be possible to do for a person, or if they will do it takes a lot of time which is not good for your business. Store management or inventory management system is a key to track all your inventories movement in warehouse or store by items and serial numbers include manage the employees & revenue data up to date. The Store management system is driven by technology which put everything in an efficient manner to avoid misconception and miscount in money or inventory.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "18px", fontFamily: "sans-serif", }}>
                            We Blue Brain Technologies team approaches Store Management procedures to maintain their inventory system and give our clients a smooth running retail business. Our software developer knows that a store department is an element of material department, has as interface with user department and its day by day operations</Typography>

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

                        These are some Store Management System Benefits
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Achieve efficiency and productivity in operation.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Minimize inventory cost and maximize Sales & profit.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Manage cash flow & integrate your entire business.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span>Automation of Manual task.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>Maintain Customer happiness.
                        </Typography>
                    </Paper>
                </Box>
            </Box>




        </>
    )
}

export default StoreManagementSystem
