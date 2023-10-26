import React from 'react'
import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'

const UiuxDesign = () => {
    const heading = "Logo & Banner Designing"
    const subheading = " Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, width: "60vw" }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            UI/UX Design
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            UI (User Interface) is a process of using the presentation and interactivity in web and mobile application and on the other hand UX (User Experience) development is a procedure to improve the overall experience of user while using the web or mobile application. Both designing process is a significant part of every web development in today’s era. This particular feature has ability to navigate the predetermined target in most efficient way to user. UI/UX designing service, grab consumers attention and generate more revenue from company’s products and become more essential for business success. Here at Blue Brain Technologies, we work with various new aspects to come up with some really exciting work like: latest design trends, business requirements, security technology etc. With the help of advanced designing tools, our experienced designers create eye-catching designs, which provide almost everything about your products and services to attract more customers. Our creative designers easily frame the layout for mobile and web application with the help of advance prototyping tools. We develop product specific application for various device and screen type like IOS and Android in pocket friendly manner along with full customer satisfaction.</Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 13 }, height: { xs: "320px", md: "400px", lg: "500px" }, width: { xs: "80vw", md: "100vw", lg: "40vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="ui-ux.jpg" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>

                    UI/UX Designs benefits you to upgrade the traffic on website and many more:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>
                <Box sx={{ height: { xs: "30vh", lg: "58vh" }, width: { xs: "100%", lg: "125%" } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/uiux.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "58vh", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy readable contentg
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>User interface (UI) make content easy to read, because it makes easy to pick the keyword and content highlighted. UI make the website recognizable to audience with clean and visible text and also optimized by search engine like Google, MSN, Bing etc.

                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Elucidates the vision
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>When you created a website or started a business, there is always a vision and goal to reach out. The user interface and user experience helps to configure your vision to reach the aim. The UI generate the use of images to secure the content and message of site. On the other hand UX assist in enhancing the interaction between website holder and website user.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Aids in Navigation
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>The UI design in website encompasses action such as fast loading speeds, swipes and jump from one to another page without hassle. These actions are the sign of good interface that reduce the time taking process of navigation in website and peruse the content.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Use of CTA tool
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>CTA (Call To Action) designed to prompt an immediate response on website that can be incorporated into sales, advertising or webpages. It compile audience to lead in a specific way to communicate or purchase product/services. It grows audience & increase sales. In other words it leads the audience to the stage of decision making.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/table-looking.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "64vh" }, width: { xs: "98%", lg: "150%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "64vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Drag Attention of the Reader
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>There are thousands of websites created on a daily basis, and in the crowd of thousands your site need to be eye catching to catch audience’s attention. The UI/UX design scrutinize theme color, designs, fonts, images, layout and videos of your website to separate from others. It gives a wow factor to the website content without getting deep involvement.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", px: 1, mt: 5 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Reduction in Bounce Rate
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>A professional responsive website has lower bounce rate. A website should be engaging enough to hold up visitors to check every pages of website which reduce the bounce rate.
                                        We offer you a website with engaging data and content to hold up visitors. Visitor will be inclined to click and read every section of your website and get aware of the service that you’ve got to offer
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

export default UiuxDesign
