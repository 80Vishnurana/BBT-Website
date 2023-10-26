import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const SeoTraining = () => {
    const heading = "IT Training Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            SEO Training
                            <hr style={{ width: "15rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            We are living in the era of technology where everything is depends on internet and without it no one can imagine their life for a second. If we go back in time and recall the marketing scenario, which is absolutely opposite from this time. To promote products or service or either website people get involved in physical marketing and go door to door to advertise their expertise. But in new age we step ahead with digital marketing where we are promoting our business, products and services on our fingertip with the help of modern techniques and SEO marketing is the first thing which passes by everyone’s mind when we talk about Digital Marketing.</Typography>
                        <Typography variant="body1" >
                            SEO (Search Engine Optimization) is a process to rank any website on search engine such as Google, Bing, MSN etc. in the area of online marketing SEO training is must to have. Nowadays, every organization has their own domain named websites and wanted to get higher traffic and revenue from online marketing and SEO Manager have potential to get this desire in reality with the help of SEO Training.
                            The trainers at Blue Brain Technologies have trained you with the technicality to boost up the rank and revenue of website in few weeks.


                        </Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 15 }, height: { xs: "320px", md: "400px", lg: "500px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h6' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    We will teach you every online marketing aspect related to SEO service:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>SEO training Boost up Career
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>Most of the organization trained their in-house employees in Digital Marketing arena to save the cost of online marketing and avoid hiring another employee as a SEO manager. So if you have an excellent knowledge in SEO training with your mainstream capabilities, will boost up your career and benefitted you with higher salary.




                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Learn Internet Marketing Skills
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> SEO techniques facilitate to improve the visibility of targeted website on Search engine and promote business online. It will benefit you more engagement on your website and also get the high ranked on the search page of frequent clicked keyword with the training of SEO. This will cost you a lot which you had to pay to a SEO manager to maintain your visibility on search engine. But after the training, you may saves those money and use it on your core productivity.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Built up trust with Audience
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>If your website is poorly designed or have outdates information on it, people easily get distracted form your website and have trust issues.
                                    A website with latest technology and professional look equipped with updated information build trust with your audience so they remain on your website. Regularity of visitors on site helps to create more opportunities for your business to capture those leads.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Maintain your skills on your own
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>If you are a professional writer or a skilled website designer you can maintain your skill on your own by exercising you training of SEO on your work. Analyze the graph of ranking after each attempt of optimization with search engine. These frequent analyses of your own strength encourage you to start your journey as a SEO Manager.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "55vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>


        </>
    )
}

export default SeoTraining
