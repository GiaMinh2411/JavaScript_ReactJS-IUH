import { useEffect, useState } from "react";

export default function Bai4() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  useEffect(() => {
    const result = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(result);
  }, [search, posts]);

  return (
    <div>
      <h2>Bài 4</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredPosts.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}