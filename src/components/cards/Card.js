import React, { useContext } from 'react'
import { Card } from "@mui/material"
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Mode } from "@mui/icons-material/"
import { Delete } from "@mui/icons-material/"
import "./Card.css"
import { UserContext } from '../../UserContext';
// import image from './../../assets/shoes.jpeg'


export default function ProductCard(props) {
    console.log(props)
    const { user } = useContext(UserContext);
    return (
        <div>
            <Card sx={{ maxWidth: 345, width: 250 ,height:350, display:"flex",marginTop:"15px"}}>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="194"
                        image={`/${props.image}`}
                        alt="Paella dish"
                    />
                    <div className='card--title'>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.price}
                        </Typography>

                    </div>

                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
                <div className='card--options'>
                    <button className='card--buyButton'>Buy</button>
                    {user.isAdmin && <Mode className='card--editButton' />}
                    {user.isAdmin && <Delete />}
                </div>

            </Card>

        </div>
    )
}
