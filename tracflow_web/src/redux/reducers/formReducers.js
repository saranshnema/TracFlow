

export const UPDATE_FORM_DETAILS = "UPDATE_FORM_DETAILS";

export const RESET = "RESET";

const initialState = {
	testLastName: ""
	
};


const FormDetailsReducer = (state = initialState, action) => {

	switch (action.type) {

	case  UPDATE_FORM_DETAILS :
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


export default FormDetailsReducer;