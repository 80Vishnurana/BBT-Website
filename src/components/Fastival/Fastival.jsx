import { Box, Grid, Paper, Typography } from '@mui/material'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Swiper from 'swiper';
import 'swiper/css';

import Carousel from 'react-bootstrap/Carousel';

import React, { useState } from 'react'

import styled from '@emotion/styled';

const Paperstyle = styled(Paper)`    
         :hover {
            // box-Shadow: 4; 
          }    
`
const Fastival = () => {
    // const swiper = new Swiper(...);

    const [counterStart, setCounterStart] = useState(false);


    return (
        <>

            <ScrollTrigger onEnter={() => setCounterStart(true)} onExit={() => setCounterStart(false)} >

                <Grid container direction={"row"} sx={{ width: "100%", backgroundColor: "whitesmoke", height: { xs: "auto", md: "auto", lg: "24vh" }, mt: 10, px: { xs: 0, lg: 10 } }}>
                    <Grid xs={12} md={6} lg={3}>
                        <Box sx={{ height: "140px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ pr: 2 }}>
                                <img src="../public/nots.png" alt="" height={"38px"} width={"38px"} />
                            </Box>
                            <Box >
                                <Typography variant='h4' >
                                    {
                                        counterStart && <CountUp start={0} end={30} duration={2} delay={0} />
                                    }
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }}>Projects Completed</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>
                        <Box sx={{ backgroundColor: "whitesmoke", height: "140px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ pr: 2 }}>
                                <img src="../public/face.png" alt="" height={"38px"} width={"40px"} style={{ color: "red" }} />
                            </Box>
                            <Box >
                                <Typography variant='h4' >
                                    {
                                        counterStart && <CountUp start={0} end={45} duration={2} delay={0} />
                                    }
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }}>Team Members</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>
                        <Box sx={{ backgroundColor: "whitesmoke", height: "140px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ pr: 2 }}>
                                <img src="../public/team.png" alt="" height={"45px"} width={"45px"} />

                            </Box>
                            <Box >
                                <Typography variant='h4' >
                                    {
                                        counterStart && <CountUp start={0} end={175} duration={2} delay={0} />
                                    }
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: "16px", fontWeight: "400" }} >Happy Customers</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} md={6} lg={3}>
                        <Box sx={{ backgroundColor: "whitesmoke", height: "140px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Box sx={{ pr: 2 }}>
                                <img src="../public/coffee.png" alt="" height={"40px"} width={"40px"} />

                            </Box>
                            <Box >
                                <Typography variant='h4' >
                                    {
                                        counterStart && <CountUp start={0} end={11} duration={2} delay={0} />
                                    }
                                </Typography>
                                <Typography variant='h6' sx={{ fontSize: "14px", fontWeight: "400" }} >Years Of Experience</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ScrollTrigger>
            {/* 
            <Carousel style={{ width: "100%", }}>
                <Carousel.Item className='carouselimg' interval={1000}>

                    <Box sx={{ height: "30rem", width: "100%", bgcolor: "black" }}>
                    </Box>
                    <Carousel.Caption>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ border: "2px solid red", width: "50%", height: "25rem" }}>
                                <img src="../public/Thumbicon.png" alt="" />
                                <Typography variant='body2' textAlign={"left"} sx={{ fontFamily: "cursive", py: 4 }}> The organization is very professional, talented and helpful in their work on our web portal. The people responsible for our account go to great lengths to not only solve problems, but also suggest improvements beyond the scope of the task.</Typography>
                                <img src="../public/men.png" alt="" />
                                <Typography variant='h4' sx={{ pt: 4 }}>
                                    Saurabh Mishra
                                </Typography>
                            </Box>
                            <Box sx={{ border: "2px solid white", width: "50%" }}>
                            </Box>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselimg' interval={500}>
                    <Box sx={{ height: "30rem", width: "100%", bgcolor: "black" }}>
                    </Box>
                    <Carousel.Caption>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ border: "2px solid red", width: "50%", height: "25rem" }}>
                                <img src="../public/Thumbicon.png" alt="" />
                                <Typography variant='body2' textAlign={"left"} sx={{ fontFamily: "cursive", py: 4 }}> The organization is very professional, talented and helpful in their work on our web portal. The people responsible for our account go to great lengths to not only solve problems, but also suggest improvements beyond the scope of the task.</Typography>
                                <img src="../public/men.png" alt="" />
                                <Typography variant='h4' sx={{ pt: 4 }}>
                                    Saurabh Mishra
                                </Typography>
                            </Box>
                            <Box sx={{ border: "2px solid white", width: "50%" }}>
                            </Box>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselimg'>
                    <Box sx={{ height: "30rem", width: "100%", bgcolor: "black" }}>
                    </Box>
                    <Carousel.Caption>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ border: "2px solid red", width: "50%", height: "25rem" }}>
                                <img src="../public/Thumbicon.png" alt="" />
                                <Typography variant='body2' textAlign={"left"} sx={{ fontFamily: "cursive", py: 4 }}> The organization is very professional, talented and helpful in their work on our web portal. The people responsible for our account go to great lengths to not only solve problems, but also suggest improvements beyond the scope of the task.</Typography>
                                <img src="../public/men.png" alt="" />
                                <Typography variant='h4' sx={{ pt: 4 }}>
                                    Saurabh Mishra
                                </Typography>
                            </Box>
                            <Box sx={{ border: "2px solid white", width: "50%" }}>
                            </Box>
                        </Box>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

            <Box>
                <Box sx={{ px: { xs: 4, lg: 12 } }}>
                    <Typography variant='h4' pt={10} pb={1}>
                        Latest News and Events
                    </Typography>
                    <Typography >
                        Latest Newsand Events updates,special reports, Videos & Pictures on Events
                    </Typography>
                </Box>
                <Grid container justifyContent={"flex-start"} sx={{ px: { xs: 1, lg: 10 } }} >
                    <Grid xs={12} md={6} lg={4} sx={{ mt: 6, mb: 2 }}  >

                        <Paperstyle sx={{ m: 2, width: "21rem", height: "75vh", boxShadow: 4, ":hover": { boxShadow: 10 } }}>
                            <Box                                >
                                <img height={"230px"}
                                    width={"100%"} src="../public/deewali.jpg" alt="" />

                            </Box>
                            <Box p={3}>
                                <Typography variant='h4' fontSize={"28px"} fontWeight={600}>
                                    Deepawali

                                </Typography>
                                <Typography pt={2} fontFamily={"serif"}>
                                    Hindu Lunisolar month Kartika (between mid-October and mid-November).One of the most popular festivals of Hinduism, Diwali symbolizes the spiritual "victory of light over darkness, good over evil, and knowledge over ignorance".
                                </Typography>

                            </Box>
                        </Paperstyle>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                        <Paperstyle sx={{ m: 2, width: "21rem", height: "75vh", boxShadow: 4, ":hover": { boxShadow: 10 } }}>
                            <Box  >
                                <img height={"230px"} width={"100%"} src="../public/lohri2.jpg" alt="" />

                            </Box>
                            <Box p={3}>
                                <Typography variant='h4' fontSize={"28px"} fontWeight={600}>
                                    Lohri
                                </Typography>
                                <Typography pt={2} fontFamily={"serif"}>
                                    Lohri is a popular winter Punjabi folk festival, celebrated primarily by Sikhs and Hindus from the Punjab region in the northern part of the Indian subcontinent,celebrated on 13 January of every year.
                                </Typography>

                            </Box>
                        </Paperstyle>
                    </Grid>
                    <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                        <Paperstyle sx={{ m: 2, width: "21rem", height: "75vh", boxShadow: 4, ":hover": { boxShadow: 10 } }}>
                            <Box >
                                <img height={"230px"} width={"100%"} src="../public/mery.gif" alt="" />

                            </Box>
                            <Box p={3}>
                                <Typography variant='h4' fontSize={"28px"} fontWeight={600}>

                                    Merry Christmas
                                </Typography>
                                <Typography pt={2} fontFamily={"serif"}>
                                    Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25 as a religious and cultural celebration among billions of people around the world.
                                </Typography>

                            </Box>
                        </Paperstyle>
                    </Grid>
                </Grid>
            </Box>




        </>
    )
}

export default Fastival

