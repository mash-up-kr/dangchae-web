import React from 'react';

import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

interface AuthRouteProps {
	children: React.ReactNode;
}

function AuthRoute({ children, ...rest }: AuthRouteProps) {
	const { isLogged } = useSelector(state => state[0]);

	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLogged ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/sign-in',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default AuthRoute;
