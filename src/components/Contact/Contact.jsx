import React from "react";
import "./Contact.css";
import { Box, Grid, TextField, Typography } from "@mui/material";
import "animate.css";
import { NavLink } from "react-router-dom";
import { FormControl } from '@mui/material';
import Heading from "../Heading/Heading";
const Contact = () => {

  const heading = "Contact Information"

  return (
    <>


      <Heading Title={heading} />


      <Box>
        <Typography variant="h3" textAlign={"center"} fontWeight={"bold"} fontSize={"35px"} >
          Get in Touch
        </Typography>
        <Box sx={{ py: "2rem" }}>
          <Typography
            alignItems={"center"}
            sx={{ px: { xs: "2.5rem", lg: "5rem", md: "2rem" } }}
          >
            Are you still waiting for supercharging your business or bring your
            brand online or want to rethink on your digital strategy? Get in
            touch with the best digital marketing company in Delhi to see how we
            can work together to make it happen.
          </Typography>
          <Box >
            <Box
              sx={{ display: "flex", py: "1rem", mt: "2rem", }}
              textAlign={"center"}
              className="address"
            >
              <Grid container columnGap={3} justifyContent="center">
                <Grid xs={12} md={6} lg={4} >
                  <Box className="addressb"
                    sx={{
                      py: { xs: "1rem" },
                      borderRight: { xs: "none", md: "none", lg: "2px solid gray" },
                      px: "2rem",

                    }}
                  >
                    <Typography pb={"20px"}>
                      <img
                        onMouseOver={(e) => {
                          e.target.classList.add('animate__animated', 'animate__bounce')
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove('animate__animated', 'animate__bounce')
                        }}
                        class="animate__animated animate__bounce"
                        src="./location Icon.png"
                        alt=""
                        height={"65px"}
                        width={"65px"}
                      />
                    </Typography>
                    <Typography variant="h5">Address</Typography>
                    <Typography py={"10px"} variant="body2">
                      E-379, Gali No-76, Mahavir Enclave Part-3, West Delhi,
                      Delhi-110059
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={12} md={6} lg={3} >
                  <Box
                    sx={{
                      px: "2rem",
                      py: { xs: "1rem" }, height: "13.5rem",
                      borderRight: { xs: "none", md: "none", lg: "2px solid gray" },
                    }}
                  >
                    <Typography pb={"20px"}>
                      <img
                        onMouseOver={(e) => {
                          e.target.classList.add('animate__animated', 'animate__bounce')
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove('animate__animated', 'animate__bounce')
                        }}
                        className="animate__animated animate__bounce"
                        src="./gmail.png"
                        alt=""
                        height={"65px"}

                        width={"65px"}
                      />
                    </Typography>
                    <Typography variant="h5">E-mail</Typography>
                    <Typography
                      py={"10px"}
                      variant="body2"
                      sx={{ fontWeight: "20px" }}
                    >
                      info@bluebraintech.com
                    </Typography>
                  </Box>

                </Grid>
                <Grid xs={12} md={6} lg={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexFlow: "column",
                      py: { xs: "1rem" },

                    }}
                  >
                    <Typography pb={"20px"}>
                      <img
                        onMouseOver={(e) => {
                          e.target.classList.add('animate__animated', 'animate__bounce')
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove('animate__animated', 'animate__bounce')
                        }}
                        class="animate__animated animate__bounce"
                        src="./telephone.png"
                        alt=""
                        height={"65px"}
                        width={"65px"}
                      />
                    </Typography>
                    <Typography py={"10px"} variant="h5">
                      Phone
                    </Typography>
                    <span>(+91) 9999600883</span>
                    <span> (+91) 9999600773</span>
                  </Box>

                </Grid>
              </Grid>

            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box justifyContent="center">
          <Typography textAlign="center" variant="h3" sx={{ fontWeight: "600", fontFamily: "sans-serif", fontSize: "35px" }}>Quick Enquiry</Typography>
          <Typography textAlign="center" sx={{ px: { xs: "1rem" }, py: { xs: "1rem" } }} variant="body2">It's what we do, and we know how to make it work for our clients and organization.</Typography>
        </Box>




        {/* 
          <FormControl>
            <Box
              component="form"
              sx={{
                display: "flex",
                '& > :not(style)': { m: 1, width: '40rem' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-controlled"
                label="Your Name "


              />
              <TextField
                id="outlined-controlled"
                label="Email"


              />
            </Box>

          </FormControl> */}

      </Box>

      <Box sx={{ height: "70vh" }}>
        <div class="row"><div class="mx-auto col-md-10"><form id="contact-form-1" method="post" role="form" class="p-3"><div class="card-body"><div class="row"><div class="col-md-6"><label>First name</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text"><i class="tim-icons icon-single-02"></i></span></div><input aria-label="First Name..." placeholder="First Name..." type="text" class="form-control" /></div></div><div class="col-md-6"><div class="form-group"><label>Last name</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text"><i class="tim-icons icon-caps-small"></i></span></div><input aria-label="Last Name..." placeholder="Last Name..." type="text" class="form-control" /></div></div></div></div><div class="form-group"><label>Email address</label><div class="input-group"><div class="input-group-prepend"><span class="input-group-text"><i class="tim-icons icon-email-85"></i></span></div><input placeholder="Email Here..." type="text" class="form-control" /></div></div><div class="form-group"><label>Your message</label><textarea id="message-1" name="message" rows="6" class="form-control"></textarea></div><div class="row"><div class="ml-auto col-md-6"><button class="btn-round pull-right btn btn-primary">Send Message</button></div></div></div></form></div></div>
      </Box>




    </>
  );
};

export default Contact;
