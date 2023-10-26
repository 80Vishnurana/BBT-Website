import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const SchoolERP = () => {
    const heading = "School ERP"
    const subheading = " Our Product"
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />

            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 3 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, }}>

                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            A School ERP, Enterprise Resource Planning is a technology driven service that maintain and manage all the administrative task of a school management in an effective manner. School ERP replaces the traditional way of work where all the maintenance of administrative departments is taken by a specific person with pen and paper and now with the new age technology, where everything work can do with just a click. We the team of Blue Brain Technologies serves the Industry of Education with School ERP software that helps school management right from maintain attendance to online fee payment along with all the intricate and time-taking administrative tasks. Through School ERP every school management person like; Principal, Teachers, management staff and also parents can easily access any information anytime. ERP software is equipped with modern technologies such as cloud computing, machine learning etc. to help school to meet their goal and aspirants and also determine easy & fast data management. It also ensures security and recovery of all data. School ERP software is one-stop solution to managing the daily administrative task so that a school can function in a better way with these benefits.</Typography>

                    </Box>

                </Box>
            </Box>
            <Box sx={{ height: "auto", width: "100%", py: { xs: 8, lg: 12 }, px: { xs: 2, md: 3, lg: 25, }, }}>
                <Box sx={{ height: { xs: "30vh", lg: "70vh" }, width: "100%", pl: { xs: 0, lg: 3 } }}>
                    <img src="../../public/school.jpg" alt="" height="100%" width="100%" />
                </Box>
                <Box sx={{ px: { xs: 0, md: 1, lg: 3 }, py: { xs: 1, md: 2, lg: 4 } }}>
                    <Typography variant='body2' sx={{ fontWeight: "bold", fontSize: { xs: "20px", lg: "30px" }, pt: "20px", fontFamily: "sans-serif" }}>
                        These are some School ERP Benefits:
                    </Typography>
                    <Paper sx={{ p: 3, mt: 5, boxShadow: "3px 3px 8px gray", marginBottom: "2rem" }}>
                        <Typography variant='body2' sx={{ fontSize: "20px", py: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>1</span> Paperless Administrative work.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>2</span> Technology Integrated School management.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>3</span> Information Accessibility to all school management staff and parents.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", paddingLeft: "10px", marginRight: "5px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>4</span> Automation increase Productivity through saving time.
                        </Typography>
                        <Typography variant='body2' sx={{ fontSize: "20px", pb: "30px" }}>
                            <span style={{ backgroundColor: "darkblue", marginRight: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px", color: "white", height: "20px" }}>5</span>No bound of time and place in cloud-based ERP System
                        </Typography>
                    </Paper>
                </Box>
            </Box>




        </>
    )
}

export default SchoolERP
