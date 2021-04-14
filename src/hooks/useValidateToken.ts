import asyncLocalStorage from 'util/asyncLocalStorage';

import React, { useState, useEffect } from 'react';

import { validateTokenAPI } from 'api/http';
import { useHistory } from 'react-router-dom';

const useValidateToken = () => {
	const [isValidated, setIsValidated] = useState(false);
	const history = useHistory();

	useEffect(() => {
		(async () => {
			const token = await asyncLocalStorage.getItem('token');
			if (token) {
				await validateTokenAPI(token);
				setIsValidated(true);
				history.push('/');
			}
		})();
	}, []);

	return { isValidated };
};

export default useValidateToken;
