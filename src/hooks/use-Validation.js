import { useState } from "react";

const useValidation = (validationFunc) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	const isValid = validationFunc(enteredValue);
	const hasError = isTouched && !isValid;

	const onEVChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const onBlurHandler = () => {
		setIsTouched(true);
	};

	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	return {
		enteredValue,
		isTouched,
		isValid,
		onEVChangeHandler,
		onBlurHandler,
		reset,
		hasError,
	};
};

export default useValidation;
