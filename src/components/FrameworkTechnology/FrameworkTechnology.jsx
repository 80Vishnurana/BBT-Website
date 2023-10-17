

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


const FrameworkTechnology = () => {
    const heading = "Business & Planning"
    const subheading = "Our Services"
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
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        MVC Framework
                                    </Typography>
                                    <Typography pt={1}>
                                        MVC stands for Model-View-Controller, is an architectural or software design patter that separate an application into three main logical components such...
                                    </Typography>
                                    <NavLink to="/ItConsulting">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Mobility(Hybrid & Native)
                                    </Typography>
                                    <Typography pt={1}>
                                        Mobility is a service that provides you a satisfied marketing result through Mobile applications. Agree or not Mobile Apps are...
                                    </Typography>
                                    <NavLink to="/BusinessConsulting">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Cloud Server
                                    </Typography>
                                    <Typography pt={1}>
                                        Cloud server is a virtual server, running in computing environment. It is built, hosted and delivered via cloud computing platform...
                                    </Typography>
                                    <NavLink to="/BusinessConsulting">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}   >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Domain & Hosting
                                    </Typography>
                                    <Typography pt={1}>
                                        Open source refers to something that can modify and share as is it accessible for everyone. It arises from software term which implied an approach towards...
                                    </Typography>
                                    <NavLink to="/Digital">
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
                                        Payment Gateway's
                                    </Typography>
                                    <Typography pt={1}>
                                        Payment Gateway (PG) is an online payment tunnel that connects your bank account to that platform where you need to transfer your money...
                                    </Typography>
                                    <NavLink to="/bulkemail">
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

                                        KIOSK & Touch Screen
                                    </Typography>
                                    <Typography pt={1}>

                                        There are many variations of dummy that passages of Lorem Ipsum available but an the majority have suffered that is dummy alteration in some.

                                        Read More

                                    </Typography>
                                    <NavLink to="/kiosh-touch">
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

export default FrameworkTechnology
