import { useMemo, useState } from "react";

const products = Array.from({ length: 3000 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: Math.floor(Math.random() * 1000) + 1
}));

function Baitap03() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // ===== Filter sản phẩm (useMemo) =====
  const filteredProducts = useMemo(() => {
    console.time("Filter products");

    const result = products.filter((p) => {
      return (
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (minPrice === "" || p.price >= Number(minPrice)) &&
        (maxPrice === "" || p.price <= Number(maxPrice))
      );
    });

    console.timeEnd("Filter products");
    return result;
  }, [search, minPrice, maxPrice]);

  // ===== Tính tổng tiền (useMemo) =====
  const totalPrice = useMemo(() => {
    console.time("Total price");

    const total = filteredProducts.reduce(
      (sum, p) => sum + p.price,
      0
    );

    console.timeEnd("Total price");
    return total;
  }, [filteredProducts]);

  return (
    <div>
      <h3>Bài tập 03</h3>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

      <input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />

      <p>Số sản phẩm: {filteredProducts.length}</p>
      <p>Tổng tiền: {totalPrice}</p>
    </div>
  );
}

export default Baitap03;
