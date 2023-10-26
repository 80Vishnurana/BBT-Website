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


const Business = () => {
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
                                    <Typography variant='h4' pb={1} fontSize={"28px"} fontWeight={600}>
                                        IT Consulting
                                    </Typography>
                                    <Typography pt={1}>
                                        An Information Technology (IT) Consultant helps business to create value and optimize their performance through technology. Strategy and operational mission...
                                    </Typography>
                                    <NavLink to="/ItConsulting">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
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
                                        Business Consulting
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/BusinessConsulting">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
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
                                        Reporting
                                    </Typography>
                                    <Typography pt={1}>
                                        Reporting software is a powerful and fastest growing data visualization tool used in business Intelligence Industry. From connection to collaboration reporting tool...
                                    </Typography>
                                    <NavLink to="/Reaporting">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
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
                                        Digital Strategy
                                    </Typography>
                                    <Typography pt={1}>
                                        Digital era brought a time where every business are changing their focus from traditional marketing to digital platform but to grow better business online...
                                    </Typography>
                                    <NavLink to="/Digital">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
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
                                        Bulk Email/SMS
                                    </Typography>
                                    <Typography pt={1}>
                                        If you are looking for less in cost yet profitable marketing tactics, so Bulk E-mail/SMS are the key. You are spending thousands on outdoor...
                                    </Typography>
                                    <NavLink to="/bulkemail">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>

                                        KIOSK & Touch Screen
                                    </Typography>
                                    <Typography pt={2}>

                                        There are many variations of dummy that passages of Lorem Ipsum available but an the majority have suffered that is dummy alteration in some.

                                        Read More

                                    </Typography>
                                    <NavLink to="/kiosh-touch">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
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

export default Business
