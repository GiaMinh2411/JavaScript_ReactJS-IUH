import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { productState } from '../recoil/ProductContext';
import { cartState } from '../recoil/CartContext';
import { notifyState } from '../recoil/NotifyState';

const ProductManager = () => {
  const [products, setProducts] = useRecoilState(productState);
  const setCart = useSetRecoilState(cartState);
  const setNotify = useSetRecoilState(notifyState);

  useEffect(() => {
    const loadProducts = async () => {
      setProducts(prev => ({ ...prev, loading: true }));
      try {
        const res = await fetch('https://fakestoreapi.com/products?limit=5');
        const data = await res.json();
        setProducts({ items: data, loading: false, error: null });
      } catch (err) {
        setProducts({ items: [], loading: false, error: 'Lỗi tải sản phẩm' });
      }
    };
    loadProducts();
  }, []);

  const addToCart = (product) => {
    setCart(oldCart => {
      const isExist = oldCart.find(i => i.id === product.id);
      if (isExist) {
        return oldCart.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...oldCart, { ...product, quantity: 1 }];
    });

   
    const id = Date.now();
    setNotify(prev => [...prev, { id, message: `Đã thêm ${product.title} vào giỏ`, type: 'success' }]);
    setTimeout(() => setNotify(prev => prev.filter(n => n.id !== id)), 2000);
  };

  if (products.loading) return <p>Đang tải sản phẩm...</p>;
  if (products.error) return <p style={{ color: 'red' }}>{products.error}</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
      {products.items.map(p => (
        <div key={p.id} style={{ border: '1px solid #ddd', padding: '10px' }}>
          <img src={p.image} alt={p.title} style={{ width: '50px' }} />
          <h5>{p.title.substring(0, 20)}...</h5>
          <p>${p.price}</p>
          <button onClick={() => addToCart(p)}>Mua ngay</button>
        </div>
      ))}
    </div>
  );
};

export default ProductManager;