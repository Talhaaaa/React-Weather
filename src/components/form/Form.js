import React from "react";
import './Form.css';

const Form = props => (
	<form onSubmit={props.getWeather} className='formrow'>
		<input type="text" name="city" placeholder="City..."/>
		<input type="text" name="country" placeholder="Country..."/>
		<button className='button'> Weather is </button>
	</form>
);

export default Form;