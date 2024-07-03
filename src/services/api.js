import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {getUniqueId} from 'react-native-device-info';

export const baseURL = 'https://server.loader.co.in/api/v1'
export const SOCKET_URL = "https://server.loader.co.in"
export const http2 = 'https://satyakabirbucket.ap-south-1.linodeobjects.com/'

const http = axios.create({
	baseURL: 'https://server.loader.co.in/api/v1',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		// ApiToken: 'U0RvR2x0SEZYa0ljSzgxUkFCUHZpRUpvREFlb0FuTFBPSFA=',
	},
});
// export const http2 = 'https://medzine.svisf.in/'
http.interceptors.request.use(
	async (config) => {
		let token = await AsyncStorage.getItem('@USER_TOKEN');
		// if(token) token = JSON.parse(token).token
		if (token) config.headers.Authorization = `Bearer ${token}`;
		if (token) config.headers.authorization = `${token}`;
		return config;
	},
	(error) => {
		return Promise.reject("Api error ", error);
	},
);
export default http;
