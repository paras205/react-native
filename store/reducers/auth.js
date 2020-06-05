import { LOGIN_USER, REGISTER_USER, LOADING, LOAD_USER } from '../actions/auth';

const initialState = {
	isAuthenticated: null,
	loading: true
};
export default function(state = initialState, action) {
	switch (action.type) {
		case LOAD_USER:
		case LOGIN_USER:
		case REGISTER_USER: {
			return {
				...state,
				loading: false,
				isAuthenticated: true
			};
		}
		case LOADING: {
			return {
				...state,
				loading: true
			};
		}
		default:
			return state;
	}
}
