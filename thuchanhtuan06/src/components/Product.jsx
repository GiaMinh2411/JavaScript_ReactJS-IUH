import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom' 

function Product() {
    const navigate = useNavigate(); 
    const products = { 1: "Iphone", 2: "Samsung", 3: "Laptop" }
    const { id } = useParams()

    const handleAddToCart = () => {
        alert("Đã thêm vào giỏ hàng!");
        navigate("/cart"); 
    }

    if (id) {
        return (
            <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '10px', borderRadius: '10px' }}>
                <h1>Chi tiết sản phẩm: {products[id] || "Không xác định"}</h1>
                <p>Mô tả: Đây là sản phẩm chất lượng cao với ID {id}.</p>
                
                <button 
                    onClick={handleAddToCart}
                    style={{ padding: '10px 20px', backgroundColor: '#ff9f00', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                    Thêm vào giỏ hàng
                </button>
                
                <br /><br />
                <Link to="/products">Quay lại danh sách</Link>
            </div>
        )
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Danh sách sản phẩm</h1>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {Object.entries(products).map(([key, name]) => (
                    <li key={key} style={{ marginBottom: '10px' }}>
                        <Link to={`/products/${key}`} style={{ fontSize: '18px', color: '#007bff' }}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Product