import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import styled from '@emotion/styled';

const Paperstyle = styled(Paper)`    
         :hover {
            background-image: url(https://media.istockphoto.com/id/1623894588/photo/graphic-designer.jpg?s=1024x1024&w=is&k=20&c=u2NE-wZk4GnItBUENG84mhL8k4WV6D_LpiiP3o__cdE=);
            transform: scale(1.02);
            backgroundSize:cover;
                backgroundRepeat:no-repeat;
            transition: transform 0.5s ease-in-out;
            Typography {
                color:white;
            }
          }    
`
const Designing = () => {

    return (
        <>
            <Box sx={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
                backgroundColor: "black",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: "inset 0 0 800px black",
                backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", mb: "2rem"
            }}>
                <Box display={"flex"} sx={{
                    flexFlow: "column"
                }}>
                    <Typography variant='h3' sx={{ color: "white", fontSize: { xs: "30px", lg: "40px" } }}>
                        Designing Services
                    </Typography>

                    <Typography textAlign={"center"} fontSize={"25px"}>
                        <NavLink to="/" >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "23px" }}>Our Services</span>
                    </Typography>
                </Box>
            </Box>
            <Box>
                <Typography sx={{
                    px: { xs: "1rem", lg: "9rem" },
                    fontSize: "20px",
                    fontFamily: "sans-serif"
                }} >Our creative team of Designers in Blue Brain Technologies is work together to enhance user experience with their excellence ability in technology</Typography>
                <Box>
                    <Grid container justifyContent={"flex-start"} sx={{ px: { xs: 1, lg: 16 } }} >
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, mb: 2 }}  >

                            <Paperstyle sx={{ m: 2, width: "21rem", boxShadow: 4, }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                                        Website Design

                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="./Website">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                                        Graphics Design
                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>

                                        Logo & Banner Design
                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}   >

                            <Paperstyle sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                                        UI/UX Design
                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle sx={{ m: 2, width: "21rem", boxShadow: 4 }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"28px"} fontWeight={600}>
                                        Hosting/Registration
                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "30px", py: "10px" }}>Read Me</Button>
                                </Box>
                            </Paperstyle>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </>
    )
}

export default Designing
