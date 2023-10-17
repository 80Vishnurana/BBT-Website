import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const Hospital = () => {
    const heading = " Hospital Management System"
    const subheading = " Our Product"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            There are several challenges a healthcare industries are facing for decades such as ageing global population, soaring cost of medicines and medical attention, growing regulatory pressure and demand for better services at lower cost from Patients as well as Government form Hospital Management.Blue Brain Technologies efficiently and seamlessly manages all the operations that stuck your growth and let you focus on the core projects to lead towards success.We take care of Care Management, Payer Logistic, Revenue Cycle management, Claim Processing, Billing or Payment and Eligibility Verification with our technology driven ideas.Every complex problem has one solution Blue Brain Technologies; we provide you best hospital management system with advance imagining technology and rule- based algorithm.</Typography>

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
                        These are some Hospital Management Benefits.
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Improve speed of service and treatment by increasing efficiency of back-end and front-end process.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Reduce cost and increase productivity by eliminating human errors.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Making patients information available at fingertip to care management staff.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span> Business intelligence and Data visualization.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>Automation of 24/7 Helpdesk with chat bots and voice assistance.
                        </Typography>
                    </Paper>
                </Box>
            </Box>







        </>
    )
}

export default Hospital
