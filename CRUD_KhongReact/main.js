const API_URL = "https://dummyjson.com/todos";
let todos = [];

function setActiveButton(btn) {
    document
        .querySelectorAll(".api-btn")
        .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
}

function fetchWithThen(btn) {
    setActiveButton(btn);

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            todos = data.todos.map(item => ({
                id: item.id,
                todo: item.todo
            }));
            renderTodos();
        })
        .catch(err => console.log("Fetch then error:", err));
}

async function fetchWithAsync(btn) {
    setActiveButton(btn);

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        todos = data.todos.map(item => ({
            id: item.id,
            todo: item.todo
        }));

        renderTodos();
    } catch (error) {
        console.log("Async/Await error:", error);
    }
}

function fetchWithAxios(btn) {
    setActiveButton(btn);

    axios.get(API_URL)
        .then(res => {
            todos = res.data.todos.map(item => ({
                id: item.id,
                todo: item.todo
            }));
            renderTodos();
        })
        .catch(err => console.log("Axios error:", err));
}

function createTodo() {
    const input = document.getElementById("todoInput");
    const value = input.value.trim();

    if (!value) {
        alert("Vui lòng nhập nội dung!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        todo: value
    };

    todos.unshift(newTodo);
    renderTodos();
    input.value = "";
}

function deleteTodo(id) {
    todos = todos.filter(item => item.id !== id);
    renderTodos();
}

function renderTodos() {
    const ul = document.getElementById("todoList");
    ul.innerHTML = "";

    if (todos.length === 0) {
        ul.innerHTML = "<li>Chưa có dữ liệu</li>";
        return;
    }

    todos.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.todo}
            <button onclick="deleteTodo(${item.id})">Xóa</button>
        `;
        ul.appendChild(li);
    });
}
