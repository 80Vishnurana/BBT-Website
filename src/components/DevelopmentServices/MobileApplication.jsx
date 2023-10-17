import React from 'react'
import Heading from '../Heading/Heading'

import { Box, Paper, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
const MobileApplication = () => {
    const heading = "Development"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Mobile Application Development
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Apart from food, shelter & job, Mobile is another essential thing in these days for every human which let you handle all those time consuming work in less time through some mobile applications. The creation of a Mobile application is more likely to the traditional software development. The software intend to utilize feature and hardware of the mobile. Modern smartphones are dressed with many other feature such as Bluetooth, GPS, NFC, Camera, etc. they all can be useful in virtual reality, barcode scanning and many more but mobile applications should be more accessible to utilize the full range of smartphones, its sounds easy but not. Mobile application development eases more of your daily chores through your mobile phone. In Blue Brain Technologies, we provide a software application that run in a mobile device, and a typical mobile utilize a network connection to work with remote computing resource. The mobile App development process involves creating installable software bundle like code, binary, assets etc and also implanting backend service such as data access with an API, then at last testing the application on target device.</Typography>


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

                    There are two types of Mobile Application Development:
                </Typography></Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>

                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "auto", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    {/* <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" /> */}
                                    <h2 style={{ backgroundColor: "blue", borderRadius: "30%", color: 'white', padding: "5px 10px 5px 10px" }}> 1</h2>
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Android App Development
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Android Apps are the most growing over the usual public like wildlife. With its fast growing operating system for Smartphone made it more favorable. It’s many sided, user affable Apps, Flexibility and pocket friendly aspects add a more advantages to buyers, which increase the demands of Android App Development. Our team of technically sounds and experts in android Apps has the required skills & ample of knowledge to develop a best user friendly Application for mobile. The demand for android App development grew through its robust offering with many new Android devices. That’s why it’s competing Apple and other smartphone operating system on a wide arch.

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
                py: { xs: 8, lg: 12 }
            }}>

                <Box sx={{ mr: 5 }}  >

                    <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                        <Typography>
                            <img height="40px" width="40px" src="../public/hand.png" alt="" />
                        </Typography>
                        <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>


                            Why go with Android Application Development:
                        </Typography>
                    </Box>
                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "85vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 }, pr: { xs: 1, lg: 3 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Cost Effective
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Android provides its software Development Kit to the developer community freely which minimize the cost of development and licensing.
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Attractive
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Android SDK is based on Open source which makes it open for interacting with the community for the upcoming expansion of the Android Mobile Application Development. This attract the handset manufacturer and wireless operator to develop fast and better opportunities to developer to earn more.
                                </Typography>

                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Integrated
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Android Application platform allows background processors to help in integrate the applications. Through Android App you can integrate and tweak the mobile app according to your business need.
                                </Typography>

                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Multiple Sales Channel
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>Android App development services have multiple sales channel and can be deployed in different ways. It allows to use third party application marketplace and also enable to form your own sales & distribution channel.
                                </Typography>

                            </Box>


                        </Box>
                    </Paper>
                </Box>

            </Box>

            <Box display={"flex"} sx={{ px: { xs: 2, lg: 12 }, py: { xs: 8, lg: 12 }, flexDirection: { xs: "column", lg: "row" }, backgroundColor: "rgb(236, 240, 247)", }}>

                <Box  >
                    <Box sx={{ ml: { xs: 1, lg: 5 }, mt: { xs: 3, lg: 0 }, }}  >

                        <Paper sx={{ height: { xs: "auto", lg: "auto", }, borderRadius: "1rem", py: { xs: 5, lg: 2 }, boxShadow: 4 }}>

                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    {/* <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" /> */}
                                    <h3 style={{ backgroundColor: "blue", borderRadius: "30%", color: 'white', padding: "5px 10px 5px 10px" }}> 2</h3>
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>IOS App Development
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> The demand of iPhone device is growing up scale as this is judge to be the device for elite. iPhone apps are to be improved with the right features and technology to make an impact on the customer’s buying habit.
                                        Blue Brain Technologies is the most reliable and secure platform to invest in IOS App development solution. The application for iPhone App developed by us are highly scalable, robust and of immense utility to allow advance business for optimal productivity. Here, we have a bunch of experience IOS app developers and in-depth technical expertise in mobile domain for developing business centric iPhone Applications.



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
                py: { xs: 8, lg: 2 }, pb: 10
            }}>

                <Box sx={{ mr: 5, pb: 10 }}  >

                    <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                        <Typography>
                            {/* <img height="40px" width="40px" src="../public/hand.png" alt="" /> */}
                        </Typography>
                        <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                            Why go with IOS Application Development:
                        </Typography>
                    </Box>
                    <Paper sx={{ height: "auto", width: { xs: "90vw", lg: "85vw" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: { xs: 4 }, pr: { xs: 1, lg: 3 } }}>

                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                {/* <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" /> */}
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Great User Experience
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> IOS App development reflects a happy user. A flawless software and tremendous customer support makes it more demanding in market. There are other operating system which is lacking with many app to control and function properly, but in IOS System each and every IOS apps work fluidly and providing great user experience and fulfill the most desired need of any business.
                                </Typography>

                            </Box>
                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Demanding
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>IOS based phones are more demanding for business purpose because it give a touch of royalty and also have a fluent accessibility for every applications. iPhone has always been the first choice for tech-savvy audience.
                                </Typography>

                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>International Market Gateway
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>IPhone have the popularity in almost every developed country and having a company enable the IOS App Development system increase the chances to enter in international market.
                                </Typography>

                            </Box>


                        </Box>
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 600 }}>Security
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>While choosing anything for your company, people always concerned about the security. IOS provide a strong shield to protect from viruses and malwares, make itself a perfect choice for any business having Application development.
                                </Typography>

                            </Box>


                        </Box>
                    </Paper>
                </Box>

            </Box>

        </>
    )
}

export default MobileApplication
