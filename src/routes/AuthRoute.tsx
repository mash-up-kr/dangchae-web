import React from 'react';

import { Redirect, Route } from 'react-router-dom';

interface AuthRouteProps {
	isValidated: boolean;
	children: React.ReactNode;
}

function AuthRoute({ isValidated, children, ...rest }: AuthRouteProps) {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isValidated ? (
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
