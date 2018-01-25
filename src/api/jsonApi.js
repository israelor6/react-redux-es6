import axios from 'axios';

const baseAddress = 'https://reqres.in/api';

class JsonApi {
	static getAlpUsers() {
		return axios.get(baseAddress + '/users');
	}
}

export default JsonApi;
