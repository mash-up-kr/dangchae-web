import React, { useEffect } from 'react';

import { validateTokenAPI } from 'api/http';
import Footer from 'components/Footer';
import { login } from 'modules/auth';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import AuthRoute from 'routes/AuthRoute';
import styled from 'styled-components';

import * as Pages from '../pages';

const AppWrapper = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const AppContent = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const App = () => {
	const token = window.localStorage.getItem('token');
	const dispatch = useDispatch();
	const history = useHistory();

	useEffect(() => {
		(async () => {
			if (token) {
				const resp = await validateTokenAPI(token);
				dispatch(login(resp));
				history.push('/');
			}
		})();
	}, []);
	return (
		<AppWrapper>
			<AppContent>
				<Switch>
					<Route exact path="/sign-in" component={Pages.Signin} />
					<Route exact path="/sign-up" component={Pages.Signup} />
					<AuthRoute>
						<Route exact path="/" component={Pages.Diarys} />
						<Route exact path="/new-diary" component={Pages.NewDiary} />
						<Route exact path="/:diaryId" component={Pages.Diary} />
						<Route exact path="/:diaryId/paper" component={Pages.Papers} />
						<Route exact path="/:diaryId/paper/new-paper" component={Pages.NewPaper} />
						<Route exact path="/:diaryId/paper/:paperId" component={Pages.Paper} />
					</AuthRoute>
				</Switch>
			</AppContent>
			<Footer />
		</AppWrapper>
	);
};

export default App;
