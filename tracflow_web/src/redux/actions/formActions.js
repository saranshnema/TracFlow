import {UPDATE_FORM_DETAILS, RESET} from "../reducers/formReducers";

export const updateFormDetails =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_FORM_DETAILS,
	payload : fieldAndValueObject
});



export const resetForm =(dispatch, fieldAndValueObject)=>dispatch({
	type : RESET,
	payload : fieldAndValueObject
});

