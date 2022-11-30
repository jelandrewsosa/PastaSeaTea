function reducer(state, action) {
  // State {orderList: []} with array of Orders
  // Order Object {name, price, type}

  // SWITCH
  // IF action.type === ORDER
  //  PUSH payload to orderList
  // IF action.type === REMOVE
  //  findIndex look for name from orderList
  //  use SPLICE to remove from orderList
  switch (action.type) {
    case 'ORDER':
      state.orderList.push(action.payload);
      return state;
    case 'REMOVE':
     state.orderList.splice(action.payload.index, 1);
     return {
      ...state
     };
      default:
        return state;
  }
}

export default reducer;