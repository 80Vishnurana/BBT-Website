import React, { useState } from 'react'
import styled from '@emotion/styled'
import menu from '../Data/menu'
import "../Button/button.css"
import "./portfolio.css"
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'



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

  return (
    <>
      <Box sx={{ backgroundColor: "black" }} >
        <Box sx={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2018/03/13/22/53/puzzle-3223941_1280.jpg')`,
          backgroundColor: "black",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          boxShadow: "inset 0 0 800px black",
          backgroundPosition: 'center', display: "flex", alignItems: "center", justifyContent: 'center', height: "9rem", pl: "3rem ", mb: "2rem"
        }}>


          <Box display={"flex"} sx={{
            flexFlow: "column",
          }}>
            <Typography variant='h3' sx={{ color: "white" }}>
              Portfolio
            </Typography>

            <Typography textAlign={"center"} fontSize={"25px"}>
              <NavLink to="/" >Home</NavLink>   <span style={{ color: 'white', fontWeight: "600", fontSize: "25px" }}>Portfolio</span>
            </Typography>
          </Box>


        </Box>
      </Box>
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
      <Box sx={{ m: "3rem", display: "flex", flexWrap: "wrap" }}>

        {
          Item.map((ele) => {
            const { id, Name, img, description } = ele

            return (

              <Cardstyle className='card' sx={{
                ":hover": {
                  boxShadow: 8,


                }, maxWidth: 280, height: "26.6rem", margin: 'auto', mb: "4rem", boxShadow: "4", py: "15px"
              }}>

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

              </Cardstyle>
            )
          })
        }


      </Box>


    </>
  )
}

export default Portfolio
