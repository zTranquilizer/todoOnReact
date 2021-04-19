import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './context';

export { TodoItem };

const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',

	},
	input: {
		display: 'inlineBlock',
		margin: '0 5px 0 0',
	}
};

function TodoItem(props) {
	const { removeTodo } = useContext(Context);
	const classes = [];

	if (props.todo.completed) {
		classes.push('completed');
	}

	return (
		<li style={styles.li}>
			<div className={classes.join('')}>
				<input
					type="checkbox"
					style={styles.input}
					onChange={() => props.onChange(props.todo.id)}
					checked={props.todo.completed}
				/>
				<span >{props.todo.title}</span>
			</div>
			<button onClick={() => removeTodo(props.todo.id)}>&times;</button>
		</li>
	);
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
}