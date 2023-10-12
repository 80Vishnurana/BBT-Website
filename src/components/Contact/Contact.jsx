import React from "react";
import "./Contact.css";
import { Box, Grid, TextField, Typography } from "@mui/material";
import "animate.css";
import { NavLink } from "react-router-dom";
import { FormControl } from '@mui/material';
const Contact = () => {

  return (
    <>

      <Box sx={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
        backgroundColor: "black",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: "inset 0 0 800px black",
        backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
      }}>

        <Box
          display={"flex"}
          sx={{
            flexFlow: "column",
          }}
        >
          <Typography variant="h3" sx={{ color: "white", fontSize: { xs: "30px", lg: "40px" } }}>
            Contact Information
          </Typography>

          <Typography textAlign={"center"} fontSize={"25px"}>
            <NavLink to="/">Home</NavLink>{" "}
            <span
              style={{ color: "white", fontWeight: "600", fontSize: "25px" }}
            >
              Contact
            </span>
          </Typography>
        </Box>
      </Box>


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



        <Box  >

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

          </FormControl>

        </Box>
      </Box>




    </>
  );
};

export default Contact;
