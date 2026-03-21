import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/200" alt="product" />
      <h3>Sản phẩm A</h3>
      <p className="price">500.000đ</p>
      <button> Add to cart </button>
    </div>
  );
}

export default ProductCard;
