import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const WebDesigningTraning = () => {
    const heading = " IT Training Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            Web Training
                            <hr style={{ width: "14rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            Web Development is simply how website are built, implemented and displayed on internet, and web developers are the programmers who use programming language and write codes in website to instruct how to work and when to work. In other words, programmers are the script writer and director of the website.</Typography>
                        <Typography variant="body1" sx={{ py: 2 }}>
                            Web development has various aspects such as networking security, web content development, web designing, web publishing, database management and many more. The application of Document Object Mode (DOM), HTML, CSS and JavaScript are the basic objects which make the website look better and work well.
                        </Typography>
                        <Typography variant="body1" sx={{ py: 2 }}>
                            It’s a highly paid job to do where you will enhance your creativity level while, developing your own ideas in websites. It’s a fun job if you get use to it and most amazing this is that you can work from anywhere with team or without team.
                        </Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "450px" }, width: { xs: "80vw", md: "100vw", lg: "100vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>

                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Through Web Development Training, we provide you various aspects to explore:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Improve Creativity
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Website development is a work related to arts and creativity, that is the essential skill for the web developer. During web development training, trainee learns to mold their own creativity and come up with fresh & distinctive ideas with their imagination. Web development will also enhance the skills in trainee to re-use the previous idea with the collaboration of new touch.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Work Remotely
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> One of the biggest per of this designation is whether you work for a company or work solo as a freelancer, location doesn’t matter. You can do the job from anywhere for your concern company. Only a laptop, a high speed internet connection and a dedicated mind to work till client satisfaction, play an essential role for the result oriented work. You can do your work even in any worst situation going out there. You get your work with the comfort of your home.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>High Salaried Job
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Web Developer is one of the most finest designation with a perk of prestigious place in office, comfort zoned work and high paying salary but creating an eye catching website where every eyes get stucked with and emphasize client to stay more on the website. These responsibilities along with all those amenities make this profile the most lucrative jobs in the market.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>High in Demand
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Due to the new technology in the market, most of the companies are eagerly changing their previous existing design with the new one by using new technology. This will increase the demand of the website developer in market. As the human leaving with the internet here the up-gradation works never ends and website developer career will rise and shine forever.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "62vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>



        </>
    )
}

export default WebDesigningTraning
