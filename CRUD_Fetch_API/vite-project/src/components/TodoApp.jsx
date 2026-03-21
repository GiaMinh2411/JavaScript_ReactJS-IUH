import React, { useState, useEffect } from 'react';

function TodoApp() {

    const [todoList, settodoList] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/todos")
            .then(res => res.json())
            .then(data => {
                const newTodos = data.todos.map(item => ({
                    id: item.id,
                    content: item.todo,
                    status: item.completed ? "complete" : "initial",
                    isEdit: false
                }));

                settodoList(newTodos);
            })
            .catch(err => console.log(err));
    }, []);

    const hanldeCreate = (event) => {
        event.preventDefault();

        const content = event.target.content.value;

        if (content) {
            settodoList([
                {
                    id: Date.now(),
                    content: content,
                    status: "initial",
                    isEdit: false
                },
                ...todoList
            ]);

            event.target.content.value = "";
        }
    };

    const handleRemove = (id) => {
        const todoListFilter = todoList.filter(item => item.id !== id);
        settodoList(todoListFilter);
    };

    const handleChangeStatus = (event, id) => {
        const status = event.target.value;

        const todoListNew = [...todoList];
        const itemUpdate = todoListNew.find(item => item.id === id);

        itemUpdate.status = status;

        settodoList(todoListNew);
    };

    const handleEdit = (id, isEdit) => {
        const todoListNew = [...todoList];
        const itemUpdate = todoListNew.find(item => item.id === id);

        itemUpdate.isEdit = isEdit;

        settodoList(todoListNew);
    };

    const handleUpdate = (event, id) => {
        const content = event.target.value;

        const todoListNew = [...todoList];
        const itemUpdate = todoListNew.find(item => item.id === id);

        itemUpdate.content = content;

        settodoList(todoListNew);
    };

    return (
        <>
            <div className='todo'>

            
                <form className='todo_create' onSubmit={hanldeCreate}>
                    <input type="text" name='content' placeholder='nhập nội dung' />
                    <button>tạo</button>
                </form>

                <div className='todo_list'>
                    {todoList.map(item => (<div
                            key={item.id}
                            className={`todo_item todo_item--${item.status}`}
                        >

                            {item.isEdit ? (
                                <input
                                    type="text"
                                    defaultValue={item.content}
                                    onBlur={() => handleEdit(item.id, false)}
                                    onChange={(event) =>
                                        handleUpdate(event, item.id)
                                    }
                                />
                            ) : (
                                <span onClick={() => handleEdit(item.id, true)}>
                                    {item.content}
                                </span>
                            )}

                            <span>
                                <select
                                    value={item.status}
                                    onChange={(event) =>
                                        handleChangeStatus(event, item.id)
                                    }
                                >
                                    <option value="initial">khởi tạo</option>
                                    <option value="doing">đang làm</option>
                                    <option value="complete">hoàn thành</option>
                                    <option value="reject">không hoàn thành</option>
                                </select>
                            </span>

                            <span>
                                <button onClick={() => handleRemove(item.id)}>
                                    xóa
                                </button>
                            </span>

                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default TodoApp;