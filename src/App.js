import React, { useEffect } from 'react';
import { TodoList } from './TodoList';
import { Context } from './context';
import { AddTodo } from './AddTodo';

export { App };

function App() {
	const [todos, setTodos] = React.useState([]);

	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
	// 		.then(response => response.json())
	// 		.then(todos => setTodos(todos))
	// 		.catch(err => console.error(err))
	// }, []);

	function toggleTodo(id) {
		setTodos(todos.map(todo => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		}));

	}

	function removeTodo(id) {
		setTodos(todos.filter(todo => todo.id !== id));
	}

	function addTodo(title) {
		setTodos(todos.concat([{
			title: title,
			id: Date.now(),
			completed: false,
		}]));


	}

	return (
		<Context.Provider value={{ removeTodo: removeTodo }}>
			<div className='wrapper'>
				<AddTodo onCreate={addTodo} />
				<h2>Your Todo list.</h2>
				{todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>You have not any todos.</p>}
			</div>
		</Context.Provider>
	);
}

