import React from 'react'
import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'

const Customization = () => {
    const heading = "Development"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Open Source Customization
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />

                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Open Source Customization combine with two terms Open source and Customization. Open Source is a framework where source code is accessible to the customer for integration and modification and in the other hand customization is accordance with the customer needs and demands. In Open Source Customization, we personalize the content management system (CMS) or scripts like Joomla, WordPress, phpBB, Mambo and many more to work according to our needs and preferences not as a whole itself. The CMS sites are open source but also generic and it work according to their nature and perspective, therefore we customize it in our way to control it appearance, feel and make them look in a desired manner. Open source Customization enhance flexibility and typically cut the cost half from budget. It reduce the development time as well. When it comes to handling bug, the matter is likely solve sooner than expected with the help of a large community involvement.</Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 3 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Why Open Source Customization is Important for your Organization:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Customize in your way
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Open Source customization the overall function in your own desired way. It beautify and enhance the pictorial section and make it more attractive and visible to grab attention of the viewer. The ability to customize open source platform not only allow businesses to tailor the software to their needs and requirements but also provide competitive advantages.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Integrated Management
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> Open source software uses technologies such as common information model and web based enterprises management, these type of high end technology enable you to integrate and combine server, application, services and workstation management. Open Source Customization will provide all of these benefits from Integrated Management.


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

                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "55vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Reduce Cost
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Open Source Customization helps you to reduce expenses. Cut the cost of license fee and maintenance fee by using Open Source Customized Software. The only cost you have to encounter is on documentation, media and support.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Ranked in Search engine
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Open source customization provide more alluring and accessible content and graphics which help website to rank in the hunting list of search engine such as Google, MSN, Yahoo & Bing. Open Source ensure the websites to display content continuous in all screen sizes.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "51vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "33vh" }, width: { xs: "98%", lg: "100%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "33vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Freedom & Flexibility
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Every business trial many different solution in order to find a perfect match for their requirement. Open source customization does not lock user in a single software, it gives them a freedom to find what they want. Freedom from proprietary software solution gives them full control over business and allow them to customize and apply it in their own way.
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

export default Customization
