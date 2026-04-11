import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, cartTotalSelector } from '../recoil/CartState';

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const totalPrice = useRecoilValue(cartTotalSelector);

  const updateQuantity = (id, delta) => {
    setCart(oldCart => 
      oldCart.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      }).filter(item => item.quantity > 0) 
    );
  };

  const removeItem = (id) => {
    setCart(oldCart => oldCart.filter(item => item.id !== id));
  };

  return (
    <div>
      <h3>Giỏ hàng của bạn:</h3>
      {cart.length === 0 ? <p>Trống</p> : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price} x {item.quantity}
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <button onClick={() => removeItem(item.id)}>Xóa</button>
            </li>
          ))}
        </ul>
      )}
      <h4>Tổng cộng: ${totalPrice}</h4>
    </div>
  );
};

export default Cart;