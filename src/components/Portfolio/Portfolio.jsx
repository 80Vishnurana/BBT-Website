import React, { useState } from 'react'
import styled from '@emotion/styled'
import menu from '../Data/menu'
import "../Button/button.css"
import "./portfolio.css"
import { motion } from "framer-motion";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import Heading from '../Heading/Heading'


const Cardstyle = styled(Card)`
      
      
      
         :hover {
            // transition-duration: 2s;
            transform: scale(1.02);
            transition: transform 0.5s ease-in-out;
          
           transition-timing-function: ease-out;
            transition-timing-function: ease-in-out;
          }    
`

const Portfolio = () => {
  const [Item, setItem] = useState(menu);
  const filterItem = (catg) => {
    const updateItem = menu.filter((curElem) => {
      return curElem.category === catg;
    })
    setItem(updateItem)

  }
  const heading = "Portfolio"
  const subheading = "Portfolio"

  return (
    <>
      <Heading Title={heading} subTitle={subheading} />


      <Box height={"auto"} >
        <Box display="flex" flexWrap={"wrap"} justifyContent={"center"}
        >

          <Button
            sx={{ ml: "20px", mt: "20px", borderRadius: 4, ":hover": { boxShadow: 8, }, }} variant="contained" size="small" onClick={() => setItem(menu)}  > <span>ALL Product </span></Button>
          <Button
            sx={{ ml: "20px", mt: "20px", borderRadius: 8 }} variant="contained" size="small" onClick={() => filterItem('fintech')}  ><span>CA Firm/fintech </span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('construction')}  >Contstruction</Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('education')}  > <span>Educational</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('electronic')}  >Electronic Gadgets</Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('farmer')}  ><span>Farmer Producer Company</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('grocery')}  ><span>Grocery</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('logistic')}  ><span>Logistic</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('mechanical')}  >Mechanical</Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('medical')}  ><span>Medical Device</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('pharma')}  ><span>Pharma</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('research')}  ><span>Research</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('security')}  ><span>Security Services</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('startup')}  ><span>Startup India</span></Button>
          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('tracking')}  ><span>Tracking Device</span></Button>

          <Button sx={{ ml: "20px", mt: "20px", borderRadius: 2, ":hover": { boxShadow: 8 } }} variant="contained" size="small" onClick={() => filterItem('weighting')}  ><span>Weighting Machine</span></Button>

        </Box>
      </Box>
      <motion.div layout>
        <Box sx={{ m: "3rem", display: "flex", flexWrap: "wrap" }}>

          {
            Item.map((ele) => {
              const { id, Name, img, description } = ele

              return (
                <Cardstyle className='card' sx={{
                  borderRadius: 4,
                  ":hover": {
                    boxShadow: 8,


                  }, maxWidth: 280, height: "26.6rem", margin: 'auto', mb: "4rem", boxShadow: "4", py: "15px"
                }}>
                  <motion.div layout>
                    <motion.div layout>
                      <CardMedia

                        sx={{ height: 120 }}
                        image="../../../public/portfolio.png"
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {Name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {description}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: "center" }}>
                        <Button size="small" variant="contained" >View Website</Button>
                      </CardActions>
                    </motion.div>

                  </motion.div>
                </Cardstyle>
              )
            })
          }


        </Box>
      </motion.div>


    </>
  )
}

export default Portfolio
