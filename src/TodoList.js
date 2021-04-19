import React from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './TodoItem';

export { TodoList };

function TodoList(props) {

	return (
		<ul className="todo-list">
			{props.todos.map(item => {
				return <TodoItem
					key={item.id}
					todo={item}
					onChange={props.onToggle} />;
			})}
		</ul>
	);

}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onToggle: PropTypes.func.isRequired,
}