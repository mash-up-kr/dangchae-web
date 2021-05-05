const REDIRECT_URI = 'http://localhost:3000/sign-in';

const KAKAO_OAUTH_URI = 'https://kauth.kakao.com/oauth';
const KAKAO_REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;

const NAVER_OAUTH_URI = 'https://nid.naver.com/oauth2.0';
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
const NAVER_CLIENT_SECRET = process.env.REACT_APP_NAVER_CLIENT_SECRET;

interface IOauthInfo {
	[key: string]: {
		oauthUrl: string;
		codeRequestQuery: any;
		tokenReqeustQuery: any;
	};
}

export const oauthInfo: IOauthInfo = {
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
