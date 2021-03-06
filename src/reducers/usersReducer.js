import initialState from "../initialState";
import * as types from '../actions/actionsTypes';

export default function usersReducer(state = initialState.users, action) {
	switch (action.type) {
		case types.LOAD_JSON_SUCCESS:
			return Object.assign({}, state, {users: action.users});
		default:
			return state;
	}
}
