import React from 'react'
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import styled from '@emotion/styled';
import Heading from '../Heading/Heading';
import "../Home/Home.css"
import NetTraning from '../It-Traning/netTraning';
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


const ItTraoning = () => {
    const heading = "IT Traning"
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
                                    <Typography variant='h4' pb={1} fontSize={"22px"} fontWeight={600}>
                                        Mobile App Training
                                    </Typography>
                                    <Typography pt={1}>
                                        In today’s world mobile phone have become as important as wallet and purse in everyday life and development in this technology take places...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
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
                                        W.NET Training
                                    </Typography>
                                    <Typography pt={1}>
                                        .Net or Dot Net is a programming infrastructure, created by Microsoft for developing, deploying and running applications and services such as web...
                                    </Typography>
                                    <NavLink to="/NetTraning">
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
                                        SEO Training
                                    </Typography>
                                    <Typography pt={1}>
                                        SEO (Search Engine Optimization) is a process to rank any website on search engine such as Google, Bing, MSN etc. in the area of online marketing SEO training...
                                    </Typography>

                                    <NavLink to="/seoTraining">
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
                                        Web Designing Training
                                    </Typography>
                                    <Typography pt={1}>
                                        Web Development is simply how website are built, implemented and displayed on internet, and web developers are the programmers ...
                                    </Typography>
                                    <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
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
                                        PHP Training
                                    </Typography>
                                    <Typography pt={1}>
                                        PHP is an abbreviation of hypertext preprocessor, embedded with HTML scripting language. PHP is mainly used to develop dynamic web application...
                                    </Typography>
                                    <NavLink to="/phptraning">
                                        <Button variant="contained" sx={{ my: "2rem", backgroundColor: "darkblue", px: "22px", py: "10px" }}>Read Me</Button>
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

                                        SQL Training
                                    </Typography>
                                    <Typography pt={1}>
                                        Structure Query Language is the full form of SQL or in another word ‘See-Quel’, is the standard language dealing with the Relational Database. SQL is basically...
                                    </Typography>
                                    <NavLink to="/sqltraning">
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

export default ItTraoning
