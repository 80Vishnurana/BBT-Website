import { Box, Container, Paper, Typography, styled, Button, Pagination, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Blog.css";
import paginationdata from '../PaginationData/pagination'
import PaginationButton from '../Pagination/PaginationButton';
import { motion, AnimatePresence } from 'framer-motion'




const Boxstyle = styled(Box)`
      overflow: hidden;
      background-color: darkblue;
      
         img:hover {
            transition-duration: 1s;
            transform: scale(1.4);
            opacity: 0.5;
            transition-timing-function: ease-out;
            transition-timing-function: ease-in-out;
          }    
`

export const Blog = () => {

    // const [data, setdata] = useState(paginationdata);
    const [index, setIndex] = useState(0)
    const [toggle, setToggle] = useState(false)
    const curData = paginationdata[index]

    const nextBtnHandler = () => setIndex(lst => lst < paginationdata.length - 1 ? lst + 1 : 0)

    const prevBtnHandler = () => setIndex(lst => lst > 0 ? lst - 1 : paginationdata.length - 1)

    useEffect(() => {
        setToggle(true)
        setTimeout(() => setToggle(false), 1000)
    }, [index])

    return (
        <>

            <Box sx={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                boxShadow: "inset 0 0 800px black",
                backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
            }}>
                <Box display={"flex"} sx={{

                    zIndex: "2",
                    flexFlow: "column"
                }}>
                    <Typography variant='h3' sx={{ color: "white" }}>
                        Blog
                    </Typography>

                    <Typography textAlign={"center"} fontSize={"25px"}>
                        <NavLink to="/" >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "25px" }}>Blog</span>
                    </Typography>
                </Box>


            </Box>
            {/* Pagination/Current Data */}
            <div className="" style={{ minHeight: '540px' }} >
                <AnimatePresence mode='wait'>
                    {!toggle && <Slide {...curData} />}
                </AnimatePresence>
            </div>
            <Box sx={{ mb: "3rem" }}>
                <PaginationButton nextBtnHandler={nextBtnHandler}
                    prevBtnHandler={prevBtnHandler}

                />
            </Box>
        </>
    );
};


const Slide = (props) => <motion.div
    initial={{ x: 100 }}
    animate={{ x: 0 }}
    exit={{ x: -100 }}
>
    <Container>
        <Container maxWidth="md" sx={{ pb: { xs: "10px", lg: "2rem", xl: "2rem" } }}>
            <Paper sx={{ boxShadow: 4, p: "10px" }} >
                <Box p={"0.5rem"} >
                    <Boxstyle >
                        <Typography sx={{ height: { xs: '15rem', lg: "16rem", xl: "15px" } }}  >
                            <img src="./blog1.jpg" alt=""
                                width="100%" height="100%" />
                        </Typography>
                    </Boxstyle>
                </Box>
                <Box sx={{ p: { xs: "1rem", lg: "1rem" }, py: { xs: "0.5rem", lg: "0.5rem" } }}>
                    <Typography sx={{ py: { xs: "5px", } }} variant='h4'  >
                        {props.Name}
                    </Typography>
                    <Typography variant="subtitle2">{props.description}
                    </Typography>
                    <Button variant="contained" sx={{ fontFamily: "sans-serif", px: "20px", py: "5px", mt: "2rem" }}>Read More</Button>
                </Box>
            </Paper>
        </Container>
    </Container>
</motion.div>

export default Blog
