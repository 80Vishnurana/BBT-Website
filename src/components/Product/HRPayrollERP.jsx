import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'


const HRPayrollERP = () => {
    const heading = "HR & Payroll ERP"
    const subheading = " Our Product"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            To grow a business, its entire operational activities and job roles need to be organized and to attain real time operational management, have to use a systematic application which assists all function and department to be co-ordinate with each other. Nowadays, most of the companies are using ERP system to manage all their internal as well as external operations and resource automatically. Employees are the first asset that complete the company and make every possible way to make things right towards success. To assist HR and Payroll system Blue Brain Technologies has developed a software system, which enabled with handling process from hiring and ends up with retirement of employees.

                            Our HR & Payroll ERP system can be enhanced with client’s requirement to add on some other information of their employees such as attendance & leave records. HR & Payroll ERP software is cloud hosted and web based which is easy and self service tool for employees, provide different benefits.</Typography>

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

                        These are some HR & Payroll Benefits
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Enhance information sharing of employees and collaboration.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Keep Employees records up-to-date.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Save time for more relevant tasks.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span> Technology driven attendance and leave tracking system.
                        </Typography>

                    </Paper>
                </Box>
            </Box>






        </>
    )
}

export default HRPayrollERP
