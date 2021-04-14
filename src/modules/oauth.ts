const FETCH_OAUTH = 'oauth/fetch' as const;

export const fetchOauth = oauth => ({
	type: FETCH_OAUTH,
	oauth,
});

const initState = {
	code: '',
	token: '',
	vendor: '',
};

function oauthReducer(state = initState, action) {
	switch (action.type) {
		case FETCH_OAUTH:
			return action.oauth;
		default:
			return state;
	}
}

export default oauthReducer;
