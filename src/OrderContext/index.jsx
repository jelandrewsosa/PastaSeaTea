import { createContext, useReducer } from "react";
import reducer from "../Reducer/reducer";

export const OrderContext = createContext();

function PastaSeateaContextComponent({children}) {
  const [state, dispatch] = useReducer(reducer, {orderList: []})
  return (
    <OrderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default PastaSeateaContextComponent;