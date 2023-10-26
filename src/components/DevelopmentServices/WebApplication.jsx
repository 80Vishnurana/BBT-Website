import React from 'react'
import { Box, Grid, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'

function WebApplication() {
    const heading = "Development Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 10, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "35px" } }} >
                            Web Application Development
                            <hr style={{ width: "33rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>

                            2.1. Web Application Development The era of internet demands everything online whether it’s you or your business. Using web application for your organization helps you to reach anywhere in a fraction of second and also an easiest way to target numerous clientele and customers at one time.
                            We develop web applications to meet the business demands of our clients and established a proper communication channel between potential customers and the organization. Our skilled and well accustomed Web Application developers work according to the latest market trends and never let down the expectations of our clients. We choose those designs and colors for the website which reflect the whole purpose of the business along with looks Edgy, Modern, Satirical and Professional too. We create a flawless welcoming environment for the user of your website and let them meet their outstanding experience, so that they will explore more.
                            In the era of internet, every business should have an online portal or website to explore the advantages of online Marketing.</Typography>


                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 13 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "350vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="../public/webapplication.jpg" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>


            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex" }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Why Choose Web Application Development for your business:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, backgroundColor: "rgb(236, 240, 247)", py: 12 }}>
                <Box sx={{ height: "52vh", width: "120%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/webmaintenance.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>


                <Box>
                    <Box sx={{ ml: 5 }}  >

                        <Paper sx={{ height: "52vh", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy Maintenance
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>You can exclude the requirement to perform updates on each users PCs, if you have web based software application system. Maintaining and updating can be done directly on to server and updates can be deployed to user’s computer.
                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Simple customizable and scalable
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Web Application Development made accuracy in business needs. It’s fully adaptable and functional with your business to develop. By customizing your web application incorporate your own marking and having a peculiar user consent. By having significant like highlights and capacities you can decrease preparing time and can include usefulness in your developed web application.
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

                        <Paper sx={{ height: "auto", borderRadius: "1rem", p: 2, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Cross Platform Capabilities
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Unlike the traditional software application, web application can be accessed by user, nonchalant of operating system such as windows, Mac etc. Users sometimes faces issues with software compatibility, even after having variety of internet browser available these days like, Internet explorer, Bing, Firefox etc.
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
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Web application development is cheaper than any other application development. It consist of creating several links between the app and an URL. It necessitate a higher cost for developing a native or an interpreted app but it also get succeed far greater.
                                    </Typography>

                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
                <Box sx={{ height: "58vh", width: "90%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/websave.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>


            {/* .................................................... */}

            <Box display={"flex"} sx={{
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 12
            }}>
                <Box sx={{ height: "45vh", width: "80%" }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/webass.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: 5 }}>
                        <Paper sx={{ height: "45vh", borderRadius: "1rem", p: 2, boxShadow: 4 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to Access
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Web application does not need to be downloaded and installed by App store or Google Play Store to use. This is a direct link to open and use on any internet browser which also a money saving benefit to have a direct link to surf or use.
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

export default WebApplication
