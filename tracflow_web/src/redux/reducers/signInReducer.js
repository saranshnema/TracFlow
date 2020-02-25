

export const UPDATE_SIGNIN_DETAILS = "UPDATE_SIGNIN_DETAILS";

export const RESET = "RESET";

const initialState = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	confirmPassword: "",
	mobile: ""
};

const SignInDetailsReducer = (state = initialState, action) => {

	switch (action.type) {

	case  UPDATE_SIGNIN_DETAILS :
		return {
			...state, ...action.payload
		};

	case RESET :
		return {
			...initialState
		};

	default :
		return state;
	}

};


export default SignInDetailsReducer;