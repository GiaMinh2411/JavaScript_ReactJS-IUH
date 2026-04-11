import React from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Giỏ hàng của bạn</h2>
      <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
        <p>1. Sản phẩm đã chọn: iPhone</p>
        <p>Tổng tiền: 20.000.000đ</p>
      </div>
      <br />
      <button 
        onClick={() => navigate('/checkout')}
        style={{ padding: '10px 20px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Tiến hành thanh toán
      </button>
    </div>
  )
}

export default Cart