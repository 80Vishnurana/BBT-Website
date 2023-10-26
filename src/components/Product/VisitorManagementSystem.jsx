import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'
const VisitorManagementSystem = () => {
    const heading = " Visitors Management Systemsb"
    const subheading = " Our Product"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, width: { xs: "100%", md: "60vw", lg: "100%" }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, width: { xs: "100%", md: "60vw", lg: "70%" }, pb: 2, }}>
                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            Can you answer this that how many visitors visit your office today or yesterday or a month ago? You cannot memorize all these things or if you have h register or any excel sheet to record it that an old thing to do it right.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                            Visitor Management System is a process to record all those visitors’ details that entered your building or office premises today, yesterday or e years ago. A visitor relates to those who is not a regular full-time employee in your office, but has come for any requirements such as a customer, a delivery boy, an applicant or any consultant.
                        </Typography>
                        <Typography variant="body1" sx={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                            While recording the visitors visit you will provide your employees a safe place to work which is utmost important. Through visitor management system you will get several benefits to safeguard your surroundings.
                        </Typography>
                    </Box>
                    <Box sx={{ height: { xs: "320px", md: "200px", lg: "400px" }, width: { xs: "80%", md: "100%", lg: "50%" } }}><img style={{ boxShadow: "10px 10px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box >
            <Box sx={{ height: "auto", width: "100%", py: { xs: 8, lg: 12 }, px: { xs: 2, md: 3, lg: 25, }, }}>
                <Box sx={{ height: { xs: "40vh", lg: "70vh" }, width: "100%", pl: { xs: 0, lg: 3 } }}>
                    <img style={{ boxShadow: "5px 5px 5px gray" }} src="../../public/Visitors.jpg" alt="" height="100%" width="100%" />
                </Box>
                <Box sx={{ px: { xs: 0, md: 1, lg: 3 }, py: { xs: 1, md: 2, lg: 4 } }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold", fontSize: { xs: "20px", lg: "30px" }, pt: "20px", fontFamily: "sans-serif" }}>
                        These are some Visitor Management System Benefits
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Track your guest from their arrival to their departure.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Limit their visits around the office.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span>Control their length of stay and track them from publically background data.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span>Minimize the risk the Intruders and workplace violence.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>Protect your facilities and employees.
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    )
}
export default VisitorManagementSystem
