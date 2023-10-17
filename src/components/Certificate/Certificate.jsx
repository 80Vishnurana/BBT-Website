import { Box, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Heading/Heading'
const heading = "Certificates"
const subheading = " Certificates"

const Certificate = () => {
    return (
        <>

            <Heading Title={heading} subTitle={subheading} />
            <Box>
                <Box>
                    <Typography variant='h5'>
                        About Blue Brain Technologies
                    </Typography>
                </Box>
            </Box>





        </>
    )
}

export default Certificate
