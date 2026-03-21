import { useRef, useState } from "react";

function Baitap05() {
  const [time, setTime] = useState(0); // milliseconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const [lapName, setLapName] = useState("");

  //useRef lưu intervalId
  const intervalRef = useRef(null);

  //useRef để focus input
  const lapInputRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    setRunning(true);
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const addLap = () => {
    setLaps([...laps, { name: lapName, time }]);
    setLapName("");

    // focus input
    lapInputRef.current.focus();
  };

  return (
    <div>
      <h3>Bài tập 05</h3>

      <h2>{time} ms</h2>

      <button onClick={start} disabled={running}>
        Start
      </button>
      <button onClick={pause} disabled={!running}>
        Pause
      </button>
      <button onClick={reset}>
        Reset
      </button>

      <hr />

      <input
        ref={lapInputRef}
        value={lapName}
        onChange={(e) => setLapName(e.target.value)}
        placeholder="Lap name"
      />
      <button onClick={addLap}>Add Lap</button>

      <ul>
        {laps.map((lap, index) => (
          <li key={index}>
            {lap.name || "Lap"} - {lap.time} ms
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Baitap05;
