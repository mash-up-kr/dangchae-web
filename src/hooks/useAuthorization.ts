import { useCallback, useState, useEffect } from 'react';

import { signinAPI } from 'api/http';
import axios from 'axios';
import { login } from 'modules/auth';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

const REDIRECT_URI = 'http://localhost:3000/sign-in';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

const NAVER_OAUTH_URI = 'https://nid.naver.com/oauth2.0';
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;

interface IOauth {
	code: string;
	token: string;
	vendor: string;
}

interface IOauthInfo {
	[key: string]: {
		oauthUrl: string;
		codeRequestQuery: any;
		tokenReqeustQuery: any;
	};
}

const oauthInfo: IOauthInfo = {
	KAKAO: {
		oauthUrl: KAKAO_OAUTH_URI,
		codeRequestQuery: {
			client_id: KAKAO_REST_API_KEY,
			redirect_uri: REDIRECT_URI,
			response_type: 'code',
		},
		tokenReqeustQuery: {
			grant_type: 'authorization_code',
			client_id: KAKAO_REST_API_KEY,
			redirect_uri: REDIRECT_URI,
			code: '',
		},
	},
	NAVER: {
		oauthUrl: NAVER_OAUTH_URI,
		codeRequestQuery: {
			client_id: NAVER_CLIENT_ID,
			redirect_uri: REDIRECT_URI,
			response_type: 'code',
			state: '',
		},
		tokenReqeustQuery: {
			grant_type: 'authorization_code',
			client_id: NAVER_CLIENT_ID,
			client_secret: NAVER_CLIENT_SECRET,
			redirect_uri: REDIRECT_URI,
			state: '',
			code: '',
		},
	},
};

const useAuthorization = () => {
	const [oauth, setOauth] = useState<IOauth>({
		code: '',
		token: '',
		vendor: '',
	});
	const location = useLocation();
	const history = useHistory();
	const dispatch = useDispatch();
	const { code } = queryString.parse(location.search);

	const openAuthorization = useCallback(vendor => {
		window.localStorage.setItem('vendor', vendor);
		const oauthUrl = oauthInfo[vendor].oauthUrl;
		const query = oauthInfo[vendor].codeRequestQuery;
		window.open(`${oauthUrl}/authorize?${queryString.stringify(query)}`, '_self');
	}, []);

	useEffect(() => {
		if (code) {
			const vendor = window.localStorage.getItem('vendor') || '';
			const oauthUrl = oauthInfo[vendor].oauthUrl;
			const query = { ...oauthInfo[vendor].tokenReqeustQuery, code };
			(async () => {
				const resp = await axios.post(`${oauthUrl}/token?${queryString.stringify(query)}`);
				setOauth({ ...oauth, token: resp.data.access_token, vendor });
			})();
		}
	}, [code]);

	useEffect(() => {
		if (oauth.token && oauth.vendor) {
			(async () => {
				try {
					const resp = await signinAPI(oauth);
					dispatch(login(resp));
					history.push('/');
				} catch (err) {
					history.push('/sign-up', { ...oauth });
				}
			})();
		}
	}, [oauth]);

	return { openAuthorization };
};

export default useAuthorization;
