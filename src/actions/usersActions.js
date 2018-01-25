import layerApi from '../api/jsonApi';
import * as types from '../actions/actionsTypes';

export function loadJsonSuccess(users) {
	return {type: types.LOAD_JSON_SUCCESS, users}
}

export function loadJson() {
	return function (dispatch) {
		return layerApi.getAlpUsers().then(users => {
			dispatch(loadJsonSuccess(users.data.data));
		}, err => {
			throw(err);
		})
	}
}
