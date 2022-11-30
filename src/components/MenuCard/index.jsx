import * as React from 'react';
import { useContext } from 'react';
import { OrderContext } from '../../OrderContext';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import style from './style.module.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function MenuCard({name, price, image, typography}) {
  const {dispatch} = useContext(OrderContext)

  const handleClick = () => {
    dispatch({
      type: 'ORDER',
      payload: {name: name, price: price, image: image},
    })
  }

  return (

    <Card className={style.card} sx={{ maxWidth: 345, margin: '20px'}}>
      <CardHeader
        title={name}
        subheader={`P${price}`}
      />
      <CardMedia
        sx={{ height: 250, filter: 'blur(0.5px)', opacity: 0.94}}
        component="img"
        image={image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {typography}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton onClick={handleClick} sx={{ marginLeft: 'auto'}} aria-label="add to cart">
          <AddShoppingCartIcon/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
