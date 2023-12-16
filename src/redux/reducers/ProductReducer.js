import {PRODUCTTYPES} from '../configs/types';

const initialState = {
  cart: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action?.type) {
    case PRODUCTTYPES.ADD_TO_CART: {
      const isItemAvailable = state.cart.find(
        item => item.id === action.payload.id,
      );

      if (isItemAvailable) {
        const updatedCart = state.cart.map(e =>
          e.id === isItemAvailable.id ? {...e, cartValue: e.cartValue + 1} : e,
        );

        return {
          cart: updatedCart,
        };
      } else {
        const data = {...action.payload, cartValue: 1};
        return {
          cart: [...state.cart, data],
        };
      }
    }
    case PRODUCTTYPES.DELETE_CART:
      return {
        cart: [],
      };

    case PRODUCTTYPES.REMOVE_ITEM_FROM_CART: {
      const isItemAvailable = state.cart.find(
        item => item.id === action.payload.id,
      );
      console.log(isItemAvailable,"ZSDFagasg")
      if (isItemAvailable) {
        let updatedCart = state.cart.map(e =>
          e.id === isItemAvailable.id ? {...e, cartValue: e.cartValue - 1} : e,
        );
        updatedCart=updatedCart.filter(data=>data.cartValue>0);
        console.log(updatedCart,"updatedCart")
        return {
          cart: updatedCart,
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};
