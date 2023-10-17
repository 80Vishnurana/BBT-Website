import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import styled from '@emotion/styled';
import Heading from '../Heading/Heading';
import "../Home/Home.css"
const Paperstyle = styled(Paper)`    
         :hover {
            background-image: url(https://media.istockphoto.com/id/1623894588/photo/graphic-designer.jpg?s=1024x1024&w=is&k=20&c=u2NE-wZk4GnItBUENG84mhL8k4WV6D_LpiiP3o__cdE=);
            transform: scale(1.03);
            backgroundSize:cover;
                backgroundRepeat:no-repeat;
            transition: transform 0.5s ease-in-out;
            Typography {
                color:white;
            }
        }    
        `

const OnlineMakrketting = () => {
    const heading = " Online Marketing"
    const subheading = " Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />

            <Box>
                <Typography sx={{
                    px: { xs: "1rem", lg: "9rem" },
                    fontSize: "20px",
                    fontFamily: "sans-serif"
                }} >Our creative team of Designers in Blue Brain Technologies is work together to enhance user experience with their excellence ability in technology</Typography>
                <Box>
                    <Grid container justifyContent={"flex-start"} sx={{ px: { xs: 1, lg: 16 } }} >
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, mb: 2 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        Digital Marketing
                                    </Typography>
                                    <Typography pt={1}>
                                        Digital marketing is platform driven by Internet which helps to reach customers. This platform provides a new endeavor with new way...
                                    </Typography>
                                    <NavLink to="/digitalmarketing">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        SEO
                                    </Typography>
                                    <Typography pt={1}>
                                        SEO is an Abbreviation of Search Engine Optimization, is a service that felicitates the quantity and quality of website traffic and increases its visibility...
                                    </Typography>
                                    <NavLink to="/seo">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Email & Whatsapp Marketing
                                    </Typography>
                                    <Typography pt={1}>
                                        Hitting the rod when it’s hot’ this idiom really suit the above written service E-Mail & WhatsApp Marketing...
                                    </Typography>
                                    <NavLink to="/Email">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}   >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Social Media Optimization
                                    </Typography>
                                    <Typography pt={1}>
                                        Social Media is a platform where people spent their whole day without getting bored or tired and some of them are so addicted to browse...
                                    </Typography>
                                    <NavLink to="/socialmedia">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>

                                        Content Marketing
                                    </Typography>
                                    <Typography pt={1}>
                                        In the ear of competition, every business organizations are wrestling to get better numbers and figures from each other, and to attain those leaps in market...
                                    </Typography>
                                    <NavLink to="/contactmarketing">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default OnlineMakrketting
