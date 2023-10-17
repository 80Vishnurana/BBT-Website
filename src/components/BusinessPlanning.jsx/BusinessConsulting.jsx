import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'

const BusinessConsulting = () => {
    const heading = " Business & Planning Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, width: { xs: "100%", lg: "70%" } }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >

                            Business Consulting
                            <hr style={{ width: "20rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            No matter how much your organization is established and how hard it grows to get succeed, there may come a time when you need to reconsider and take an outside help for betterment of your company. Business consultants play an essential role in planning, strategy making and problem solving aspects. A Business Consultant also provides guidance and information to executives and management members of any organization to master their business skills to update their marketing strategy.
                            As provider of Business Consultant, Blue Brain Technologies converts problems in opportunities to their client. As we all know business consultants are called professional advisor, we advice in each and every section in term of uplift your business. Besides advice we provide constructive criticism, train and teach the employees within client’s company and even do some unpleasant work like eliminating staffs who contribute less to organization. If your company is repeatedly losing its rank in recent years, reach us to get a better solution in term of Business Consultant.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80%", md: "100%", lg: "40%" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>

                    Get the advantages of Business consulting from the experts.
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "58vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "58vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Increase Business Profits
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Professional business consultants have years of experience in assisting many companies and help them to reach out to their set goal without hustle and worry. A Business consultant very well know how to increase profit and from where to cut the cost. They help companies to pinpoint expenses that can be reduced successfully and diminishing monthly overheads and increase the profit margin.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Gain Expert Opinion
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Sometime a businessman could not find the existing problem within their company, therefore they hire Business consultant to be a third eye for them. A business consultant gives unbiased opinion about company’s situation and also the solution to solve the problem, if it’s there. With some expert skills, business consultant quickly spot the challenges that may be hold back your company’s growth. Gain an expert opinion for your company betterment is the best choice and also an essential change that has to be done.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                // backgroundColor: "rgb(236, 240, 247)",
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "60vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Implement New Business Skills
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>One person knows everything is not possible. You probably have Business Empire and have ample of knowledge about business and everything goes according to it but there is something which cannot be detected by you. This is the place where you consult a business consultant. They specialize in business strategies, trends and methodologies and help you to focus on the business while they are doing their work. They implement new trends and skill to improve business quality. It can be done for a short & long term both.
                                </Typography>

                            </Box>
                        </Box>

                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "40vh" }, width: { xs: "98%", lg: "100%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "35vh" }, width: { xs: "98%", lg: "100%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "35vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Develop Marketing Strategy
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Whether you need a plan to start your company or a plan based on marketing strategy to target your audience in a productive way, a business consultant is the best solution for your issues. By hiring a business consultant for your company, you allow your system to work in a professional way with strategic planning. They decide all the marketing strategies to get and off course when and how meanwhile they take care of your marketing budgets also.
                                    </Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Box>
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                // backgroundColor: "rgb(236, 240, 247)",
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "60vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>24/7 Availability
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>A core trade for business consultant is to help in growing other’s business. They don’t have to worry about other work like hiring or firing employees, managing supplies equipment, trade products or deadline. They have one work to do that is to help other businessman in their business and improve their operation in order to run more efficiently and better result. Business consultant available every hour and day in a week to help you out with your major business issues.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "37vh" }, width: { xs: "98%", lg: "100%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>



        </>
    )
}

export default BusinessConsulting
