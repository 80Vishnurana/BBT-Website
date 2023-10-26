import React from 'react'
import Heading from '../Heading/Heading'
import { Box, Paper, Typography } from '@mui/material'

const Sco = () => {
    const heading = "Online Marketing"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: 6, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            SEO
                            <hr style={{ width: "6rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, pt: 1 }}>
                            SEO is an Abbreviation of Search Engine Optimization, is a service that felicitates the quantity and quality of website traffic and increases its visibility on search engines such as Google and Bing for its users. It gives your website a certain boom to grow and top ranked alignment on first page of Search Engine. SEO strategy can be fussy sometimes with the lack of knowledge of search engine guideline, but we have experienced and skilled teammates for SEO service to make your websites more relevant to those keywords keyed by search engine users, we follow data driven and competitive analysis methods as per the guideline given by the search engines. We provide full customers support along with monthly tracking of SEO management and protect your website to lose visibility from Google or any other search engine portal.</Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 10 }, height: { xs: "320px", md: "400px", lg: "400px" }, width: { xs: "80vw", md: "100vw", lg: "200vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Our SEO Service delivers such results:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Increase Website Traffic
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>SEO is customer-centric strategy that engage inbound marketing. When user hunt for something on search engine that has the keyword related to your domain or industry, they actively seeking the lead and jump up to your site. SEO helps to bring in virtuous traffic to you in an adequate manner without getting annoying like several TV ads or Marketing Pop-ups.


                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Brand Visibility
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>With the help of SEO, one can create certain and isolated brand voice on digital platform of your own company which helps to connect with the user demographic. SEO ease the branding techniques through its SERPs (Search Engine Result page). The SERP work with relevancy of content and keywords, the more searched keywords you used in your domain, the more your presence uplift in the search engine platform and in result you will get more attentive customers. This will create a global branding of your website among your competitors.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Build Trust & Credibility
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> SEO helps achieving you the top most search result place in Google repeatedly, which turn your position as a relevant, genuine and a useful source of information in the context of Google. Your website will get preferred as a running website on search engine. Through improving user experience, identifying crawl errors, broken links, backlink from other reputable sites in the field, SEO helps to establish the credibility of your website.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Eliminate competition
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> If there are two company working in a same field with same number of workers, liabilities along with that they are selling same type of products at same price, but one has Search engine optimized company and the other have traditional marketing strategy in business. The first one with optimized business on search engine het more hike than the other one because today, digital platform have a more potential than traditional market and it’s an easiest way to get acknowledged in less period of time.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "65vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "34vh" }, width: { xs: "98%", lg: "80%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "34vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Non-Paid Ads
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> The Non-paid Ads or Organic Advertisement that run through effective SEO content, nut not paid by money. SEO provide non-paid ads with the goal to be better solve searcher’s queries, to keep searchers coming back and to keep them on longer within SERP.
                                    </Typography>
                                </Box>
                            </Box>

                        </Paper>
                    </Box>
                </Box>
            </Box>




        </>
    )
}

export default Sco
