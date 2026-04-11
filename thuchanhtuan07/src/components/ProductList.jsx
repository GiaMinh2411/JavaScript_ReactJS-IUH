import React from 'react';
import { useSetRecoilState } from 'recoil';
import { cartState } from '../recoil/CartState';

const products = [
  { id: 1, name: 'iPhone 15', price: 1000 },
  { id: 2, name: 'MacBook M3', price: 2000 },
  { id: 3, name: 'AirPods Pro', price: 250 },
];

const ProductList = () => {
  const setCart = useSetRecoilState(cartState);

  const addToCart = (product) => {
    setCart((oldCart) => {
      const existingItem = oldCart.find(item => item.id === product.id);
      if (existingItem) {
        return oldCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h3>Sản phẩm có sẵn:</h3>
      {products.map(p => (
        <div key={p.id} style={{ marginBottom: '5px' }}>
          {p.name} - ${p.price} 
          <button onClick={() => addToCart(p)} style={{ marginLeft: '10px' }}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;