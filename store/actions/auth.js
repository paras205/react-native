import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const LOADING = 'LOADING';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOAD_USER = 'LOAD_USER';
export const SIGN_OUT = 'SIGN_OUT';

axios.defaults.baseURL = 'http://192.168.1.67:8000/api/v1';

export const loadUser = (token) => {
	return { type: LOAD_USER, token };
};

export const register = (data) => {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.post('/users/register', data);
			dispatch({ type: REGISTER_USER, payload: res.data });
			saveDataToStorage(res.data.token);
			loadUser(res.data.token);
		} catch (err) {
			console.log(err);
		}
	};
};

export const login = (data) => {
	return async (dispatch) => {
		try {
			dispatch({ type: LOADING });
			const res = await axios.post('/users/login', data);
			dispatch({ type: LOGIN_USER, payload: res.data });
			saveDataToStorage(res.data.token);
			loadUser(res.data.token);
		} catch (err) {
			console.log(err);
		}
	};
};

export const saveDataToStorage = (token) => {
	AsyncStorage.setItem('token', token);
};
