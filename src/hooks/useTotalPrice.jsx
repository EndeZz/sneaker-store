import React, { useContext } from 'react';
import AppContext from '../context';

export const useTotalPrice = () => {
  const { cartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const taxPrice = Math.floor((totalPrice / 100) * 5);

  return {
    cartItems,
    totalPrice,
    taxPrice,
  };
};
