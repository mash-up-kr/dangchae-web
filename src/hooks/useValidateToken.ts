import React, { useState, useEffect } from 'react';

import { validateTokenAPI } from 'api/http';
import { useHistory } from 'react-router-dom';

const useValidateToken = () => {
	const [isValidated, setIsValidated] = useState(false);
	const history = useHistory();
	const [token, setToken] = useState('');

	useEffect(() => {
		if (token) {
			localStorage.setItem('token', token);
		}

		if (localStorage.getItem('token')) {
			setToken(localStorage.getItem('token') as string);
		}

		(async () => {
			if (token) {
				try {
					await validateTokenAPI(token);
					setIsValidated(true);
					history.push('/');
				} catch (err) {
					history.push('/sign-in');
					console.log(`error: ${err.message}`);
				}
			}
		})();
	}, [token]);

	return { isValidated, setToken };
};

export default useValidateToken;
