const LOGIN = 'auth/login' as const;
const LOGOUT = 'auth/logout' as const;

interface LoginResponse {
	nickname: string;
	profileURL: string;
	token: string;
	refreshToken: string;
}

export const login = ({ nickname, profileURL, token, refreshToken }: LoginResponse) => ({
	type: LOGIN,
	nickname,
	profileURL,
	token,
	refreshToken,
});

export const logout = () => ({
	type: LOGOUT,
});

const initState = {
	isLogged: false,
	nickname: '',
	profileURL: '',
};

function authReducer(state = initState, action) {
	switch (action.type) {
		case LOGIN:
			localStorage.setItem('token', action.token);
			localStorage.setItem('refreshToken', action.refreshToken);
			return {
				...state,
				isLogged: true,
				nickname: action.nickname,
				profileURL: action.profileURL,
			};

		case LOGOUT:
			localStorage.removeItem('token');
			localStorage.removeItem('refreshToken');
			return {
				...initState,
			};

		default:
			return state;
	}
}

export default authReducer;
