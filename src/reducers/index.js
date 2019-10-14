const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'REMOVE_FROM_ACTION':
      return {
        ...state,
        cart: state.cart.filter(item => item.id!==Number(action.payload )) 
      }
    default:
      return state;
  }
}

export default reducer;