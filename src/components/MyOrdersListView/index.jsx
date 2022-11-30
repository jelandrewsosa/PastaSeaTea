import { OrderContext } from "../../OrderContext";
import { useContext } from "react";
import NavBar from '../NavBar'
import MyOrderCard from "../MyOrderCard";
import style from './style.module.css'

function MyOrdersListView() {
  const {state} = useContext(OrderContext);

  return (

    <>
      <NavBar />
      <h1 className={style.header}>My Orders</h1>
      <div>
        <ul>
          {state.orderList.map((item, index) => (
          <MyOrderCard key={`${item}-${index}`} image={item.image} name={item.name} price={item.price} index={index}/>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MyOrdersListView;