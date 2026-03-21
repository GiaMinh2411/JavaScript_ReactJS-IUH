import { useReducer } from "react";

// initial state
const initialState = {
  status: "idle", // idle | loading | success | error
  users: [],
  error: null
};

// reducer (PURE FUNCTION)
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        status: "loading",
        users: [],
        error: null
      };

    case "FETCH_SUCCESS":
      return {
        status: "success",
        users: action.payload,
        error: null
      };

    case "FETCH_ERROR":
      return {
        status: "error",
        users: [],
        error: action.payload
      };

    default:
      return state;
  }
}

function Baitap06() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
    }
  };

  return (
    <div>
      <h3>Bài tập 06</h3>

      {state.status === "idle" && (
        <button onClick={fetchUsers}>Fetch Users</button>
      )}

      {state.status === "loading" && <p>Loading...</p>}

      {state.status === "error" && (
        <div>
          <p>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </div>
      )}

      {state.status === "success" && (
        <ul>
          {state.users.map((u) => (
            <li key={u.id}>{u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Baitap06;
