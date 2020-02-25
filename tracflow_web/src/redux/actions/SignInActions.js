import {UPDATE_SIGNIN_DETAILS} from "../reducers/signInReducer";

export const updateSignInDetails =(dispatch, fieldAndValueObject)=>dispatch({
	type : UPDATE_SIGNIN_DETAILS,
	payload : fieldAndValueObject
});


