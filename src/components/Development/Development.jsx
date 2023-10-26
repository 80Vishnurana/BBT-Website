import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Link, NavLink } from 'react-router-dom'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import styled from '@emotion/styled';
import Heading from '../Heading/Heading';
import "../Home/Home.css"
const Paperstyle = styled(Paper)`    
         :hover {
            background-image: url(https://media.istockphoto.com/id/1623894588/photo/graphic-designer.jpg?s=1024x1024&w=is&k=20&c=u2NE-wZk4GnItBUENG84mhL8k4WV6D_LpiiP3o__cdE=);
            transform: scale(1.03);
            // background-size: cover;
            // backgroundRepeat:no-repeat;
            transition: transform 0.5s ease-in-out;
            boxShadow: inset 0 0 2000px black;
          
          }    
`
const heading = "Development Services"
const subheading = " Our Services"

const Development = () => {
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
                    <Grid container justifyContent={"flex-start"} sx={{ px: { xs: 1, lg: 16 }, }}>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 6, mb: 2, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, width: "19rem", boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", }}>
                                <Box p={1}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        Web Application Development
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/webApplication">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"23px"} fontWeight={600}>
                                        ERP Development
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/erpDeveloper">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ my: 6, }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        Open Source Customization
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/customization">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}   >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        Mobile Application Development
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/mobileApplication">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        API's Development
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/APIdevelopment">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={2}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        E-Commerce Development
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/ECommerceDevelopment">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Content Management System
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/ContentManagement">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 2 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={2} fontSize={"22px"} fontWeight={600}>
                                        Website Customization
                                    </Typography>
                                    <Typography pt={2}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/WebsiteCustomization">
                                        <Button variant="contained" sx={{ my: "2rem", px: "15px", py: "5px" }}>Read Me</Button>
                                    </NavLink>
                                </Box>
                            </Paperstyle>
                        </Grid>
                        <Grid xs={12} md={6} lg={4} sx={{ mt: 1, mb: 6 }}  >

                            <Paperstyle className='cards' sx={{ m: 2, boxShadow: "3px 3px 3px gray", border: "1px solid gray", borderTopLeftRadius: "5rem", borderBottomRightRadius: "5rem", width: "19rem", }}>
                                <Box p={3}>
                                    <Box
                                        sx={{ py: { xs: 2, lg: 4 } }}
                                    >
                                        <LaptopMacIcon sx={{ fontSize: "4rem" }} />
                                    </Box>
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Third Party Integration
                                    </Typography>
                                    <Typography pt={1}>
                                        At blue brain Technologies, we deliver unique, promising and superlative website designing service to our clients. A website is the first impression of your business...
                                    </Typography>
                                    <NavLink to="/ThirdParty">
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

export default Development
