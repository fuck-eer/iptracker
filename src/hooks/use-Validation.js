import { useState } from "react";
//CUSTOM HOOK FOR INPUT VALIDATION
const useValidation = (validationFunc) => {
	//STATE DECLARTIONS
	const [enteredValue, setEnteredValue] = useState("");
	const [isTouched, setIsTouched] = useState(false);
	//GETTING VARIBLE SIGNS
	const isValid = validationFunc(enteredValue);
	const hasError = isTouched && !isValid;
	//ONVALUECHANGE
	const onEVChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};
	//ONBLUR
	const onBlurHandler = () => {
		setIsTouched(true);
	};
	//RESET FORM FUNCTION
	const reset = () => {
		setEnteredValue("");
		setIsTouched(false);
	};

	//RETURN FUNCTIONS
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
