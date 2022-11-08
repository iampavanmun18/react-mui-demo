import React from 'react'
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material'

const MiuiCard = () => {
  return (
    <Box width="300px">
        <Card>
            <CardMedia
            image="https://source.unsplash.com/random"
            component="img"
            height="100px"
            alt='Unspash Image'
            />
            <CardContent>
                <Typography variant='h6' component="div">React</Typography>
                <Typography variant="body2" color="blue">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo quisquam voluptate ipsa eius tenetur enim nam voluptates itaque dolor architecto, nulla dolorem sint asperiores neque, deleniti reprehenderit labore possimus!</Typography>
            </CardContent>
            <CardActions>
                <Button>Hey</Button>
                <Button>There</Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default MiuiCard