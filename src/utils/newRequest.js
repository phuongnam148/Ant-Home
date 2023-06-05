import axios from 'axios';

const newRequest = axios.create({
	baseURL: 'https://walrus-app-h879i.ondigitalocean.app/api/',
	withCredentials: true,
});

export default newRequest;
