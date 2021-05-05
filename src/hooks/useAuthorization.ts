import { oauthInfo } from 'constants/oauthInfo';

import { useCallback, useState, useEffect } from 'react';

import { signinAPI } from 'api/http';
import axios from 'axios';
import { login } from 'modules/auth';
import queryString from 'query-string';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

interface IOauth {
	code: string;
	token: string;
	vendor: string;
}

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
