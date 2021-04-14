import { useCallback, useState, useEffect } from 'react';

import { signinAPI } from 'api/http';
import axios from 'axios';
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';

const REDIRECT_URI = 'http://localhost:3000/sign-in';
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

const useKakaoAuthorization = () => {
	const [token, setToken] = useState('');
	const location = useLocation();
	const { code } = queryString.parse(location.search);

	useEffect(() => {
		if (code) {
			(async () => {
				const query = {
					grant_type: 'authorization_code',
					client_id: KAKAO_REST_API_KEY,
					redirect_uri: REDIRECT_URI,
					code,
				};
				const resp = await axios.post(`${KAKAO_OAUTH_URI}/token?${queryString.stringify(query)}`);
				setToken(resp.data.access_token);
			})();
		}
	}, [code]);

	useEffect(() => {
		if (token) {
			(async () => {
				const oauth = {
					code: '',
					token,
					vendor: 'KAKAO',
				};
				await signinAPI(oauth);
				window.location.reload();
			})();
		}
	}, [token, history]);

	const openKaKaoAuthorization = useCallback(() => {
		window.open(
			`${KAKAO_OAUTH_URI}/authorize?${queryString.stringify({
				client_id: KAKAO_REST_API_KEY,
				redirect_uri: REDIRECT_URI,
				response_type: 'code',
			})}`,
			'_self'
		);
	}, []);

	return { openKaKaoAuthorization };
};

export default useKakaoAuthorization;
