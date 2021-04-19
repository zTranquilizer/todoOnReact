import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export { AddTodo };

function useInputValue(defaultValue = '') {
	const [value, setValue] = useState('');

	return {
		bind: {
			value: value,
			onChange: event => setValue(event.target.value),
		},
		clear: () => setValue(''),
		value: () => value,

	}
}

function AddTodo(props) {

	const input = useInputValue('');

	function submitHandler(event) {
		event.preventDefault();
		if (input.value().trim()) {
			props.onCreate(input.value());
			input.clear('');
		}
	}

	return (
		<form onSubmit={submitHandler}>
			<input type="text" {...input.bind} />
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
}