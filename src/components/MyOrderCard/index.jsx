import style from './style.module.css'
import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useContext } from 'react';
import { OrderContext } from '../../OrderContext';

function MyOrderCard({image, name, price, index}) {

  const {dispatch} = useContext(OrderContext)
  const handleRemoveOrderClick = () => {
    dispatch({
      type: 'REMOVE',
      payload: {name: name, price: price, image: image, index: index},
    })
  }

  const handleAddOrderClick = () => {
    dispatch({
      type: 'ORDER',
      payload: {name: name, price: price, image: image, index: index},
    })
  }

  return (

    <>
      <div className={style.container}>
        <img className={style.orderImage} src={image} />
        <li className={style.orderName}>
          <p>{name}</p>
          <span className={style.price}>P{price}</span>
        </li>
        <li className={style.counter}>
          <RemoveCircleIcon onClick={handleRemoveOrderClick} className={style.icon}/>
          <span className={style.count}>1</span>
          <AddCircleIcon onClick={handleAddOrderClick} className={style.icon}/>
        </li>
      </div>
    </>
  );
}

export default MyOrderCard;