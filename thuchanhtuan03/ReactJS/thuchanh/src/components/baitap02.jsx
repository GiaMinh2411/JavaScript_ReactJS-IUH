import { useEffect, useState } from "react";

function Baitap02() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h3>Bài tập 02</h3>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}

export default Baitap02;
