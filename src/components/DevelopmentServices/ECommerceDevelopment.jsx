import { Box, Paper, Typography } from '@mui/material'
import Heading from '../Heading/Heading'
import React from 'react'

const ECommerceDevelopment = () => {
    const heading = "Development Services"
    const subheading = "Our Services"
    return (
        <>
            <Heading Title={heading} subTitle={subheading} />
            <Box sx={{ px: { xs: 2, md: 3, lg: 10, }, }} >
                <Box sx={{ px: { xs: 0, md: 1, lg: 5 }, py: { xs: 1, md: 2, lg: 4 }, display: "flex", flexDirection: { xs: "column", lg: "row" }, }}>
                    <Box sx={{ pr: { xs: 2, lg: 5 }, pb: 2, }}>
                        <Typography variant='h4' sx={{ py: 2, fontWeight: "bold", fontSize: { xs: "25px", lg: "30px" } }} >
                            E-Commerce Development
                            <hr style={{ width: "25rem", border: "2px solid darkblue" }} />
                        </Typography>
                        <Typography variant="body1" sx={{ pb: 2, fontSize: "18px", fontFamily: "sans-serif", pt: 1 }}>
                            Apart from corporate and Industrial work, we test our fate in E-Commerce section also. We built an online portal that facilitates online transaction of goods and service all over the region including transfer of information and funds too. We work on different arena and perspectives that allow our clients to earn and expand their business through their E-Commerce website. We use SEO friendly content to rank your E-Commerce websites on Google and other search engines like yahoo, Bing, MSN etc. We create mobile friendly website to reach your customer easily. We believe that an E-Commerce websites not only look good to eyes but also benefits the customers with pleasant shopping experience as well. We work on every kind of website such as:</Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "18px" }}>
                            • B2B (Business-To-Business)
                        </Typography>
                        <Typography sx={{ fontFamily: "sans-serif" }}>
                            B2B is form of transaction between businesses. It refers to those business which is dealt between businesses rather than between business and an individual consumer. Such as transaction between manufacturer and wholesaler or wholesaler and retailer.
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "18px" }}>
                            • B2C (Business-To- Customer)
                        </Typography >
                        <Typography sx={{ fontFamily: "sans-serif" }}>B2C stands for Business to Customer is a method of selling goods and services directly between business and customer who are definitely the last user of the products or services such as online retailer who sold their products or services to consumer directly without any middleman.
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "18px" }}>
                            • C2C ( Customer-To-Customer)
                        </Typography>
                        <Typography sx={{ fontFamily: "sans-serif" }}>C2C is an abbreviation of Customer to customer transaction, typically the trade will go with online portal. C2C trading allow both consumer to interact with each other and sell their products without getting involve in marketing strategies such as OLX, eBay and Etsy.
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "bold", fontSize: "18px" }}>
                            • C2B (Customer-To-Business)
                        </Typography>
                        <Typography sx={{ fontFamily: "sans-serif" }}>C2B is Consumer to Business from, where consumer dealt with organization to sale their product, it’s vice versa of B2C Market form.
                        </Typography>

                    </Box>
                    <Box pl={1} sx={{ pt: { xs: 3, lg: 12 }, height: { xs: "320px", md: "400px", lg: "350px" }, width: { xs: "80vw", md: "100vw", lg: "250vw" } }}><img style={{ boxShadow: "15px 15px 5px black" }} src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?w=740&t=st=1697014626~exp=1697015226~hmac=760f6a455e5ab4f6e8255de9bd56600a7c2e078641ec9e64809a55387dc0bf8e" alt="" height={"100%"} width={"100%"} />
                    </Box>
                </Box>
            </Box>





            <Box sx={{ pl: { xs: 1, lg: 15 }, display: "flex", py: { xs: "3rem" } }}>
                <Typography>
                    <img height="40px" width="40px" src="../public/hand.png" alt="" />
                </Typography>
                <Typography variant='h5' sx={{ fontWeight: "600", fontFamily: "sans-serif", pb: 3 }}>
                    Being a professional website designer, we whip up your company with several benefits:
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
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Reach out Globally
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>E-Commerce development open the doors to reach out the world without having geographical limitation problem. By having an E-Commerce site you can explore each and every market place online and understand their market culture more closely to sell your products and services. One more amazing benefits is that you don’t have to contact with any middleman to maintain your business, you can contact your customer directly through your E-Commerce site.




                                    </Typography>

                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", px: 1, pt: 2 }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box>
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>No time Constraint
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}>You can sell your products and services throughout day and night no time bounty condition. No restriction of having an opening or closing time. Every time is time day to sale even when you are fast asleep. E-Commerce site have the most priceless benefit is that users can explore and buy products anytime, any day from anywhere.
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
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to Remarket
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}> Every season have their own seasonal products or service but after it ends, the rest products are vulnerable to sale in traditional market. In E-Commerce site remarket or resale the products is easier than traditional market. You just have to put products on sale category with some cut off percentages.
                                </Typography>

                            </Box>
                        </Box>
                        {/* ......................................................................... */}
                        <Box sx={{ display: "flex", px: 1, }}>
                            <Box sx={{ pr: 3, }}>
                                <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Low Financial Cost
                                </Typography>
                                <Typography sx={{ fontFamily: "sans-serif" }}>To sale products and services online one have create an E-Commerce website, then do a photo-shoot of their product or create a catalogue to put their product’s picture online and to run it have a proper knowledgeable person. Other than this there is no other expense of having a showroom or shop to sale product, not have to pay electricity bill or any other expense. Thus, E-Commerce website development cut the cost for business.
                                </Typography>

                            </Box>
                        </Box>
                    </Paper>
                </Box>
                <Box sx={{ height: { xs: "38vh", lg: "58vh" }, width: { xs: "98%", lg: "150%" }, pt: { xs: 5, lg: 0 }, }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
            </Box>
            <Box display={"flex"} sx={{
                flexDirection: { xs: "column", md: "column", lg: "row" },
                px: { xs: 2, lg: 12, },
                backgroundColor: "rgb(236, 240, 247)",
                py: 10
            }}>
                <Box sx={{ height: { xs: "38vh", lg: "32vh" }, width: { xs: "98%", lg: "80%", mb: { xs: 15, lg: 1 } } }}>
                    <img style={{ borderRadius: "1rem" }} src="../public/laptop.jpg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Box>
                    <Box sx={{ ml: { md: 2, lg: 5, } }}>
                        <Paper sx={{ height: { xs: "auto", md: "auto", lg: "32vh" }, marginTop: { xs: "4rem", md: "2rem", lg: "0rem" }, borderRadius: "1rem", p: 2, boxShadow: 4, py: 3 }}>
                            <Box sx={{ display: "flex", px: 1, }}>
                                <Box sx={{ pr: 3, }}>
                                    <img style={{ height: "30px", width: "30px", paddingTop: "5px" }} src="../public/point.png" alt="" />
                                </Box>
                                <Box  >
                                    <Typography variant='h6' sx={{ fontFamily: "sans-serif", py: 1, fontWeight: 500 }}>Easy to Manage Inventory
                                    </Typography>
                                    <Typography sx={{ fontFamily: "sans-serif" }}> E-Commerce application development make you more manageable with your stock and inventory. You are in complete control of your business enabling a rise in profit, expansion and growth. Through E-Commerce development you can efficiently manage your customer data also.
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

export default ECommerceDevelopment
